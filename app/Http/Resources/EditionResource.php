<?php

namespace UniEventos\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EditionResource extends JsonResource
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
            'edition' => $this->edition,
            'edition_id' => $this->id,
            'programmings' => ProgrammingResource::collection(
                $this->programmings
            )
        ];
    }
}
