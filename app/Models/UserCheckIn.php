<?php

namespace UniEventos\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class UserCheckIn extends Model
{
    use SoftDeletes;

    const TOKEN_TTL = 30;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'programming_id',
        'user_id',
        'confirmed_by',
        'check_in_at',
        'token',
        'token_expires_in'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'token'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'token_expires_in'
    ];

    /**
     * @return array
     */
    public function QRCode()
    {
        $qrCode = QRCode::format('png')
            ->size(250)
            ->generate(
                $this->token
            );
        return [
            'id' => $this->getKey(),
            'base64' => "data:image/png;base64," . base64_encode($qrCode),
            'expires_in' => $this->token_expires_in->timestamp
        ];
    }

    /**
     * @return mixed
     */
    public function isExpired()
    {
        return $this->token_expires_in->isPast();
    }

    /**
     * @return bool
     */
    protected function refreshToken()
    {
        return $this->forceFill(
            self::tokenData()
        )->save();
    }

    /**
     * @param Programming $programming
     * @param User $user
     * @return Model|UserCheckIn
     */
    protected static function firstOrCreateCheckIn(Programming $programming, User $user)
    {
        return self::query()
            ->firstOrCreate(
                [
                    'user_id' => $user->getKey(),
                    'programming_id' => $programming->getKey()
                ],
                self::tokenData()
            );
    }

    /**
     * @param Programming $programming
     * @param User $user
     * @return array
     */
    public static function requestForUser(Programming $programming, User $user)
    {
        $userCheckIn = self::firstOrCreateCheckIn($programming, $user);
        if ($userCheckIn->isExpired()) {
            $userCheckIn->refreshToken();
        }
        return $userCheckIn->QRCode();
    }

    /**
     * @return string
     */
    private static function createToken()
    {
        $key = env('APP_KEY');
        if (Str::startsWith($key, 'base64:')) {
            $key = base64_decode(substr($key, 7));
        }
        return hash_hmac('sha256', Str::random(40), $key);
    }

    /**
     * @return array
     */
    private static function tokenData()
    {
        return [
            'token' => self::createToken(),
            'token_expires_in' => Carbon::now()->addSeconds(self::TOKEN_TTL)
        ];
    }
}
