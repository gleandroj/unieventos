<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProgrammingFeedbackAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('programming_feedback_answers', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('programming_feedback_question_id');
            $table->foreign('programming_feedback_question_id')->references('id')->on('programming_feedback_questions');

            $table->string('answer');

            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');

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
        Schema::dropIfExists('programming_feedback_answers');
    }
}
