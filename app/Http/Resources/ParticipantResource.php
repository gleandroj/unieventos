<?php

namespace UniEventos\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use UniEventos\Models\User;

class ParticipantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return (array)$this->resource;
    }
}
