import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-feedback-dialog',
    templateUrl: 'feedback-dialog.component.html',
    styleUrls: ['./feedback-dialog.component.less']
})
export class FeedbackDialogComponent implements OnInit {

    questions = [
        {
            question: 'Contribuição das atividades do dia para a sua formação:',
            type: 0
        },
        {
            question: 'Organização das atividades do dia:',
            type: 0
        },
        {
            question: 'Qualidade dos banners apresentados:',
            type: 0
        },
        {
            question: 'Qualidade dos trabalhos apresentados no workshop:',
            type: 0
        },
        {
            question: 'Temas dos Minicursos:',
            type: 0
        },
        {
            question: 'Metodologia de avaliação dos trabalhos apresentados?',
            type: 1
        },
        {
            question: 'A infraestrutura oferecida foi suficiente?',
            type: 1
        },
        {
            question: 'Faça sua auto avaliação de participação nas atividades do evento. ',
            type: 0
        },
        {
            question: 'Faça sua auto avaliação de participação na disciplina de Projeto Interdisciplinar. ',
            type: 0
        },
        {
            question: 'Acha que faltou algo? Qual sua sugestão de melhoria? ',
            type: 2
        }
    ];

    /**
     * @param dialogRef 
     * @param data 
     */
    constructor(
        public dialogRef: MatDialogRef<FeedbackDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }

    /**
     */
    ngOnInit() { }

    /**
     */
    onCancelClick() {
        this.dialogRef.close();
    }
}