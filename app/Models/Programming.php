<?php

namespace UniEventos\Models;

use Illuminate\Database\Eloquent\Model;

class Programming extends Model
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
}
