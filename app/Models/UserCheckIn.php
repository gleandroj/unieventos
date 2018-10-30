<?php

namespace UniEventos\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use UniEventos\Exceptions\CheckInException;

class UserCheckIn extends AbstractModel
{
    const TOKEN_TTL = 60;

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
        'token_expires_in',
        'check_in_at'
    ];

    /**
     * @return bool
     */
    public function isConfirmed()
    {
        return $this->confirmed_by != null && $this->check_in_at != null;
    }

    /**
     * @param $token
     * @return \Illuminate\Database\Eloquent\Builder|Model
     */
    public static function findByTokenOrFail($token)
    {
        return static::query()->where('token', $token)->firstOrFail();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function programming()
    {
        return $this->belongsTo(Programming::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function auxiliary()
    {
        return $this->belongsTo(User::class, 'confirmed_by', 'id');
    }

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
        if (!$programming->isToday()) {
            throw CheckInException::outOfDate();
        }

        $userCheckIn = self::firstOrCreateCheckIn($programming, $user);

        if ($userCheckIn->isConfirmed()) {
            throw CheckInException::alreadyConfirmed();
        }

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
    public static function tokenData()
    {
        return [
            'token' => self::createToken(),
            'token_expires_in' => Carbon::now()->addSeconds(self::TOKEN_TTL)
        ];
    }

    /**
     * @param User $confirmedBy
     * @return bool
     */
    public function confirm(User $confirmedBy)
    {
        $this->validateCheckIn();
        $result = $this->forceFill([
            'check_in_at' => Carbon::now(),
            'confirmed_by' => $confirmedBy->getKey()
        ])->save();
        return $result;
    }

    /**
     * @return bool
     */
    public function validateCheckIn()
    {
        if ($this->isExpired()) {
            throw CheckInException::expired();
        } else if ($this->isConfirmed()) {
            throw CheckInException::alreadyConfirmed();
        } else if (!$this->programming->isToday()) {
            throw CheckInException::outOfDate();
        }
        return true;
    }
}
