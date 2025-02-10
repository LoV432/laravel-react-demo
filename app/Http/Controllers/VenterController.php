<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\Venter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VenterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Venter $venter)
    {
        $messages = Message::with('venter')->with('color')
            ->where('venter_id', $venter->id)
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return Inertia::render('venter/Messages', [
            'messagesData' => $messages,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Venter $venter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Venter $venter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Venter $venter)
    {
        //
    }
}
