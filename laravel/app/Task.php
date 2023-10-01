<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title', 'description', 'date', 'state', 'creator_name',
    ];

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
