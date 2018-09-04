import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { AuthService } from '../../../core/services';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'app-core-page',
    templateUrl: './core-page.component.html',
    styleUrls: [
        './core-page.component.less'
    ]
})
export class CorePageComponent implements AfterViewInit, OnDestroy {

    private watcher: Subscription;
    private activeMedia: String = "";
    private sideMode: String = 'side';
    private isSideOpen: boolean = true;
    private collapsed: any = {};
    @ViewChild(MatSidenav) sidenav: MatSidenav;

    data: any = {};
    menus = [
        {
            title: 'Programação',
            action: '/sites/inicio',
            icon: 'home',
            authorization: []
        },
        {
            title: 'Gerenciar Programação',
            action: '/sites/administracao',
            icon: 'event',
            authorization: []
        },
        {
            title: 'Usuários',
            action: '/sites/usuarios',
            icon: 'person',
            authorization: [
                'administrator'
            ]
        },
        {
            title: 'Controle de Check-in',
            action: '/sites/check-in-controle',
            icon: 'camera_alt',
            authorization: [
                'administrator'
            ]
        },
        {
            title: 'Sorteio',
            action: '/sites/sorteio',
            icon: 'bingo-svg',
            authorization: [
                'administrator'
            ]
        }
    ];

    constructor(
        private media: ObservableMedia,
        private auth: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        this.iconRegistry.addSvgIcon(
            'bingo-svg',
            this.sanitizer.bypassSecurityTrustResourceUrl('/dist/assets/icons/bingo.svg'));
        this.watcher = this.media.subscribe((change: MediaChange) => this.onMediaChange(change.mqAlias));
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.data = this.menus.find(t => t.action === event.url) || {};
                this.isSideOpen = false;
            }
        });
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
