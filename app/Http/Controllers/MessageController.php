<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\Venter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;
use Inertia\Inertia;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Home', [
            'messagesData' => Message::with('venter')->with('color')->orderBy('created_at', 'desc')->paginate(10),
            // 'pageProps' => DB::select('select * from messages order by created_at desc limit 10'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // TODO: This whole venter_id thing isn't secure, but it's just a quick demo
        //       The user can just set their own cookie and it will work

        //       Update: 
        //       I just noticed the cookie is encrypted so I'm not sure how secure it really is
        //       seems to be some laravel magic that I don't understand
        $venter_id = $request->cookie('venter_id');
        if (!$venter_id || !Uuid::isValid($venter_id)) {
            $venter_id = Uuid::uuid4()->toString();
            // return redirect()->back()->withErrors([
            //     'venter_id' => 'Invalid venter_id cookie',
            // ]);
        }

        $formData = $request->validate([
            'message' => 'required|string|max:100',
        ], [
            'message.required' => 'Message is required',
            'message.string' => 'Message must be a string',
            'message.max' => 'Message must be less than 100 characters',
        ]);

        $user = Venter::select('id')->where('user_name', $venter_id)->first();

        DB::beginTransaction();
        if (!$user) {
            $user = Venter::create([
                'user_name' => $venter_id
            ]);
        }

        DB::insert(
            "INSERT INTO messages (message_text, created_at, venter_id, color_id, uuid, is_deleted) VALUES (?, ?, ?, ?, ?, ?)",
            [$formData['message'], now(), $user->id, rand(1, 6), Uuid::uuid4()->toString(), false]
        );
        // Message::create([
        //     'message_text' => $formData['message'],
        //     'created_at' => now(),
        //     'venter_id' => $user->id,
        //     'color_id' => rand(1, 6),
        //     'uuid' => Uuid::uuid4()->toString(),
        //     'is_deleted' => false,
        // ]);
        DB::commit();

        return redirect()->back()->withCookie('venter_id', $venter_id, 3600);
    }

    /**
     * Display the specified resource.
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        //
    }
}
