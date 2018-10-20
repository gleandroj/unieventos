<?php

namespace UniEventos\Http\Controllers\UserCheckIn;

use UniEventos\Http\Controllers\Controller;
use UniEventos\Http\Resources\UserCheckInDataResource;
use UniEventos\Models\UserCheckIn;

class AuthorizeCheckInController extends Controller
{

    /**
     * @param UserCheckIn $checkIn
     * @return UserCheckInDataResource
     */
    public function data(UserCheckIn $checkIn)
    {
        $checkIn->validateCheckIn();
        return new UserCheckInDataResource($checkIn);
    }

    /**
     * @param UserCheckIn $checkIn
     * @return array
     */
    public function confirm(UserCheckIn $checkIn)
    {
        return [
            'success' => $checkIn->confirm(
                $this->user()
            ),
            'message' => trans('api.check_in.success')
        ];
    }
}
