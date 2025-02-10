<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Venter extends Model
{
    protected $fillable = [
        'user_name',
    ];

    public $timestamps = false;

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
