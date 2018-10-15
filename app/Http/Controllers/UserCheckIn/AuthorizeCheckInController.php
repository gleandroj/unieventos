<?php

namespace UniEventos\Http\Controllers\UserCheckIn;

use UniEventos\Http\Controllers\Controller;
use UniEventos\Models\UserCheckIn;

class AuthorizeCheckInController extends Controller
{
    public function confirm(UserCheckIn $checkIn)
    {
        return [
            'success' => $checkIn->confirm(
                $this->user()
            )
        ];
    }
}
