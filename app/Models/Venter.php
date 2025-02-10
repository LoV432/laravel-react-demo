<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Venter extends Model
{
    public $fillable = [
        'user_name',
    ];

    public $timestamps = false;
}
