import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {QuillEditorComponent} from 'ngx-quill';

@Component({
    selector: 'app-programming-form-dialog',
    templateUrl: './programming-form-dialog.component.html',
    styleUrls: [
        './programming-form-dialog.component.less'
    ],
})
export class ProgrammingFormDialogComponent implements OnInit, AfterViewInit {

    _readOnly = false;
    emptyArray: any[] = [];
    options: string[] = ['XXVI', 'XIVI', 'XVII'];
    filteredOptions: Observable<string[]>;
    programmingForm: FormGroup;
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

    constructor(
        public dialogRef: MatDialogRef<ProgrammingFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        fb: FormBuilder
    ) {
        this.programmingForm = fb.group({
            edition: '',
            date: '',
            description: null
        });
    }

    ngOnInit(): void {
        this.readOnly = true;
        this.filteredOptions = this.programmingForm.controls['edition']
            .valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
    }

    ngAfterViewInit() {
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
        console.log(this.programmingForm.value);
    }
}
