<?php

namespace UniEventos\Exports;

use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\FromCollection;

class FeedbackExport implements FromCollection, WithHeadings, WithMapping, ShouldAutoSize
{
    /**
     * @return \Illuminate\Support\Collection
     */
    private $data;

    /**
     * FeedbackExport constructor.
     * @param $data
     */
    public function __construct(
        $data
    )
    {
        $this->data = $data;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return $this->data;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Nome',
            'Gênero',
            'E-mail',
            'Vínculo',
            'Matrícula',
            'Questão',
            'Tipo',
            'Resposta',
            'Respondido as'
        ];
    }

    /**
     * @param mixed $row
     *
     * @return array
     */
    public function map($row): array
    {
        return [
            'user_name' => $row->user_name,
            'user_gender' => $row->user_gender,
            'user_email' => $row->user_email,
            'user_type' => $row->user_type,
            'user_registration' => $row->user_registration,
            'question' => $row->question,
            'type' => $row->type,
            'answer' => $row->answer,
            'answer_at' => $row->answer_at
        ];
    }
}
