<?php

namespace UniEventos\Models;

class ProgrammingFeedbackQuestion extends AbstractModel
{
    const TYPE_TEXT = 0;

    /**
     * weak 0
     * regular 1
     * good 2
     * great 3
     */
    const TYPE_W_R_G_G = 1;

    /**
     * Totally suitable 2
     * suitable 1
     * inappropriate 0
     */
    const TYPE_T_S_I = 2;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'question',
        'programming_id',
        'type'
    ];

    /**
     * @var array
     */
    protected $casts = [
        'type' => 'integer'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function programmingFeedback()
    {
        return $this->belongsTo(ProgrammingFeedback::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Query\Builder
     */
    private static function customQuery()
    {
        $q = self::query();

        return $q->selectRaw(join(',', [
            'programming_feedback_questions.id',
            "case when programming_feedback_questions.type = '0' then 'Texto Livre' when programming_feedback_questions.type = '1' then 'F-R-B-O' else 'TA-A-I' end as type_description ",
            "programming_feedback_questions.type",
            "programming_feedback_questions.question"
        ]));
    }

    /**
     * @param $perPage
     * @param $orderBy
     * @param $direction
     * @param $filter
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public static function paginate($perPage, $orderBy, $direction, $filter)
    {
        $q = self::makeSubSelectAs(self::customQuery(), 'questions')
            ->orderBy(
                $orderBy,
                $direction
            );

        if ($filter && $filter != null) {
            $q->where(function ($builder) use ($filter) {
                $builder->Orwhere('type_description', 'ilike', "%${filter}%");
                $builder->Orwhere('created_by_name', 'ilike', "%${filter}%");
                $builder->Orwhere('question', 'ilike', "%${filter}%");
            });
        }

        return $q->paginate(
            $perPage
        );
    }

    /**
     * @return array
     */
    public static function types()
    {
        return [
            self::TYPE_TEXT,
            self::TYPE_W_R_G_G,
            self::TYPE_T_S_I
        ];
    }
}
