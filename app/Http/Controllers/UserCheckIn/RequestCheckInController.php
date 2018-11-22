<?php
/**
 * Created by PhpStorm.
 * User: fabersoft
 * Date: 09/10/18
 * Time: 14:20
 */

namespace UniEventos\Http\Controllers\UserCheckIn;


use UniEventos\Http\Controllers\Controller;
use UniEventos\Models\Programming;
use UniEventos\Models\UserCheckIn;

class RequestCheckInController extends Controller
{
    public function requestCheckIn(Programming $programming)
    {
        return UserCheckIn::requestForUser(
            $programming, $this->user()
        );
    }
}