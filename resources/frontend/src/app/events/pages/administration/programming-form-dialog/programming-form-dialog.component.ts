import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
    selector: 'app-programming-form-dialog',
    templateUrl: './programming-form-dialog.component.html',
    styleUrls: [
        './programming-form-dialog.component.less'
    ],
})
export class ProgrammingFormDialogComponent implements OnInit {

    options: string[] = ['XXVI', 'XIVI', 'XVII'];
    filteredOptions: Observable<string[]>;
    programmingForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ProgrammingFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        fb: FormBuilder
    ) {
        this.programmingForm = fb.group({
            edition: '',
            date: ''
        });
    }

    ngOnInit(): void {
        this.filteredOptions = this.programmingForm.controls['edition']
            .valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
    }

    _filter(value: string): any {
        const filterValue = value.toLowerCase();
        return this.options
            .filter(
                option => option.toLowerCase()
                    .includes(filterValue)
            );
    }

    addEdition($event: MouseEvent){
        $event.stopPropagation();
        console.log('Add: ', this.programmingForm.controls['edition'].value);
    }
}
