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

$factory->define(UniEventos\Models\ProgrammingFeedback::class, function (Faker $faker) {
    return [
        'title' => $faker->jobTitle,
        'created_by' => factory(\UniEventos\Models\User::class)->create()->id
    ];
});
