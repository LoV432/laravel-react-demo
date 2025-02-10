<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'message_text',
        'created_at',
        'venter_id',
        'color_id',
        'uuid',
        'is_deleted',
    ];

    public $timestamps = false;

    public function venter()
    {
        return $this->belongsTo(Venter::class);
    }

    public function color()
    {
        return $this->belongsTo(Color::class);
    }
}
