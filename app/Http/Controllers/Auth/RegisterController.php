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
     * @return array
     */
    public function verifyUniqueEmail()
    {
        return [
            'available' => User::isEmailAvailable(
                request('email'),
                request('ignoreId', null)
            )
        ];
    }

    /**
     * @return array
     */
    public function verifyUniqueCellphone()
    {
        return [
            'available' => User::isCellphoneAvailable(
                preg_replace('/[^0-9]/', '', request('cellphone')),
                request('ignoreId', null)
            )
        ];
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
            'birthday' => Carbon::createFromFormat('d/m/Y', $data['birthday']),
            'cellphone' => preg_replace('/[^0-9]/', '', $data['cellphone']),
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
