<?php
/**
 * Created by PhpStorm.
 * User: fabersoft
 * Date: 10/11/18
 * Time: 19:09
 */

namespace UniEventos\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateUserFeedbackRequest extends FormRequest
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
            '*' => [
                '*' => [
                    'programming_feedback_question_id' => ['required', Rule::exists('programming_feedback_questions', 'id')],
                    'answer' => ['required'],
                    'suggestion' => ['string', 'nullable']
                ]
            ]
        ];
    }
}