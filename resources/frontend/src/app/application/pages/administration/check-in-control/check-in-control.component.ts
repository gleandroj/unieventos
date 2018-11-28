import { Component, OnInit, ViewChild, ElementRef, OnDestroy, NgZone } from '@angular/core';
import * as QrCodeModule from 'qrcode-reader';
import { MatDialog } from '@angular/material/dialog';
import { CheckInConfirmDialogComponent, SelectCanDialogComponent } from '../../../dialogs';
import { LocalStorage } from 'ngx-webstorage';
import { AuthorizeCheckInService } from '../../../../core/services';
import { switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../../../../support/services';

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

    constructor(
        private toastr: ToastService,
        private dialog: MatDialog,
        private authorizeCheckInService: AuthorizeCheckInService,
        private zone: NgZone
    ) {
    }

    public hasGetUserMedia() {
        const nav = (<any>navigator);
        // Note: Opera builds are unprefixed.
        return !!(nav.getUserMedia || nav.webkitGetUserMedia ||
            nav.mozGetUserMedia || nav.msGetUserMedia);
    }

    public getUserMedia(
        c: MediaStreamConstraints,
        s: NavigatorUserMediaSuccessCallback,
        e: NavigatorUserMediaErrorCallback
    ) {
        const nav = (<any>navigator);
        if (nav.getUserMedia) {
            return nav.getUserMedia(c, s, e);
        } else if (nav.webkitGetUserMedia) {
            return nav.webkitGetUserMedia(c, s, e);
        } else if (nav.mozGetUserMedia) {
            return nav.mozGetUserMedia(c, s, e);
        } else if (nav.msGetUserMedia) {
            return nav.msGetUserMedia(c, s, e);
        } else {
            throw 'WEB_CAM_UNAVAILABLE';
        }
    }

    ngOnInit() {
        this.reader = new QrCodeModule.default;
        this.reader.callback = (err, result) => this.callback(err, result);

        if (this.hasGetUserMedia()) {
            try {
                this.getUserMedia({ video: true }, (stream: MediaStream) => {
                    stream.getTracks()[0].stop();
                    this.zone.runTask(() => this.selectCan());
                }, () => {
                    this.webCanUnavailable();
                });
            } catch (e) {
                this.webCanUnavailable();
            }
        } else {
            this.webCanUnavailable();
        }
    }

    selectCan(force?: boolean) {
        if (this.isPlaying) {
            this.stopAll();
        }
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
        this.getUserMedia({
            video: {
                deviceId: deviceId
            }
        }, (stream) => {
            this.videoElement.nativeElement.src = window.URL.createObjectURL(this.videoStream = stream);
            this.videoElement.nativeElement.onplaying = () => {
                this.zone.runTask(() => {
                    this.isPlaying = true;
                    this.startScan();
                });
            };
        }, (err: any) => {
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
        const token = response.result;
        this.authorizeCheckInService.data(
            token
        ).pipe(
            switchMap((result) => {
                return this.dialog.open(
                    CheckInConfirmDialogComponent,
                    {
                        data: result
                    }
                ).afterClosed();
            })
        ).subscribe((resp) => {
            if (resp.success) {
                this.toastr.open(
                    resp.message
                );
            } else {
                const respError = resp.error;
                this.toastr.open(
                    respError.message
                );
            }
            this.startScan();
        }, (err: HttpErrorResponse) => {
            if (err.status === 404) {
                this.toastr.open(
                    'QRCode inválido.'
                );
            } else if (err.status === 400) {
                this.toastr.open(
                    err.error.message
                );
            }
            this.startScan();
        });
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
}
