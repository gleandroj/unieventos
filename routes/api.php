<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use UniEventos\Models\ProgrammingFeedback;
use UniEventos\Models\UserCheckIn;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * Public Api
 */
Route::group(['prefix' => '/auth'], function () {
    /**
     * Register User End Point's
     */
    Route::post('available/email', 'Auth\RegisterController@verifyUniqueEmail');
    Route::post('available/cellphone', 'Auth\RegisterController@verifyUniqueCellphone');
    Route::post('register', 'Auth\RegisterController@register');
    /**
     * Authentication End Point's
     */
    Route::post('login', 'Auth\LoginController@login');
    Route::post('refresh', 'Auth\LoginController@refresh');
    Route::post('logout', 'Auth\LoginController@logout')->middleware('auth');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
});

/**
 * Auth API
 */
Route::middleware(['auth:api'])->group(function () {
    /**
     * Programming
     */
    Route::get('programmings', 'Programming\ProgrammingController@index');

    /**
     * Check In
     */
    Route::get('programmings/{programming}/check-in', 'UserCheckIn\RequestCheckInController@requestCheckIn');

    /**
     * Check In
     */
    Route::post('programmings/{programming}/check-in', 'UserCheckIn\RequestCheckInController@verifyConfirm');

    /**
     * Feedback
     */
    Route::post('programmings/{programming}/user-feedback', 'Programming\ProgrammingFeedbackController@feedback');

    /**
     * Feedback
     */
    Route::get('programmings/{programming}/user-feedback', 'Programming\ProgrammingFeedbackController@feedbackQuestions');
});


/**
 * Administrator API
 */
Route::middleware(['auth:api', 'role:administrator, auxiliary'])->group(function () {
    Route::bind('checkIn', function ($token) {
        return UserCheckIn::findByTokenOrFail($token);
    });
    Route::get('check-in/lottery', 'UserCheckIn\AuthorizeCheckInController@lottery');
    Route::get('check-in/{checkIn}', 'UserCheckIn\AuthorizeCheckInController@data');
    Route::post('check-in/{checkIn}', 'UserCheckIn\AuthorizeCheckInController@confirm');

});

/**
 * Administrator API
 */
Route::middleware(['auth:api', 'role:administrator'])->group(function () {
    /**
     * Programming
     */
    Route::pattern('programming', '[0-9]+');
    Route::apiResource('programmings', 'Programming\ProgrammingController', ['except' => ['index']]);

    Route::get('programmings/editions', 'Programming\ProgrammingController@editions');

    Route::get('programmings/{programming}/participants', 'Programming\ProgrammingController@participants');

    Route::post('programmings/{programming}/participants/export', 'Programming\ProgrammingController@export');

    Route::pattern('user', '[0-9]+');
    Route::apiResource('users', 'User\UserController', ['except' => ['destroy']]);

    Route::pattern('feedback', '[0-9]+');
    Route::bind('feedback', function ($key) {
        return ProgrammingFeedback::query()->findOrFail($key);
    });

    Route::apiResource('programmings/{programming}/feedback', 'Programming\ProgrammingFeedbackController');
    Route::get('programmings/{programming}/feedback/{feedback}/report', 'Programming\ProgrammingFeedbackController@report');
    Route::post('programmings/{programming}/feedback/{feedback}/report/export', 'Programming\ProgrammingFeedbackController@exportReport');
});
