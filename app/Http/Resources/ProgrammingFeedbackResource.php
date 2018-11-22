<?php

namespace UniEventos\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProgrammingFeedbackResource extends JsonResource
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
            'title' => $this->title,
            'created_by_user' => [
                'id' => $this->createdByUser->id,
                'name' => $this->createdByUser->name
            ],
            'questions' => $this->questions,
            'questions_count' => $this->questions->count()
        ];
    }
}
