<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use UniEventos\Models\User;

class RegisterUserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @return void
     */
    public function testRegisterUserSuccess()
    {
        $response = $this->post('/api/auth/register', [
            'name' => 'Test User',
            'gender' => 'M',
            'email' => 'test@email.com.br',
            'password' => '123321',
            'password_confirmation' => '123321',
            'type' => 0,
            'registration' => '1234567',
            'birthday' => '29/01/2000',
            'cellphone' => '(62) 99999-9999'
        ]);
        $response->assertStatus(201);
        $response->assertJsonStructure([
            'success',
            'data' => [
                'message'
            ]
        ]);
    }

    /**
     * @return void
     */
    public function testRegisterUserValidation()
    {
        $response = $this->post('/api/auth/register', []);
        $response->assertStatus(422);
        $response->assertJsonStructure([
            'data',
            'error',
            'message'
        ]);
    }

    /**
     * @return void
     */
    public function testCellphoneAlreadyBeenTaken()
    {
        $user = factory(User::class)->create();
        $response = $this->post('/api/auth/available/cellphone', [
            'cellphone' => $user->cellphone
        ]);
        $response->assertStatus(200);
        $response->assertJson([
            'available' => false
        ]);
    }

    /**
     * @return void
     */
    public function testCellphoneAvailable()
    {
        $user = factory(User::class)->make();
        $response = $this->post('/api/auth/available/cellphone', [
            'cellphone' => $user->cellphone
        ]);
        $response->assertStatus(200);
        $response->assertJson([
            'available' => true
        ]);
    }

    /**
     * @return void
     */
    public function testEmailAlreadyBeenTaken()
    {
        $user = factory(User::class)->create();
        $response = $this->post('/api/auth/available/email', [
            'email' => $user->email
        ]);
        $response->assertStatus(200);
        $response->assertJson([
            'available' => false
        ]);
    }

    /**
     * @return void
     */
    public function testEmailAvailable()
    {
        $user = factory(User::class)->make();
        $response = $this->post('/api/auth/available/email', [
            'email' => $user->email
        ]);
        $response->assertStatus(200);
        $response->assertJson([
            'available' => true
        ]);
    }
}
