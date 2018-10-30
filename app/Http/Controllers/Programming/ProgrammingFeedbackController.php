<?php

namespace UniEventos\Http\Controllers\Programming;

use UniEventos\Http\Controllers\Controller;
use UniEventos\Http\Requests\CreateOrUpdateProgrammingFeedbackRequest;
use UniEventos\Http\Resources\ProgrammingFeedbackResource;
use UniEventos\Models\Programming;
use UniEventos\Models\ProgrammingFeedback;

class ProgrammingFeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return ProgrammingFeedbackResource::collection(ProgrammingFeedback::all());
    }

    /**
     * @param Programming $programming
     * @param CreateOrUpdateProgrammingFeedbackRequest $request
     * @return ProgrammingFeedbackResource
     */
    public function store(Programming $programming, CreateOrUpdateProgrammingFeedbackRequest $request)
    {
        $data = collect($request->validated());
        $feedback = ProgrammingFeedback::create(
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
        $programmingFeedback->questions()->forceDelete();
        $questions = $programmingFeedback->questions()->createMany($data->get('questions'));
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
}
