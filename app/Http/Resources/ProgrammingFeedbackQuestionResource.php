<?php

namespace UniEventos\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProgrammingFeedbackQuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->resource;
    }
}
