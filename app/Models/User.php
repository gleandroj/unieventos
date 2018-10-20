<?php

namespace UniEventos\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Storage;
use Laravel\Passport\HasApiTokens;
use UniEventos\Notifications\User\ResetPasswordNotification;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes, HasApiTokens;

    const GENDER_MALE = 'M';
    const GENDER_FEMALE = 'F';

    const TYPE_STUDENT = 0;
    const TYPE_SERVANT = 1;
    const TYPE_COMMUNITY = 2;

    const ROLE_ADMIN = 'administrator';
    const ROLE_AUXILIARY = 'auxiliary';

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
        'gender',
        'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = [
        'avatar'
    ];

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
        }
    }

    /**
     * @param \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder $query
     * @param $as
     * @return \Illuminate\Database\Query\Builder
     */
    protected static function makeSubSelectAs($query, $as)
    {
        return $query->getConnection()->table(
            $query->getConnection()->raw("({$query->toSql()}) as ${as}")
        )->mergeBindings($query->getQuery());
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
                $builder->Orwhere('type', 'ilike', "%${filter}%");
                $builder->Orwhere('registration', 'ilike', "%${filter}%");
                $builder->Orwhere('gender', 'ilike', "%${filter}%");
                $builder->Orwhere('role', 'ilike', "%${filter}%");
            });
        }

        return $q->paginate(
            $perPage
        );
    }

    private static function customQuery()
    {
        $q = User::query();

        return $q->selectRaw(join(',', [
            'users.registration',
            "case when users.gender = 'M' THEN 'Masculino' else 'Feminino' end as gender",
            "case when users.type = '0' then 'Estudante' when users.type = '1' then 'Servidor' else 'Comunidade' end as type",
            "to_char(users.birthday, 'DD/MM/YYYY') as birthday",
            'users.name as name',
            'users.id',
            'users.cellphone',
            'case when users.role = \'administrator\' then \'Administrador\' when users.role = \'auxliliary\' then \'Aulixiar\' else \'\' end as role',
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
