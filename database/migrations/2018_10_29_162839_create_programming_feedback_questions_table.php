<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use UniEventos\Models\ProgrammingFeedbackQuestion;

class CreateProgrammingFeedbackQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('programming_feedback_questions', function (Blueprint $table) {
            $table->increments('id');

            $table->text('question');

            $table->unsignedInteger('programming_feedback_id');
            $table->foreign('programming_feedback_id')->references('id')->on('programming_feedbacks');

            $table->enum('type', ProgrammingFeedbackQuestion::types());

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
        Schema::dropIfExists('programming_feedback_questions');
    }
}
