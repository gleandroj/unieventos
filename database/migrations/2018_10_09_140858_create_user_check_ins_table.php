<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserCheckInsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_check_ins', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('programming_id');
            $table->foreign('programming_id')->references('id')->on('programmings');

            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');

            $table->unsignedInteger('confirmed_by')->nullable();
            $table->foreign('confirmed_by')->references('id')->on('users');

            $table->dateTime('check_in_at')->nullable();

            $table->string('token')->unique();
            $table->dateTime('token_expires_in');

            $table->unique([
                'user_id',
                'programming_id'
            ]);

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_check_ins');
    }
}
