<?php
/**
 * Created by PhpStorm.
 * User: fabersoft
 * Date: 20/10/18
 * Time: 16:46
 */

namespace UniEventos\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class UserCheckInDataResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'avatar' => $this->user->avatar,
            'name' => $this->user->name,
            'registration' => $this->user->registration,
            'email' => $this->user->email,
            'edition' => $this->programming->edition->edition,
            'date' => $this->programming->date->format('d/m/Y'),
            'token' => $this->token
        ];
    }
}