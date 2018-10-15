<?php
/**
 * Created by PhpStorm.
 * User: fabersoft
 * Date: 15/10/18
 * Time: 18:26
 */

namespace UniEventos\Exceptions;

use UniEventos\Support\Exceptions\ApiException;

class CheckInException extends ApiException
{

    public static function outOfDate()
    {
        return new static(
            'CheckInException',
            trans('api.check_in.out_of_date'),
            400
        );
    }

    public static function alreadyConfirmed()
    {
        return new static(
            'CheckInException',
            trans('api.check_in.confirmed'),
            400
        );
    }

    public static function expired()
    {
        return new static(
            'CheckInException',
            trans('api.check_in.expired'),
            400
        );
    }
}