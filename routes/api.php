<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
    Route::get('check-in/{programming}', 'UserCheckIn\RequestCheckInController@requestCheckIn');
});

/**
 * Administrator API
 */
Route::middleware(['auth:api', 'role:administrator'])->group(function () {
    /**
     * Programming
     */
    Route::pattern('programming', '[0-9]+');
    Route::apiResource('programming', 'Programming\ProgrammingController');
    Route::get('programming/editions', 'Programming\ProgrammingController@editions');
    Route::get('programming/{programming}/participants', 'Programming\ProgrammingController@participants');
    Route::post('programming/{programming}/participants/export', 'Programming\ProgrammingController@export');
});


