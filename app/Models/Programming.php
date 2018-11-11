<?php

namespace UniEventos\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder;

class Programming extends AbstractModel
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'edition_id',
        'date',
        'description'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'date'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function edition()
    {
        return $this->belongsTo(Edition::class, 'edition_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function checkIns()
    {
        return $this->hasMany(UserCheckIn::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany|\Illuminate\Database\Query\Builder
     */
    public function participants()
    {
        return $this
            ->checkIns()
            ->whereNotNull('check_in_at')
            ->whereNotNull('confirmed_by')
            ->join('users as participant', 'user_id', '=', 'participant.id')
            ->join('users as auxiliary', 'confirmed_by', '=', 'auxiliary.id')
            ->selectRaw(join(',', [
                'participant.registration',
                'participant.email',
                "case when participant.gender = 'M' THEN 'Masculino' else 'Feminino' end as gender",
                "case when participant.type = '0' then 'Aluno' when participant.type = '1' then 'Servidor' else 'Comunidade' end as type",
                "to_char(check_in_at, 'DD/MM/YYYY HH24:MI:SS') as check_in_at",
                'auxiliary.name as confirmed_by',
                'participant.name as name',
                'user_check_ins.id'
            ]))->getQuery();
    }

    /**
     * @param $perPage
     * @param $orderBy
     * @param $direction
     * @param $filter
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginateParticipants(
        $perPage,
        $orderBy,
        $direction,
        $filter
    )
    {
        $q = $this->participants()
            ->orderBy(
                $orderBy,
                $direction
            );

        $q = self::makeSubSelectAs($q, 'participants');

        if ($filter && $filter != null) {
            $q->where(function (Builder $builder) use ($filter) {
                $builder->Orwhere('registration', 'ilike', "%${filter}%");
                $builder->Orwhere('name', 'ilike', "%${filter}%");
                $builder->Orwhere('email', 'ilike', "%${filter}%");
                $builder->Orwhere('confirmed_by', 'ilike', "%${filter}%");
                $builder->Orwhere('gender', 'ilike', "%${filter}%");
                $builder->Orwhere('type', 'ilike', "%${filter}%");
                $builder->Orwhere('check_in_at', 'ilike', "%${filter}%");
            });
        }

        return $q->paginate(
            $perPage
        );
    }

    /**
     * @return mixed
     */
    public function isToday()
    {
        return $this->date->isToday();
    }
}
