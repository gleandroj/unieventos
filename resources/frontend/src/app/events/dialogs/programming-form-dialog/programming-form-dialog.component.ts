import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {QuillEditorComponent} from 'ngx-quill';
import {ProgrammingEntity} from '../../../core/entities/programming-entity';
import {ProgrammingService} from '../../../core/services';
import {ToastService} from '../../../support/services';

const valueOrDefault = (v: any, d: any = '') => v ? v : d;

@Component({
    selector: 'app-programming-form-dialog',
    templateUrl: './programming-form-dialog.component.html',
    styleUrls: [
        './programming-form-dialog.component.less'
    ],
})
export class ProgrammingFormDialogComponent implements OnInit {

    _editMode = false;
    _readOnly = false;
    emptyArray: any[] = [];
    options: string[] = [];
    filteredOptions: Observable<string[]> = of([]);
    programmingForm: FormGroup;
    title = 'Formulário';
    modules = {
        imageResize: {},
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],

            [{header: 1}, {header: 2}], // custom button values
            [{list: 'ordered'}, {list: 'bullet'}],
            [{script: 'sub'}, {script: 'super'}], // superscript/subscript
            [{indent: '-1'}, {indent: '+1'}], // outdent/indent
            [{direction: 'rtl'}], // text direction
            [{size: ['small', false, 'large', 'huge']}], // custom dropdown
            [{header: [1, 2, 3, 4, 5, 6, false]}],

            [
                {color: this.emptyArray.slice()},
                {background: this.emptyArray.slice()}
            ], // dropdown with defaults from theme
            [{font: this.emptyArray.slice()}],
            [{align: this.emptyArray.slice()}],

            ['clean'], // remove formatting button
            ['link', 'image', 'video'] // link and image, video
        ]
    };

    @ViewChild(QuillEditorComponent) quillEditor: QuillEditorComponent;
    private programming: ProgrammingEntity;

    constructor(
        public dialogRef: MatDialogRef<ProgrammingFormDialogComponent>,
        private programmingService: ProgrammingService,
        private toastr: ToastService,
        @Inject(MAT_DIALOG_DATA) public data: {
            readOnly?: boolean,
            title?: string,
            programming?: ProgrammingEntity
        },
        fb: FormBuilder
    ) {
        this.programming = data.programming;
        this.programmingForm = fb.group({
            edition: '',
            date: '',
            description: null
        });
    }

    get readOnly() {
        return this._readOnly;
    }

    set readOnly(val) {
        this._readOnly = val;
        if (val) {
            this.programmingForm.disable();
        } else {
            this.programmingForm.enable();
        }
    }

    get editMode() {
        return this._editMode;
    }

    set editMode(val) {
        this.readOnly = !val;
        this._editMode = val;
    }

    ngOnInit(): void {
        this.readOnly = this.data.readOnly;
        this.title = this.data.title ? this.data.title : this.title;
        this.programmingService.editions().subscribe((editions) => {
            this.options = editions;
            this.filteredOptions = this.programmingForm.controls['edition']
                .valueChanges
                .pipe(
                    startWith(''),
                    map(value => this._filter(value))
                );
        });
        this.programmingForm.setValue({
            edition: valueOrDefault(this.programming.edition),
            date: valueOrDefault(this.programming.date),
            description: valueOrDefault(this.programming.description)
        });
    }

    _filter(value: string): any {
        const filterValue = value.toLowerCase();
        return this.options
            .filter(
                option => option.toLowerCase()
                    .includes(filterValue)
            );
    }

    addEdition($event: MouseEvent) {
        $event.stopPropagation();
        console.log('Add: ', this.programmingForm.controls['edition'].value);
    }

    save() {
        const programming: ProgrammingEntity = {};
        Object.assign(programming, this.programming);
        Object.assign(programming, this.programmingForm.value);
        this.programmingService.save(
            programming
        ).subscribe((p) => {
            if (programming.id != null) {
                this.toastr.open('Programação atualizada com sucesso!');
            } else {
                this.toastr.open('Programação cadastrada com sucesso!');
            }
            this.dialogRef.close(true);
        });
    }

    cancel() {
        if (!this.editMode === false) {
            this.editMode = false;
        } else {
            this.dialogRef.close(false);
        }
    }
}
