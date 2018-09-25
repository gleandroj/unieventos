<?php

namespace UniEventos\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes, HasApiTokens;

    const GENDER_MALE = 'M';
    const GENDER_FEMALE = 'F';

    const TYPE_STUDENT = 0;
    const TYPE_SERVANT = 1;
    const TYPE_COMMUNITY = 2;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'cellphone',
        'birthday',
        'type',
        'registration',
        'gender'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * @param $email
     * @return bool
     */
    public static function isEmailAvailable($email)
    {
        return empty(self::query()->where('email', $email)->first());
    }

    /**
     * @param $cellphone
     * @return bool
     */
    public static function isCellphoneAvailable($cellphone)
    {
        return empty(self::query()->where('cellphone', $cellphone)->first());
    }

    /**
     * @param $username
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|null|object
     */
    public function findForPassport($username)
    {
        if (!empty($username)) {
            return $this->newQuery()->where('email', (string)$username)->first();
        }
        return null;
    }
}
