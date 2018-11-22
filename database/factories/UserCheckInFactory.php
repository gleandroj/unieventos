<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(UniEventos\Models\UserCheckIn::class, function (Faker $faker) {
    return array_merge([
        'user_id' => factory(\UniEventos\Models\User::class)->create()->id,
        'confirmed_by' => factory(\UniEventos\Models\User::class)->create()->id,
        'check_in_at' => $faker->dateTimeBetween('-5days', 'now')
    ], \UniEventos\Models\UserCheckIn::tokenData());
});
