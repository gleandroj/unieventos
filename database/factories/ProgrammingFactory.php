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

$factory->define(UniEventos\Models\Programming::class, function (Faker $faker) {
    return [
        'edition_id' => factory(\UniEventos\Models\Edition::class)->create()->id,
        'date' => $faker->date(),
        'description' => $faker->realText()
    ];
});
