<?php

namespace UniEventos\Events;

use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use UniEventos\Models\UserCheckIn;

class CheckInConfirmed implements ShouldBroadcast, ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var UserCheckIn
     */
    private $userCheckIn;

    /**
     * Create a new event instance.
     *
     * @param UserCheckIn $userCheckIn
     */
    public function __construct(UserCheckIn $userCheckIn)
    {
        $this->userCheckIn = $userCheckIn;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return ['user-check-in'];
    }

    /**
     * @return array
     */
    public function broadcastWith()
    {
        return ['id' => $this->userCheckIn->getKey()];
    }
}
