<?php

namespace UniEventos\Http\Controllers\Programming;

use UniEventos\Http\Controllers\Controller;
use UniEventos\Http\Requests\CreateOrUpdateProgrammingFeedbackRequest;
use UniEventos\Http\Resources\ProgrammingFeedbackResource;
use UniEventos\Http\Resources\ReportResource;
use UniEventos\Models\Programming;
use UniEventos\Models\ProgrammingFeedback;

/**
 * Class ProgrammingFeedbackController
 * @package UniEventos\Http\Controllers\Programming
 */
class ProgrammingFeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Programming $programming
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Programming $programming)
    {
        return ProgrammingFeedbackResource::collection(
            ProgrammingFeedback::forProgramming($programming)
        );
    }

    /**
     * @param Programming $programming
     * @param ProgrammingFeedback $programmingFeedback
     * @return ProgrammingFeedbackResource
     */
    public function show(Programming $programming, ProgrammingFeedback $programmingFeedback)
    {
        return new ProgrammingFeedbackResource($programmingFeedback);
    }

    /**
     * @param Programming $programming
     * @param CreateOrUpdateProgrammingFeedbackRequest $request
     * @return ProgrammingFeedbackResource
     */
    public function store(Programming $programming, CreateOrUpdateProgrammingFeedbackRequest $request)
    {
        $data = collect($request->validated());
        $feedback = ProgrammingFeedback::query()->create(
            $data->except('questions')
                ->merge([
                    'created_by' => $this->user()->getKey(),
                    'programming_id' => $programming->getKey()
                ])->all()
        );
        $questions = $feedback->questions()->createMany($data->get('questions'));
        $feedback->setRelation('questions', $questions);
        return new ProgrammingFeedbackResource($feedback);
    }

    /**
     * @param Programming $programming
     * @param CreateOrUpdateProgrammingFeedbackRequest $request
     * @param ProgrammingFeedback $programmingFeedback
     * @return ProgrammingFeedbackResource
     */
    public function update(
        Programming $programming,
        CreateOrUpdateProgrammingFeedbackRequest $request,
        ProgrammingFeedback $programmingFeedback
    )
    {
        $data = collect($request->validated());
        $programmingFeedback->update($data->except('questions', 'id')->all());
        $availableQuestionsId = $programmingFeedback->questions()->get(['id'])->pluck('id');
        $questions = collect($data->get('questions'));
        $questionsId = $questions->pluck('id');
        $questionsToDelete = $availableQuestionsId->diff($questionsId);
        $programmingFeedback->questions()->whereIn('id', $questionsToDelete->all())->delete();
        $questions = $questions->map(function ($question) use ($programmingFeedback) {
            return $programmingFeedback->questions()->updateOrCreate([
                'id' => $question['id']
            ], $question);
        });
        $programmingFeedback->setRelation('questions', $questions);
        return new ProgrammingFeedbackResource($programmingFeedback);
    }

    /**
     * @param Programming $programming
     * @param ProgrammingFeedback $programmingFeedback
     * @return array
     * @throws \Exception
     */
    public function destroy(
        Programming $programming,
        ProgrammingFeedback $programmingFeedback
    )
    {
        return [
            'success' => $programmingFeedback->delete()
        ];
    }

    /**
     * @param Programming $programming
     * @param ProgrammingFeedback $programmingFeedback
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function report(
        Programming $programming,
        ProgrammingFeedback $programmingFeedback
    )
    {
        return ReportResource::collection(
            $programmingFeedback->paginateReport(
                request('per_page', 10),
                request('order_by', 'id'),
                request('direction', null),
                array_get(request('filter', []), 'query')
            )
        );
    }
}
