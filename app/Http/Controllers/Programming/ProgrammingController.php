<?php

namespace UniEventos\Http\Controllers\Programming;

use Carbon\Carbon;
use UniEventos\Http\Resources\EditionResource;
use UniEventos\Http\Resources\ProgrammingResource;
use UniEventos\Models\Programming;
use UniEventos\Models\Edition;
use Illuminate\Http\Request;
use UniEventos\Http\Controllers\Controller;

class ProgrammingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return EditionResource::collection(Edition::query()
            ->orderBy('created_at', 'desc')
            ->with('programmings')
            ->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response|ProgrammingResource
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'edition' => 'required|string',
            'date' => 'required|date_format:d/m/Y',
            'description' => 'string'
        ]);
        $edition = Edition::query()->firstOrCreate(
            $request->only('edition')
        );
        $programming = Programming::query()->create(
            array_merge($request->except('edition', 'date'), [
                'edition_id' => $edition->getKey(),
                'date' => Carbon::createFromFormat('d/m/Y', $request->get('date'))->toDateTimeString()
            ])
        );
        return new ProgrammingResource($programming);
    }

    /**
     * Display the specified resource.
     *
     * @param  \UniEventos\Models\Programming $programming
     * @return ProgrammingResource|Programming
     */
    public function show(Programming $programming)
    {
        return new ProgrammingResource($programming);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \UniEventos\Models\Programming $programming
     * @return \Illuminate\Http\Response|ProgrammingResource|Programming
     */
    public function update(Request $request, Programming $programming)
    {
        $this->validate($request, [
            'edition' => 'required|string',
            'date' => 'required|date_format:d/m/Y',
            'description' => 'string'
        ]);
        $edition = Edition::query()->firstOrCreate(
            $request->only('edition')
        );
        $programming->update(
            array_merge($request->except('edition', 'date'), [
                'edition_id' => $edition->getKey(),
                'date' => Carbon::createFromFormat('d/m/Y', $request->get('date'))->toDateTimeString()
            ])
        );
        return new ProgrammingResource($programming->refresh());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \UniEventos\Models\Programming $programming
     * @return array
     * @throws \Exception
     */
    public function destroy(Programming $programming)
    {
        return [
            'success' => boolval($programming->delete())
        ];
    }
}
