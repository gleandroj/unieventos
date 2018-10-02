<?php

namespace Tests\Unit\Models;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use UniEventos\Models\Edition;
use UniEventos\Models\Programming;

class EditionTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreateEdition()
    {
        $edition = factory(Edition::class)->make();
        $this->assertTrue($edition->save());
        $this->assertNotEmpty($edition->id);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testUpdateEdition()
    {
        $edition = factory(Edition::class)->create();
        $this->assertTrue($edition->update([
            'edition' => 'Test Updated'
        ]));
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testFindEdition()
    {
        $edition = factory(Edition::class)->create();
        $found = Edition::query()->find($edition->id);
        $this->assertNotEmpty($found);
        $this->assertEquals($edition->id, $found->id);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testDeleteEdition()
    {
        $edition = factory(Edition::class)->create();
        $this->assertTrue($edition->delete());
        $this->assertEmpty(Edition::query()->find($edition->id));
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testEditionHasManyProgramming()
    {
        $edition = factory(Edition::class)->create();
        factory(Programming::class, 10)->create([
            'edition_id' => $edition->id
        ]);
        $this->assertNotEmpty($edition->programmings);
        $this->assertCount(10, $edition->programmings);
    }
}
