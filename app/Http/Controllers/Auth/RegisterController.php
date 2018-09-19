<?php

namespace UniEventos\Http\Controllers\Auth;

use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use UniEventos\Http\Requests\RegisterUserRequest;
use UniEventos\Http\Resources\RegisteredUserResource;
use UniEventos\Models\User;
use UniEventos\Http\Controllers\Controller;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  RegisterUserRequest $request
     * @return \Illuminate\Http\Response|mixed
     */
    public function register(RegisterUserRequest $request)
    {
        event(new Registered($user = $this->create($request->validated())));
        return new RegisteredUserResource($user);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return \UniEventos\Models\User|mixed
     */
    protected function create(array $data)
    {
        $user = User::query()->create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'gender' => $data['gender'],
            'type' => $data['type'],
            'birthday' => Carbon::createFromFormat('Y-m-d', $data['birthday']),
            'cellphone' => $data['cellphone'],
            'registration' => $data['registration'] ?: null
        ]);
        $this->checkAvatar($data);
        return $user;
    }

    /**
     * @param array $data
     * @return mixed|null
     */
    protected function checkAvatar(array $data)
    {
        try {
            if (!empty($data['avatar'])) {
                $filename = md5($data['email']);
                Storage::disk()->put("avatars/${filename}",
                    Image::make($data['avatar'])
                        ->encode('png')
                        ->getEncoded()
                );
                return $filename;
            }
            return null;
        } catch (\Exception $exception) {
            return null;
        }
    }
}
