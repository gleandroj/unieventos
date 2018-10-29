<?php

namespace UniEventos\Http\Controllers\User;

use Illuminate\Support\Carbon;
use UniEventos\Http\Requests\CreateOrUpdateUserRequest;
use UniEventos\Http\Resources\PaginateUserResource;
use UniEventos\Http\Resources\UserResource;
use UniEventos\Models\User;
use UniEventos\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return PaginateUserResource::collection(
            User::paginate(
                request('per_page', 10),
                request('order_by', 'id'),
                request('direction', null),
                array_get(request('filter', []), 'query')
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateOrUpdateUserRequest $request
     * @return \Illuminate\Http\Response|UserResource
     */
    public function store(CreateOrUpdateUserRequest $request)
    {
        $data = $request->validated();
        return new UserResource(
            User::query()->create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
                'gender' => $data['gender'],
                'type' => $data['type'],
                'birthday' => Carbon::createFromFormat('d/m/Y', $data['birthday']),
                'cellphone' => preg_replace('/[^0-9]/', '', $data['cellphone']),
                'registration' => $data['registration'] ?: null,
                'role' => $data['role'] ?: null,
            ])
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \UniEventos\Models\User $user
     * @return UserResource|User
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  CreateOrUpdateUserRequest $request
     * @param  \UniEventos\Models\User $user
     * @return \Illuminate\Http\Response|UserResource|User
     */
    public function update(CreateOrUpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        $update = array_merge(!empty($data['password']) ? [
            'password' => bcrypt($data['password'])
        ] : [], [
            'name' => $data['name'],
            'email' => $data['email'],
            'gender' => $data['gender'],
            'type' => $data['type'],
            'birthday' => Carbon::createFromFormat('d/m/Y', $data['birthday']),
            'cellphone' => preg_replace('/[^0-9]/', '', $data['cellphone']),
            'registration' => $data['registration'] ?: null,
            'role' => $data['role'] ?: null,
        ]);
        $user->update($update);
        return new UserResource($user->fresh());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \UniEventos\Models\User $user
     * @return array
     * @throws \Exception
     */
    public function destroy(User $user)
    {
        return [
            'success' => boolval($user->delete()),
            'message' => trans('api.programming.delete')
        ];
    }
}
