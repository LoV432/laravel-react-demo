<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    // This tells the model to use the database/factories/[MODEL_NAME]Factory
    // The factory in my case is being inside the migration file for this model
    use HasFactory;


    // Eloquent ORM automatically adds created_at and updated_at
    // i am trying to copy the original DB structure which has no timestamps
    public $timestamps = false;
}
