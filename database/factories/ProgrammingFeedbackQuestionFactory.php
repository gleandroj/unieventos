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

$factory->define(UniEventos\Models\ProgrammingFeedbackQuestion::class, function (Faker $faker) {
    return [
        'question' => $faker->text(100),
        'type' => $faker->randomElement(\UniEventos\Models\ProgrammingFeedbackQuestion::types())
    ];
});
