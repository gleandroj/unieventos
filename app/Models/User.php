<?php

namespace UniEventos\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes;

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
}
