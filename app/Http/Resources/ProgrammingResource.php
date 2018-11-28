<?php

namespace UniEventos\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProgrammingResource extends JsonResource
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
            'id' => $this->id,
            'date' => $this->date->format('d/m/Y'),
            'edition' => $this->edition->edition,
            'description' => $this->description,
            'is_today' => $this->date->isToday(),
            'is_past' => $this->date->isPast()
        ];
    }
}
