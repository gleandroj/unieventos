<?php
/**
 * Created by PhpStorm.
 * User: fabersoft
 * Date: 25/09/18
 * Time: 14:57
 */

namespace UniEventos\Exceptions;


use UniEventos\Support\Exceptions\ApiException;

class AuthException extends ApiException
{
    public static function invalidCredentials()
    {
        return new static('AuthException', trans('auth.failed'), 401);
    }
}