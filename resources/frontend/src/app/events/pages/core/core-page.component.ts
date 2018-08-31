import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { AuthService } from '../../../core/services';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-core-page',
    templateUrl: './core-page.component.html',
    styleUrls: [
        './core-page.component.less'
    ]
})
export class CorePageComponent implements AfterViewInit, OnDestroy  {

    private watcher: Subscription;
    private activeMedia: String = "";
    private sideMode: String = 'side';
    private isSideOpen: boolean = true;
    private collapsed: any = {};
    @ViewChild(MatSidenav) sidenav: MatSidenav;

    constructor(private media: ObservableMedia, private auth: AuthService, private router: Router) {
        this.watcher = this.media.subscribe((change: MediaChange) => this.onMediaChange(change.mqAlias));
    }

    ngAfterViewInit() {
    }

    onMediaChange(media: String) {
        this.activeMedia = media;
        if (this.activeMedia == 'xs' || this.activeMedia == 'sm') {
            this.sideMode = 'over';
            this.isSideOpen = false;
        }
        else {
            this.sideMode = 'over';
            this.isSideOpen = false;
        }
    }

    onSidenavChange(event) {
        if (this.isSideOpen != this.sidenav.opened) this.isSideOpen = this.sidenav.opened;
    }

    toggleSideNav() {
        this.isSideOpen = !this.isSideOpen;
        console.log(this.isSideOpen);
    }

    ngOnDestroy(): void {
        this.watcher.unsubscribe();
    }

    toggleMenu(menu) {
        for (let key in Object.keys(this.collapsed))
            if (key != menu) this.collapsed[key] = true;
        this.collapsed[menu] = this.collapsed[menu] == null ? false : !this.collapsed[menu];
    }

    logout() {
        this.auth.logout();
        this.router.navigate(['/auth/login']);
    }
}
