<?php

use App\Models\Color;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('colors', function (Blueprint $table) {
            $table->id();
            $table->string('color_name');
        });



        $colors = ['#b3001b', '#c073de', '#edd892', '#3685b5', '#7bf1a8', '#FE938C', '#3BF4FB'];
        foreach ($colors as $color) {
            Color::factory()->create(['color_name' => $color]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('colors');
    }
};
