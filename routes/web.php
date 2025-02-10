<?php

use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    return Inertia::render('Home', [
        'messagesData' => DB::table('messages')->orderBy('created_at', 'desc')->paginate(10),
        // 'pageProps' => DB::select('select * from messages order by created_at desc limit 10'),
    ]);
});

Route::resource('messages', MessageController::class)->only(['store']);
