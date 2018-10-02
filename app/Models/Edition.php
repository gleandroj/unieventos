<?php

namespace UniEventos\Models;

use Illuminate\Database\Eloquent\Model;

class Edition extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'edition'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function programmings()
    {
        return $this->hasMany(Programming::class);
    }

}
