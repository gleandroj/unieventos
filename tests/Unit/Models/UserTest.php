<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use UniEventos\Models\User;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreateUser()
    {
        $user = factory(User::class)->make();
        $this->assertTrue($user->save());
        $this->assertNotEmpty($user->id);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testUpdateUser()
    {
        $user = factory(User::class)->create();
        $this->assertTrue($user->update([
            'name' => 'Test Updated'
        ]));
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testFindUser()
    {
        $user = factory(User::class)->create();
        $found = User::query()->find($user->id);
        $this->assertNotEmpty($found);
        $this->assertEquals($user->id, $found->id);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testDeleteUser()
    {
        $user = factory(User::class)->create();
        $this->assertTrue($user->delete());
        $this->assertEmpty(User::query()->find($user->id));
    }
}
