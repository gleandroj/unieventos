import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastService } from '../../../support/services';

@Component({
    selector: 'app-select-can-dialog',
    templateUrl: 'select-can-dialog.component.html'
})
export class SelectCanDialogComponent implements OnInit {

    unavailable = false;
    devices: MediaDeviceInfo[] = [];
    selectedDeviceId: string = null;

    constructor(
        public toastr: ToastService,
        public dialogRef: MatDialogRef<SelectCanDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit() {
        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
            navigator.mediaDevices.enumerateDevices().then((devices) => {
                this.devices = devices.filter(d => d.kind === 'videoinput');
                if(this.devices.length === 0){
                    this.toastr.open('Ops! A camera não está disponível.');
                    this.dialogRef.close();
                }
            });
        } else {
            this.unavailable = true;
        }
    }

    ok() {
        this.dialogRef.close({
            success: true,
            deviceId: this.selectedDeviceId
        });
    }

    cancel() {
        this.dialogRef.close({
            success: false,
            deviceId: this.selectedDeviceId
        });
    }
}
