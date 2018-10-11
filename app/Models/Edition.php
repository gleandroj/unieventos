<?php

namespace UniEventos\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\JoinClause;

class Edition extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'edition'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public static function availableEditions()
    {
        return self::query()
            ->orderBy('editions.created_at', 'desc')
            ->join('programmings', function (JoinClause $join) {
                //,
                $join->on('programmings.edition_id', '=', 'editions.id')
                    ->whereNull('programmings.deleted_at');
            })
            ->with([
                'programmings' => function (HasMany $hasMany) {
                    return $hasMany->latest();
                }
            ])
            ->groupBy([
                'editions.id',
                'editions.edition',
                'editions.created_at',
                'editions.updated_at'
            ])
            ->get(['editions.*']);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function programmings()
    {
        return $this->hasMany(Programming::class);
    }

}
