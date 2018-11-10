<?php

namespace UniEventos\Models;

class ProgrammingFeedbackAnswer extends AbstractModel
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'programming_feedback_question_id',
        'user_id',
        'answer'
    ];

    CONST ANSWER_WEAK = 0;
    CONST ANSWER_REGULAR = 1;
    CONST ANSWER_GOOD = 2;
    CONST ANSWER_GREAT = 3;

    CONST ANSWER_TOTALLY_SUITABLE = 2;
    CONST ANSWER_SUITABLE = 1;
    CONST ANSWER_INAPPROPRIATE = 0;

    /**
     * @param $type
     * @return array|null
     */
    public static function availableAnswersForType($type)
    {
        if ($type === ProgrammingFeedbackQuestion::TYPE_T_S_I) {
            return [
                self::ANSWER_TOTALLY_SUITABLE,
                self::ANSWER_SUITABLE,
                self::ANSWER_INAPPROPRIATE
            ];
        } else if ($type === ProgrammingFeedbackQuestion::TYPE_W_R_G_G) {
            return [
                self::ANSWER_WEAK,
                self::ANSWER_REGULAR,
                self::ANSWER_GOOD,
                self::ANSWER_GREAT,
            ];
        }
        return null;
    }
}
