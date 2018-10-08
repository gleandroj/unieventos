import {Component, ViewChild, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';
import {AuthService} from '../../../core/services';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {MatSidenav, MatDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {filter, map, mergeMap} from 'rxjs/operators';
import {LoterryDialogComponent} from '../../dialogs';
import {AuthEntity} from '../../../core/entities/auth-entity';

@Component({
    selector: 'app-core-page',
    templateUrl: './core-page.component.html',
    styleUrls: [
        './core-page.component.less'
    ]
})
export class CorePageComponent implements OnDestroy {
    watcher: Subscription;
    activeMedia: String = '';
    sideMode: String = 'side';
    isSideOpen = true;
    @ViewChild(MatSidenav) sidenav: MatSidenav;
    user: AuthEntity;
    data: any = {};
    menus = [
        {
            title: 'Programação',
            action: '/sites/inicio',
            icon: 'home',
            isLink: true,
            authorization: []
        },
        {
            title: 'Gerenciar Programação',
            action: '/sites/administracao',
            icon: 'event',
            isLink: true,
            authorization: []
        },
        {
            title: 'Usuários',
            action: '/sites/usuarios',
            icon: 'person',
            isLink: true,
            authorization: [
                'administrator'
            ]
        },
        {
            title: 'Controle de Check-in',
            action: '/sites/check-in-controle',
            icon: 'camera_alt',
            isLink: true,
            authorization: [
                'administrator'
            ]
        },
        {
            title: 'Sorteio',
            action: 'loterry',
            isLink: false,
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
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        this.iconRegistry.addSvgIcon(
            'bingo-svg',
            this.sanitizer.bypassSecurityTrustResourceUrl('/dist/assets/icons/bingo.svg'));
        this.watcher = this.media.subscribe((change: MediaChange) => this.onMediaChange(change.mqAlias));
        this.resolveData();
        this.auth.currentUserSubject.subscribe(user => this.user = user);
    }

    onMediaChange(media: String) {
        this.activeMedia = media;
        if (this.activeMedia === 'xs' || this.activeMedia === 'sm') {
            this.sideMode = 'over';
            this.isSideOpen = false;
        } else {
            this.sideMode = 'over';
            this.isSideOpen = false;
        }
    }

    onSidenavChange(event) {
        if (this.isSideOpen !== this.sidenav.opened) {
            this.isSideOpen = this.sidenav.opened;
        }
    }

    toggleSideNav() {
        this.isSideOpen = !this.isSideOpen;
    }

    ngOnDestroy(): void {
        this.watcher.unsubscribe();
    }

    loterry() {
        this.toggleSideNav();
        this.dialog.open(LoterryDialogComponent)
            .afterOpen()
            .subscribe();
    }

    logout() {
        const goToLoginPage = () => this.router.navigate(['/auth/login']);
        this.auth.logout().subscribe(goToLoginPage, goToLoginPage);
    }

    resolveData() {
        this.router
            .events
            .pipe(
                filter(e => e instanceof NavigationEnd),
                map(() => {
                    let route = this.activatedRoute.firstChild;
                    let child = route;
                    while (child) {
                        if (child.firstChild) {
                            child = child.firstChild;
                            route = child;
                        } else {
                            child = null;
                        }
                    }
                    return route;
                }),
                mergeMap(route => route.data)
            ).subscribe(data => {
            this.data = data;
            this.isSideOpen = false;
        });
    }

    call(action: string) {
        const fn = this[action];
        return fn.bind(this).call();
    }
}
