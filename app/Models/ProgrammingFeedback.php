<?php

namespace UniEventos\Models;

use Illuminate\Database\Query\Builder;

class ProgrammingFeedback extends AbstractModel
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'programming_id',
        'created_by',
        'title'
    ];

    /**
     * @param Programming $programming
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public static function forProgramming(Programming $programming)
    {
        return self::query()->where('programming_id', $programming->getKey())->get();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function questions()
    {
        return $this->hasMany(ProgrammingFeedbackQuestion::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function createdByUser()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function programming()
    {
        return $this->belongsTo(Programming::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function answers()
    {
        return $this->hasManyThrough(ProgrammingFeedbackAnswer::class, ProgrammingFeedbackQuestion::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder
     */
    private function queryReport()
    {
        $TYPE_TEXT = ProgrammingFeedbackQuestion::TYPE_TEXT;
        $TYPE_W_R_G_G = ProgrammingFeedbackQuestion::TYPE_W_R_G_G;
        $TYPE_T_S_I = ProgrammingFeedbackQuestion::TYPE_T_S_I;

        $answer = <<<EOT
        case when programming_feedback_questions.type = '${TYPE_TEXT}' 
                  then programming_feedback_answers.answer
             when programming_feedback_questions.type = '${TYPE_W_R_G_G}'
                  then 
                       case when programming_feedback_answers.answer = '0' then 'FRACO'
                            when programming_feedback_answers.answer = '1' then 'REGULAR'
                            when programming_feedback_answers.answer = '2' then 'BOM'
                            when programming_feedback_answers.answer = '3' then 'ÓTIMO'
                       end
             when programming_feedback_questions.type = '${TYPE_T_S_I}'
                  then 
                       case when programming_feedback_answers.answer = '0' then 'INADEQUADO'
                            when programming_feedback_answers.answer = '1' then 'ADEQUADO'
                            when programming_feedback_answers.answer = '2' then 'TOTALMENTE ADEQUADO'
                       end
        end
EOT;

        return $this->answers()
            ->join('users', 'users.id', '=', 'user_id')
            ->selectRaw(join(',', [
                'programming_feedback_answers.id as id',
                'users.name as user_name',
                'users.email as user_email',
                "case when users.type = '0' then 'Estudante' when users.type = '1' then 'Servidor' else 'Comunidade' end as user_type",
                'users.registration as user_registration',
                "case when users.gender = 'M' THEN 'Masculino' else 'Feminino' end as user_gender",
                "case when programming_feedback_questions.type = '0' then 'Texto Livre' when programming_feedback_questions.type = '1' then 'F-R-B-O' else 'TA-A-I' end as type_description ",
                "programming_feedback_questions.type",
                "programming_feedback_questions.question",
                "programming_feedback_answers.answer as answer",
                "${answer} as answer_description",
                "to_char(programming_feedback_answers.created_at, 'DD/MM/YYYY HH24:MI:SS') as answer_at"
            ]))->getQuery();
    }

    /**
     * @param $perPage
     * @param $orderBy
     * @param $direction
     * @param $filter
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginateReport(
        $perPage,
        $orderBy,
        $direction,
        $filter
    )
    {
        $q = $this->queryReport()->orderBy(
            $orderBy,
            $direction
        );

        $q = self::makeSubSelectAs($q, 'answers');

        if ($filter && $filter != null) {
            $q->where(function (Builder $builder) use ($filter) {
                $builder->Orwhere('user_registration', 'ilike', "%${filter}%");
                $builder->Orwhere('user_name', 'ilike', "%${filter}%");
                $builder->Orwhere('user_gender', 'ilike', "%${filter}%");
                $builder->Orwhere('user_type', 'ilike', "%${filter}%");
                $builder->Orwhere('user_email', 'ilike', "%${filter}%");
                $builder->Orwhere('question', 'ilike', "%${filter}%");
                $builder->Orwhere('type_description', 'ilike', "%${filter}%");
                $builder->Orwhere('answer_description', 'ilike', "%${filter}%");
                $builder->Orwhere('answer_at', 'ilike', "%${filter}%");
            });
        }

        return $q->paginate(
            $perPage
        );
    }
}
