<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \UniEventos\Models\User::query()->create([
            'name' => 'Administrator',
            'email' => 'admin@sites.com.br',
            'password' => bcrypt('secret'),
            'cellphone' => '62999999999',
            'birthday' => '2018-09-25',
            'type' => \UniEventos\Models\User::TYPE_SERVANT,
            'registration' => '0000000',
            'gender' => \UniEventos\Models\User::GENDER_MALE,
            'role' => \UniEventos\Models\User::ROLE_ADMIN
        ]);

        $this->call(AuthClientTableSeeder::class);
        if (env('APP_ENV') != 'production') {
            $this->testSeed();
        }
    }

    private function testSeed()
    {
        factory(\UniEventos\Models\Programming::class, 10)
            ->create()
            ->each(function (\UniEventos\Models\Programming $programming) {
                factory(\UniEventos\Models\UserCheckIn::class, 5)->create([
                    'programming_id' => $programming->getKey()
                ]);
                $p = factory(\UniEventos\Models\ProgrammingFeedback::class)->create([
                    'programming_id' => $programming->getKey()
                ]);
                factory(\UniEventos\Models\ProgrammingFeedbackQuestion::class, 10)->create([
                    'programming_feedback_id' => $p->id
                ]);
            });
    }
}
