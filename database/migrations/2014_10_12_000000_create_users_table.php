<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();

            $table->string('password')->nullable();

            $table->string('avatar')->nullable();
            $table->date('birthday')->nullable();

            $table->enum('type', [
                \UniEventos\Models\User::TYPE_STUDENT,
                \UniEventos\Models\User::TYPE_SERVANT,
                \UniEventos\Models\User::TYPE_COMMUNITY
            ])->nullable();

            $table->enum('gender', [
                \UniEventos\Models\User::GENDER_MALE,
                \UniEventos\Models\User::GENDER_FEMALE
            ])->nullable();

            $table->string('registration')->nullable();

            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
