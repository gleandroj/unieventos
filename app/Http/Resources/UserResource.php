<?php
/**
 * Created by PhpStorm.
 * User: fabersoft
 * Date: 20/10/18
 * Time: 18:23
 */

namespace UniEventos\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            "birthday" => Carbon::parse($this->birthday)->format('d/m/Y'),
            "cellphone" => $this->cellphone,
            "email" => $this->email,
            "gender" => $this->gender,
            "gender_description" => $this->gender_description,
            "id" => $this->id,
            "name" => $this->name,
            "registration" => $this->registration,
            "role" => $this->role,
            "role_description" => $this->role_description,
            "type" => intval($this->type),
            "type_description" => $this->type_description
        ];
    }
}