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

$factory->define(UniEventos\Models\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => bcrypt('secret'),
        'remember_token' => str_random(10),
        'avatar' => $faker->image(),
        'birthday' => $faker->date(),
        'type' => $faker->randomElement([
            \UniEventos\Models\User::TYPE_STUDENT,
            \UniEventos\Models\User::TYPE_SERVANT,
            \UniEventos\Models\User::TYPE_COMMUNITY
        ]),
        'registration' => $faker->numerify('#######'),
        'gender' => $faker->randomElement([
            \UniEventos\Models\User::GENDER_MALE,
            \UniEventos\Models\User::GENDER_FEMALE
        ])
    ];
});
