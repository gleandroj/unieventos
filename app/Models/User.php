<?php

namespace UniEventos\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Laravel\Passport\HasApiTokens;
use UniEventos\Notifications\User\ResetPasswordNotification;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends AbstractModel implements
    AuthenticatableContract,
    AuthorizableContract,
    CanResetPasswordContract
{
    use Notifiable,
        SoftDeletes,
        HasApiTokens,
        Authenticatable,
        Authorizable,
        CanResetPassword;

    const GENDER_MALE = 'M';
    const GENDER_FEMALE = 'F';

    const TYPE_STUDENT = 0;
    const TYPE_SERVANT = 1;
    const TYPE_COMMUNITY = 2;

    const ROLE_ADMIN = 'administrator';
    const ROLE_AUXILIARY = 'auxiliary';

    protected $fillable = [
        'name',
        'email',
        'password',
        'cellphone',
        'birthday',
        'type',
        'registration',
        'gender',
        'role'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = [
        'avatar'
    ];

    protected $casts = [
        'type' => 'integer'
    ];

    /**
     * @param $email
     * @param null $ignoreId
     * @return bool
     */
    public static function isEmailAvailable($email, $ignoreId = null)
    {
        return empty(self::query()
            ->where('email', $email)
            ->where('id', '!=', $ignoreId)->first());
    }

    /**
     * @param $cellphone
     * @param null $ignoreId
     * @return bool
     */
    public static function isCellphoneAvailable($cellphone, $ignoreId = null)
    {
        return empty(self::query()
            ->where('cellphone', $cellphone)
            ->where('id', '!=', $ignoreId)->first());
    }

    public function getRoleDescriptionAttribute()
    {
        switch ($this->role) {
            case self::ROLE_ADMIN:
                return 'Administrador';
            case self::ROLE_AUXILIARY:
                return 'Auxiliar';
            default:
                return null;
        }
    }

    public function getTypeDescriptionAttribute()
    {
        return self::getTypeName($this->type);
    }

    public function getGenderDescriptionAttribute()
    {
        return $this->gender === self::GENDER_MALE ? 'Masculino' : 'Feminino';
    }

    /**
     * @param $type
     * @return string
     */
    public static function getTypeName($type)
    {
        switch ($type) {
            case self::TYPE_SERVANT:
                return 'Servidor';
            case self::TYPE_STUDENT:
                return 'Aluno';
            case self::TYPE_COMMUNITY:
                return 'Comunidade';
            default:
                return null;
        }
    }

    /**
     * @param $perPage
     * @param $orderBy
     * @param $direction
     * @param $filter
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public static function paginate($perPage, $orderBy, $direction, $filter)
    {
        $q = self::makeSubSelectAs(self::customQuery(), 'users')
            ->orderBy(
                $orderBy,
                $direction
            );

        if ($filter && $filter != null) {
            $q->where(function ($builder) use ($filter) {
                $builder->Orwhere('name', 'ilike', "%${filter}%");
                $builder->Orwhere('email', 'ilike', "%${filter}%");
                $builder->Orwhere('cellphone', 'ilike', "%${filter}%");
                $builder->Orwhere('birthday', 'ilike', "%${filter}%");
                $builder->Orwhere('registration', 'ilike', "%${filter}%");
                $builder->Orwhere('type_description', 'ilike', "%${filter}%");
                $builder->Orwhere('gender_description', 'ilike', "%${filter}%");
                $builder->Orwhere('role_description', 'ilike', "%${filter}%");
            });
        }

        return $q->paginate(
            $perPage
        );
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Query\Builder
     */
    private static function customQuery()
    {
        $q = User::query();
        return $q->selectRaw(join(',', [
            'users.registration',
            "case when users.gender = 'M' THEN 'Masculino' else 'Feminino' end as gender_description",
            "case when users.type = '0' then 'Aluno' when users.type = '1' then 'Servidor' else 'Comunidade' end as type_description",
            'case when users.role = \'administrator\' then \'Administrador\' when users.role = \'auxiliary\' then \'Auxiliar\' else \'\' end as role_description',

            "users.gender",
            "users.type",
            "users.role",

            "to_char(users.birthday, 'DD/MM/YYYY') as birthday",
            'users.name as name',
            'users.id',
            'users.cellphone',

            'users.email'
        ]));
    }

    /**
     * @return null|string
     */
    public function getAvatarAttribute()
    {
        try {
            $filename = md5($this->email);
            $avatar = Storage::disk()->get("avatars/${filename}");
            return "data:image/png;base64," . base64_encode($avatar);
        } catch (\Exception $exception) {
            return null;
        }
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

    /**
     * Send the password reset notification.
     *
     * @param  string $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }
}
