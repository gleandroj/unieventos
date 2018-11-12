<?php

namespace UniEventos\Http\Controllers\UserCheckIn;

use UniEventos\Http\Controllers\Controller;
use UniEventos\Http\Resources\UserCheckInDataResource;
use UniEventos\Models\Programming;
use UniEventos\Models\UserCheckIn;
use UniEventos\Support\Exceptions\ApiException;

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

    /**
     * @return UserCheckInDataResource
     * @throws ApiException
     */
    public function lottery()
    {
        if (!$programming = Programming::forToday()) {
            throw new ApiException('programming.not_available', trans('api.programming.not_available'), 400);
        }
        return new UserCheckInDataResource(UserCheckIn::lotteryFor($programming));
    }
}
