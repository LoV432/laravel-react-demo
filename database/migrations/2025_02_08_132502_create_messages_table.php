<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use App\Models\Message;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->text('message_text');
            $table->timestampTz('created_at');
            $table->foreignId('venter_id')->constrained();
            $table->foreignId('color_id')->nullable()->constrained();
            $table->uuid('uuid');
            $table->boolean('is_deleted')->default(false);
        });

        $messagesFile = '';
        try {
            $messagesFile = File::get(base_path() . "/messages.json");
        } catch (\Exception $e) {
            return;
        }
        $messages = json_decode($messagesFile);
        $messagesArray = [];
        foreach ($messages->{'messages'} as $index => $message) {
            $messagesArray[] = ['message_text' => $message->message_text, 'created_at' => $message->created_at, 'venter_id' => $message->user_id, 'color_id' => $message->color_id, 'uuid' => $message->uuid, 'is_deleted' => $message->is_deleted];
            if ($index % 1000 == 0) {
                Message::insert($messagesArray);
                $messagesArray = [];
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
