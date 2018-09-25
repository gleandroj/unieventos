<?php

namespace UniEventos\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use UniEventos\Models\User;
use UniEventos\Support\ValidationRules\Cellphone;

class RegisterUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'cellphone' => [
                'required',
                'unique:users,cellphone',
                new Cellphone()
            ],
            'password' => 'required|string|min:6|confirmed',
            'avatar' => [],
            'gender' => [
                'required',
                Rule::in([
                    User::GENDER_MALE,
                    User::GENDER_FEMALE
                ])
            ],
            'birthday' => [
                'required',
                'date_format:d/m/Y'
            ],
            'type' => [
                'required',
                Rule::in([
                    User::TYPE_STUDENT,
                    User::TYPE_SERVANT,
                    User::TYPE_COMMUNITY
                ])
            ],
            'registration' => [
                'required_if:type,0,1',
                'string'
            ]
        ];
    }
}
