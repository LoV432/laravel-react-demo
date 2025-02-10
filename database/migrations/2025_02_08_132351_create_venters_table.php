<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\File;
use App\Models\Venter;
use Illuminate\Contracts\Filesystem\FileNotFoundException;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('venters', function (Blueprint $table) {
            $table->id();
            $table->string('user_name');
        });
        $path = base_path() . "/venters.json";
        $ventersFile = '';
        try {
            $ventersFile = File::get($path);
        } catch (FileNotFoundException $e) {
            return;
        }
        $venters = json_decode($ventersFile);
        $ventersArray = [];
        foreach ($venters->{'users'} as $index => $venter) {
            $ventersArray[] = ['user_name' => $venter->user_name, 'id' => $venter->id];
            if ($index % 10000 == 0) {
                // I am not sure where this ::insert is coming from but it works
                // https://stackoverflow.com/questions/12702812/bulk-insertion-in-laravel-using-eloquent-orm
                Venter::insert($ventersArray);
                $ventersArray = [];
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('venters');
    }
};
