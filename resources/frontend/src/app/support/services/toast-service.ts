import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ToastService {
    constructor(
        public snackBar: MatSnackBar
    ) { }

    open(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
