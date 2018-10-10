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
        return [
            'name' => $this->name,
            'registration' => $this->registration,
            'type' => $this->type,
            'gender' => $this->gender,
            'check_in_at' => $this->resource->check_in_at,
            'confirmed_by' => $this->confirmed_by
        ];
    }
}
