<?php
/**
 * Created by PhpStorm.
 * User: fabersoft
 * Date: 20/10/18
 * Time: 18:23
 */

namespace UniEventos\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaginateUserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            "birthday" => $this->birthday,
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