import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-loterry-dialog',
    templateUrl: 'loterry-dialog.component.html',
    styleUrls: ['./loterry-dialog.component.less']
})
export class LoterryDialogComponent implements OnInit {

    loading: boolean;

    constructor(@Inject(MAT_DIALOG_DATA) public data) {
    }

    ngOnInit() { }

    decline() {
    }

    loterry() {
        this.loading = true;
    }
}