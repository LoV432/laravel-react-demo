<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\VenterController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'messagesData' => Message::with('venter')->with('color')->orderBy('created_at', 'desc')->paginate(10),
//         // 'pageProps' => DB::select('select * from messages order by created_at desc limit 10'),
//     ]);
// });

Route::resource('messages', MessageController::class)->only(['store', 'index', 'update', 'destroy']);
Route::resource('/', MessageController::class)->only(['index']);

Route::resource('venter', VenterController::class)->only(['show']);
