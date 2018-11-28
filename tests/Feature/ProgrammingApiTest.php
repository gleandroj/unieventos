<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use UniEventos\Models\Programming;
use UniEventos\Models\User;

class ProgrammingApiTest extends TestCase
{

    use RefreshDatabase;

    const PROGRAMMING_JSON_STRUCTURE = [
        'data' => [
            'id',
            'edition',
            'date',
            'description',
            'is_today',
            'is_past'
        ]
    ];

    const API_FAIL_JSON_STRUCTURE = [
        'error',
        'message',
        'data'
    ];

    const EDITIONS_JSON_STRUCTURE = [
        'data' => [
            '*' => [
                'edition',
                'programmings' => [
                    '*' => [
                        'id',
                        'edition',
                        'date',
                        'description'
                    ]
                ]
            ]
        ]
    ];

    /**
     *
     */
    private function authenticate()
    {
        $this->be(factory(User::class)->create(['role' => 'administrator']));
    }

    /**
     * @test
     *
     * @return void
     */
    public function it_should_get_all_editions_and_programmings()
    {
        $this->authenticate();
        $response = $this->get('/api/programmings');
        $response->assertStatus(200);
        $response->assertJsonStructure(self::EDITIONS_JSON_STRUCTURE);
    }

    /**
     * @test
     *
     * @return void
     */
    public function it_should_create_a_edition_and_programming()
    {
        $this->authenticate();
        $response = $this->post('/api/programmings', [
            'edition' => 'XVII',
            'description' => 'Description',
            'date' => '12/12/2018'
        ]);
        $response->assertStatus(201);
        $response->assertJsonStructure(self::PROGRAMMING_JSON_STRUCTURE);
    }

    /**
     * @test
     *
     * @return void
     */
    public function it_should_not_create_a_edition_and_programming()
    {
        $this->authenticate();
        $response = $this->post('/api/programmings', []);
        $response->assertStatus(422);
        $response->assertJsonStructure(self::API_FAIL_JSON_STRUCTURE);
    }

    /**
     * @test
     *
     * @return void
     */
    public function it_should_update_a_edition_and_programming()
    {
        $this->authenticate();
        $programming = factory(Programming::class)->create();
        $response = $this->put("/api/programmings/{$programming->id}", [
            'description' => 'updated description',
            'date' => $programming->date->format('d/m/Y'),
            'edition' => $programming->edition->edition
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure(self::PROGRAMMING_JSON_STRUCTURE);
        $response->assertExactJson([
            'data' => [
                'id' => $programming->id,
                'date' => $programming->date->format('d/m/Y'),
                'description' => 'updated description',
                'edition' => $programming->edition->edition,
                'is_today' => $programming->isToday(),
                'is_past' => $programming->date->isPast()
            ]
        ]);
    }
}
