<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProgrammingFeedbacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('programming_feedbacks', function (Blueprint $table) {
            $table->increments('id');
            $table->text('title');

            $table->unsignedInteger('created_by');
            $table->foreign('created_by')->references('id')->on('users');

            $table->unsignedInteger('programming_id');
            $table->foreign('programming_id')->references('id')->on('programmings');

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
        Schema::dropIfExists('programming_feedbacks');
    }
}
