<?php

namespace App\Policies;

use App\Models\Message;
use App\Models\User;
use App\Models\Venter;
use Ramsey\Uuid\Uuid;
use Illuminate\Auth\Access\Response;

class MessagePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Message $message): bool
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(?User $user, Message $message, string $venter_name): bool
    {
        if (!$venter_name || !Uuid::isValid($venter_name)) {
            return false;
        }
        $venter_id = Venter::select('id')->where('user_name', $venter_name)->first();
        if (!$venter_id) {
            return false;
        }
        if ($message->venter_id != $venter_id->id) {
            return false;
        }
        return true;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(?User $user, Message $message, string $venter_name): bool
    {
        if (!$venter_name || !Uuid::isValid($venter_name)) {
            return false;
        }
        $venter_id = Venter::select('id')->where('user_name', $venter_name)->first();
        if (!$venter_id) {
            return false;
        }
        if ($message->venter_id != $venter_id->id) {
            return false;
        }
        return true;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Message $message): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Message $message): bool
    {
        return false;
    }
}
