<?php

namespace Tests\Unit\Models;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use UniEventos\Models\Edition;
use UniEventos\Models\Programming;

class ProgrammingTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreateProgramming()
    {
        $programming = factory(Programming::class)->make();
        $this->assertTrue($programming->save());
        $this->assertNotEmpty($programming->id);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testUpdateProgramming()
    {
        $programming = factory(Programming::class)->create();
        $this->assertTrue($programming->update([
            'description' => 'Test Updated'
        ]));
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testFindProgramming()
    {
        $programming = factory(Programming::class)->create();
        $found = Programming::query()->find($programming->id);
        $this->assertNotEmpty($found);
        $this->assertEquals($programming->id, $found->id);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testDeleteProgramming()
    {
        $programming = factory(Programming::class)->create();
        $this->assertTrue($programming->delete());
        $this->assertEmpty(Programming::query()->find($programming->id));
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testProgrammingHasOneEdition()
    {
        $programming = factory(Programming::class)->create();
        $this->assertNotEmpty($programming->edition);
        $this->assertInstanceOf(Edition::class, $programming->edition);
    }
}
