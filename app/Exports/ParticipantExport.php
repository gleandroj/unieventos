<?php

namespace UniEventos\Exports;

use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use UniEventos\Models\Programming;
use Maatwebsite\Excel\Concerns\FromCollection;

class ParticipantExport implements FromCollection, WithHeadings, WithMapping, ShouldAutoSize
{
    /**
     * @var Programming
     */
    private $programming;

    /**
     * ParticipantExport constructor.
     * @param Programming $programming
     */
    public function __construct(
        Programming $programming
    )
    {
        $this->programming = $programming;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return $this->programming->participants()->getQuery()->get();
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Matrícula',
            'Nome',
            'E-mail',
            'Vínculo',
            'Sexo',
            'Horário do Check-in',
            'Confirmado por'
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
            'registration' => $row->registration,
            'name' => $row->name,
            'email' => $row->email,
            'type' => $row->type,
            'gender' => $row->gender,
            'check_in_at' => $row->check_in_at,
            'confirmed_by' => $row->confirmed_by
        ];
    }
}
