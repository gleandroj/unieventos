<?php

namespace UniEventos\Http\Controllers\User;

use UniEventos\Http\Resources\UserResource;
use UniEventos\Models\User;
use Illuminate\Http\Request;
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
        return UserResource::collection(
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response|UserResource
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \UniEventos\Models\User $programming
     * @return UserResource|User
     */
    public function show(User $programming)
    {
        return new UserResource($programming);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \UniEventos\Models\User $programming
     * @return \Illuminate\Http\Response|UserResource|User
     */
    public function update(Request $request, User $programming)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \UniEventos\Models\User $programming
     * @return array
     * @throws \Exception
     */
    public function destroy(User $programming)
    {
        return [
            'success' => boolval($programming->delete()),
            'message' => trans('api.programming.delete')
        ];
    }
}
