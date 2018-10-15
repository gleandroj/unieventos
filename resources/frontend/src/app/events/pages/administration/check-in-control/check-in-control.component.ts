import {Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import * as QrCodeModule from 'qrcode-reader';
import {MatDialog} from '@angular/material/dialog';
import {SelectCanDialogComponent} from '../../../dialogs';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
// import { CheckInConfirmDialogComponent } from "../check-in-confirm-dialog/check-in-confirm-dialog.component";
// import { CheckInService } from "../services/check-in.service";

@Component({
    selector: 'app-check-in-control',
    templateUrl: 'check-in-control.component.html',
    styleUrls: ['./check-in-control.component.less']
})
export class CheckInControlComponent implements OnInit, OnDestroy {

    @LocalStorage('selected-device-id')
    protected deviceId: string;

    @ViewChild('videoPlayer')
    videoElement: ElementRef;
    videoStream: MediaStream;
    isPlaying = false;
    error = false;
    error_description = '';

    reader: any;
    readTimeOut = 10;
    interval: any = null;
    loading = false;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
        this.reader = new QrCodeModule.default;
        this.reader.callback = (err, result) => this.callback(err, result);

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            setTimeout(() => this.selectCan());
        } else {
            this.webCanUnavailable();
        }
    }

    selectCan(force?: boolean) {
        this.isPlaying = false;
        this.error = false;
        if (!force && this.deviceId != null) {
            this.openWebCan(this.deviceId);
            return;
        }

        this.dialog.open(SelectCanDialogComponent)
            .afterClosed()
            .subscribe((data) => {
                if (data && data.success) {
                    this.openWebCan(this.deviceId = data.deviceId);
                } else {
                    this.webCanUnavailable();
                }
            });
    }

    openWebCan(deviceId: any): any {
        navigator.mediaDevices.getUserMedia({
            video: {
                deviceId: deviceId
            }
        }).then((stream) => {
            this.videoElement.nativeElement.src = window.URL.createObjectURL(this.videoStream = stream);
            this.videoElement.nativeElement.onplaying = () => {
                this.isPlaying = true;
            };
            setTimeout(() => {
                this.startScan();
            }, 1);
        }, (err: DOMException) => {
            this.webCanUnavailable(err.message);
        });
    }

    webCanUnavailable(err?): any {
        this.error = true;
        this.loading = false;
        this.error_description = err || 'Ops! A camera não está disponível.';
        this.stopScan();
        this.stopAll();
    }

    stopAll() {
        if (this.videoStream) {
            this.videoStream.getVideoTracks().forEach((vt: MediaStreamTrack) => {
                vt.stop();
            });
        }
    }

    startScan() {
        this.videoElement.nativeElement.play();
        setTimeout(() => {
            this.interval = setInterval(() => {
                if (this.isPlaying) {
                    const cv = this.getImageData(this.videoElement.nativeElement);
                    this.reader.decode(cv);
                }
            }, this.readTimeOut);
        }, 500);
    }

    stopScan() {
        this.isPlaying = false;
        this.videoElement.nativeElement.pause();
        clearInterval(this.interval);
    }

    callback(error, response) {
        if (error) {
            return;
        }
        this.stopScan();
        console.log(response);
        // this.checkInService.findByToken(response.result).subscribe((checkIn) => {

        //     this.dialog.open(CheckInConfirmDialogComponent, {
        //         data: {
        //             token: response.result,
        //             checkIn: checkIn
        //         }
        //     }).afterClosed().subscribe(() => this.startScan());

        // }, (err: HttpErrorResponse) => {
        //     if(err.status === 404)
        //         this.showToats('Qr Code inválido.');
        //     this.startScan();
        // });
    }

    getImageData(img) {
        const imgCV = document.createElement('canvas');

        const ratio = img.offsetWidth / img.offsetHeight;
        const w = imgCV.width = img.offsetHeight * ratio;
        const h = imgCV.height = img.offsetWidth / ratio;

        const imgCtx = imgCV.getContext('2d');
        imgCtx.drawImage(img, 0, 0, w, h);
        return imgCtx.getImageData(0, 0, w, h);
    }

    ngOnDestroy(): void {
        this.stopScan();
        this.stopAll();
    }

    showToats(msg) {
        // this.snackBar.open(msg ? msg : 'Ops, algo deu errado.', null, {
        //     duration: 3000
        // });
    }
}
