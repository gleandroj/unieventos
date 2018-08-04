(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'test', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _support_support_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support/support.module */ "./src/app/support/support.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _support_support_module__WEBPACK_IMPORTED_MODULE_4__["SupportModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _support_support_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/support.module */ "./src/app/support/support.module.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ "./src/app/core/resolvers/index.ts");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http/interceptor */ "./src/app/core/http/interceptor.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth-guard */ "./src/app/core/guards/auth-guard.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data */ "./src/app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var Services = [
    { provide: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"], useClass: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { provide: _data__WEBPACK_IMPORTED_MODULE_7__["UserDataSource"], useClass: _data__WEBPACK_IMPORTED_MODULE_7__["UserDataSource"] },
    { provide: _resolvers__WEBPACK_IMPORTED_MODULE_3__["PasswordCheckResolve"], useClass: _resolvers__WEBPACK_IMPORTED_MODULE_3__["PasswordCheckResolve"] },
    { provide: _services__WEBPACK_IMPORTED_MODULE_6__["AuthService"], useClass: _services__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { provide: _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], useClass: _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"] },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _http_interceptor__WEBPACK_IMPORTED_MODULE_4__["Interceptor"],
        multi: true
    }
];
var components = [];
/**
 * Contem Serviços e Entidades genéricas Reutilizáveis
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: Services
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _support_support_module__WEBPACK_IMPORTED_MODULE_2__["SupportModule"],
            ],
            exports: [
                _support_support_module__WEBPACK_IMPORTED_MODULE_2__["SupportModule"],
                components
            ],
            declarations: [
                components
            ],
            entryComponents: []
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/data/abstract-data-source.ts":
/*!***************************************************!*\
  !*** ./src/app/core/data/abstract-data-source.ts ***!
  \***************************************************/
/*! exports provided: AbstractDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDataSource", function() { return AbstractDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var AbstractDataSource = /** @class */ (function () {
    /**
     * @param {AbstractService<T>} service
     */
    function AbstractDataSource(service) {
        this.service = service;
        /**
         * @type {BehaviorSubject<boolean>}
         */
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    /**
     * @param {DataTableConfig} c
     * @returns {Observable<PaginatorData<ProductEntity>>}
     */
    AbstractDataSource.prototype.getData = function (c) {
        this.isLoading.next(true);
        return this.service.paginate(c.currentPage, c.itemsPerPage, c.sortable, c.filter);
    };
    /**
     * @param {Subject<DataTableConfig>} config
     * @returns {Observable<PaginatorData<T>>}
     */
    AbstractDataSource.prototype.connect = function (config) {
        var _this = this;
        return config.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (c) { return _this.getData(c); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return _this.isLoading.next(false); }, function () { return _this.isLoading.next(false); }));
    };
    return AbstractDataSource;
}());



/***/ }),

/***/ "./src/app/core/data/index.ts":
/*!************************************!*\
  !*** ./src/app/core/data/index.ts ***!
  \************************************/
/*! exports provided: AbstractDataSource, UserDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_data_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-data-source */ "./src/app/core/data/abstract-data-source.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractDataSource", function() { return _abstract_data_source__WEBPACK_IMPORTED_MODULE_0__["AbstractDataSource"]; });

/* harmony import */ var _user_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-data-source */ "./src/app/core/data/user-data-source.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDataSource", function() { return _user_data_source__WEBPACK_IMPORTED_MODULE_1__["UserDataSource"]; });





/***/ }),

/***/ "./src/app/core/data/user-data-source.ts":
/*!***********************************************!*\
  !*** ./src/app/core/data/user-data-source.ts ***!
  \***********************************************/
/*! exports provided: UserDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataSource", function() { return UserDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-data-source */ "./src/app/core/data/abstract-data-source.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/core/services/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDataSource = /** @class */ (function (_super) {
    __extends(UserDataSource, _super);
    function UserDataSource(userService) {
        return _super.call(this, userService) || this;
    }
    UserDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserDataSource);
    return UserDataSource;
}(_abstract_data_source__WEBPACK_IMPORTED_MODULE_1__["AbstractDataSource"]));



/***/ }),

/***/ "./src/app/core/entities/auth-entity.ts":
/*!**********************************************!*\
  !*** ./src/app/core/entities/auth-entity.ts ***!
  \**********************************************/
/*! exports provided: AuthEntity, AuthTokenEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEntity", function() { return AuthEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenEntity", function() { return AuthTokenEntity; });
var AuthEntity = /** @class */ (function () {
    function AuthEntity() {
    }
    return AuthEntity;
}());

var AuthTokenEntity = /** @class */ (function () {
    function AuthTokenEntity() {
    }
    return AuthTokenEntity;
}());



/***/ }),

/***/ "./src/app/core/guards/auth-guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth-guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/core/services/index.ts");
/* harmony import */ var _support_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/services */ "./src/app/support/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth, toastr) {
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
    }
    AuthGuard.prototype.check = function (route, state) {
        var authUser = this.auth.currentUser;
        var redirectUrl = "" + state.url;
        var authConfig = this.auth.getAuthConfigFor(state.url);
        var authPath = authConfig.loginRoute;
        var isLoggedIn = this.auth.isAuthenticated(authConfig.provider);
        var authorized = route.data['authorized'];
        if (isLoggedIn) {
            return true;
        }
        else if (isLoggedIn) {
            this.toastr.error('Usuário sem permissão para acessar o recurso.');
            return false;
        }
        else {
            this.router.navigate(authPath, { queryParams: { url: redirectUrl } });
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.check(childRoute, state);
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.check(route, state);
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _support_services__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/http/interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/core/http/interceptor.ts ***!
  \******************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _support_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../support/services */ "./src/app/support/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Interceptor = /** @class */ (function () {
    function Interceptor(injector) {
        this.injector = injector;
    }
    Object.defineProperty(Interceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interceptor.prototype, "router", {
        get: function () {
            return this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interceptor.prototype, "toastr", {
        get: function () {
            return this.injector.get(_support_services__WEBPACK_IMPORTED_MODULE_6__["ToastService"]);
        },
        enumerable: true,
        configurable: true
    });
    Interceptor.prototype.authenticateRequest = function (request) {
        var authService = this.authService;
        if (request.url.indexOf(authService.authConfig.loginEndPoint) > -1
            || !authService.isAuthenticated()) {
            return request;
        }
        var authToken = authService.authToken();
        return request.clone({
            setHeaders: {
                Authorization: authToken.token_type + " " + authToken.access_token
            }
        });
    };
    Interceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(this.authenticateRequest(request))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (resp) { return _this.catchError(resp, request, next); }));
    };
    Interceptor.prototype.catchError = function (resp, request, next) {
        var _this = this;
        var authService = this.authService;
        var router = this.router;
        var toastr = this.toastr;
        var loginRoute = authService.authConfig.loginRoute;
        var isLogoutEndPoint = (resp.url.indexOf(authService.authConfig.logoutEndPoint) > -1);
        var isLoginEndPoint = (resp.url.indexOf(authService.authConfig.loginEndPoint) > -1);
        if ((resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) && resp.status === 401 &&
            authService.isAuthenticated() && !isLoginEndPoint && !isLogoutEndPoint) {
            return authService.refresh().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (t) { return _this.intercept(request, next); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                if (err.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(router.navigate(loginRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                        toastr.error('Sessão expirada.');
                        return _this.authService.logout(true);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(resp); }));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(resp);
            }));
        }
        else if ((resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) && resp.status === 403) {
            toastr.error('Usuário sem permissão para acessar o recurso.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(resp);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(resp);
    };
    Interceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "./src/app/core/resolvers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/resolvers/index.ts ***!
  \*****************************************/
/*! exports provided: PasswordCheckResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _password_check_resolve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-check-resolve */ "./src/app/core/resolvers/password-check-resolve.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordCheckResolve", function() { return _password_check_resolve__WEBPACK_IMPORTED_MODULE_0__["PasswordCheckResolve"]; });




/***/ }),

/***/ "./src/app/core/resolvers/password-check-resolve.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/resolvers/password-check-resolve.ts ***!
  \**********************************************************/
/*! exports provided: PasswordCheckResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordCheckResolve", function() { return PasswordCheckResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordCheckResolve = /** @class */ (function () {
    function PasswordCheckResolve(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    PasswordCheckResolve.prototype.resolve = function (route, state) {
        var _this = this;
        if (!route.queryParams.token || !route.queryParams.email) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                _this.router.navigate(_this.authService.authConfig.loginRoute);
            }));
        }
        else {
            return this.authService
                .checkResetToken(route.queryParams.token, route.queryParams.email)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                    _this.router.navigate(_this.authService.authConfig.loginRoute);
                }));
            }));
        }
    };
    PasswordCheckResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PasswordCheckResolve);
    return PasswordCheckResolve;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthConfigDefault, authConfigToken, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthConfigDefault", function() { return AuthConfigDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfigToken", function() { return authConfigToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _entities_auth_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/auth-entity */ "./src/app/core/entities/auth-entity.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _support_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../support/services */ "./src/app/support/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthConfigDefault = /** @class */ (function () {
    function AuthConfigDefault(urlMatch, loginRoute, provider) {
        this.urlMatch = urlMatch;
        this.loginRoute = loginRoute;
        this.provider = provider;
        this.loginEndPoint = '/api/auth/token';
        this.logoutEndPoint = '/api/auth/logout';
        this.currentUserEndPoint = '/api/auth/current';
        this.resetPasswordEndPoint = '/api/auth/password/reset';
        this.recoveryPasswordEndPoint = '/api/auth/password/email';
        this.checkPasswordTokenEndPoint = '/api/auth/password/token';
        this.clientId = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authClientID;
        this.clientSecret = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authClientSecret;
        this.grantType = 'password';
    }
    return AuthConfigDefault;
}());

var authConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('authConfigToken');
var AuthService = /** @class */ (function () {
    function AuthService(injector, localStorage, dialogService, http) {
        this.injector = injector;
        this.localStorage = localStorage;
        this.dialogService = dialogService;
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.initialize();
    }
    AuthService.prototype.tokenKey = function (provider) {
        provider = provider ? provider : this.authConfig.provider;
        return 'auth-token' + (provider ? '-' + provider : '');
    };
    AuthService.prototype.authToken = function (provider) {
        return this.localStorage.retrieve(this.tokenKey(provider));
    };
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            return this._currentUser;
        },
        set: function (token) {
            this._currentUser = token;
            this.currentUserSubject.next(token);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.setAuthToken = function (token) {
        this.localStorage.store(this.tokenKey(), token);
    };
    AuthService.prototype.getAuthConfigFor = function (url) {
        var configs = this.injector.get(authConfigToken);
        var conf = configs.filter(function (c) { return url.match(c.urlMatch); })[0];
        return conf ? conf : configs[0];
    };
    Object.defineProperty(AuthService.prototype, "authConfig", {
        get: function () {
            return this.getAuthConfigFor(window.location.hash.substr(1));
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.initialize = function () {
        this.currentUserSubject.next(this._currentUser);
    };
    /**
     * @param {AuthTokenEntity} token
     * @returns {Observable<AuthEntity>}
     */
    AuthService.prototype.getCurrentUser = function (token) {
        var _this = this;
        return this.http.get(this.authConfig.currentUserEndPoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (user) { return _this.currentUser = user; }));
    };
    /**
     * @param email
     * @param password
     */
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.authConfig.loginEndPoint, {
            username: email,
            password: password,
            'grant_type': this.authConfig.grantType,
            'client_id': this.authConfig.clientId,
            'client_secret': this.authConfig.clientSecret,
            'provider': this.authConfig.provider
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (token) { return _this.setAuthToken(token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) { return _this.getCurrentUser(value); }));
    };
    /**
     * @returns {Observable<AuthTokenEntity>}
     */
    AuthService.prototype.refresh = function () {
        var _this = this;
        var authToken = this.authToken();
        return this.http.post(this.authConfig.loginEndPoint, {
            'refresh_token': authToken ? authToken.refresh_token : '',
            'grant_type': 'refresh_token',
            'client_id': this.authConfig.clientId,
            'client_secret': this.authConfig.clientSecret,
            'provider': this.authConfig.provider
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (token) { return _this.setAuthToken(token); }));
    };
    /**
     * @returns {boolean}
     */
    AuthService.prototype.isAuthenticated = function (provider) {
        return this.authToken(provider) != null;
    };
    /**
     * @returns {Observable<any>}
     */
    AuthService.prototype.logout = function (ignore) {
        this.setAuthToken(null);
        this.currentUser = null;
        this.dialogService.hideAll();
        return ignore ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ success: true }) : this.http.get(this.authConfig.logoutEndPoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ success: true }); }));
    };
    /**
     * @returns {Observable<any>}
     */
    AuthService.prototype.notifications = function (all) {
        if (all === void 0) { all = false; }
        return this.http.get(this.authConfig.currentUserEndPoint + "/notifications?all=" + (all ? 1 : 0))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (r) { return r; }));
    };
    /**
     * @returns {Observable<any>}
     */
    AuthService.prototype.deleteNotification = function (id) {
        return this.http.delete(this.authConfig.currentUserEndPoint + "/notifications/" + id);
    };
    /**
     * @param {string} email
     * @returns {Observable<any>}
     */
    AuthService.prototype.passwordRecovery = function (email) {
        return this.http.post(this.authConfig.recoveryPasswordEndPoint, {
            email: email
        });
    };
    /**
     * @param {string} token
     * @param {string} email
     * @returns {Observable<any>}
     */
    AuthService.prototype.checkResetToken = function (token, email) {
        return this.http.post(this.authConfig.checkPasswordTokenEndPoint, {
            token: token,
            email: email
        });
    };
    /**
     * @param {string} email
     * @param {string} password
     * @param {string} passwordConfirmation
     * @param {string} token
     * @returns {Observable<any>}
     */
    AuthService.prototype.passwordReset = function (email, password, passwordConfirmation, token) {
        var _this = this;
        return this.http.post(this.authConfig.resetPasswordEndPoint, {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            token: token
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) {
            return _this.login(email, password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value); }));
        }));
    };
    __decorate([
        Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"])('current-user'),
        __metadata("design:type", _entities_auth_entity__WEBPACK_IMPORTED_MODULE_4__["AuthEntity"])
    ], AuthService.prototype, "_currentUser", void 0);
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
            _support_services__WEBPACK_IMPORTED_MODULE_7__["DialogService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: AuthConfigDefault, authConfigToken, AuthService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthConfigDefault", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthConfigDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authConfigToken", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["authConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });





/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _support_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../support/services */ "./src/app/support/services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this, http) || this;
        _this.resourceURL = 'users';
        return _this;
    }
    UserService.prototype.checkEmailNotTaken = function (email, userID) {
        return this.http
            .post(this.baseURL + "/" + this.resourceURL + "/check-email", {
            email: email,
            user_id: userID
        });
    };
    UserService.prototype.restoreByEmail = function (email) {
        return this.http
            .post(this.baseURL + "/" + this.resourceURL + "/restore", {
            email: email
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp.data; }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}(_support_services__WEBPACK_IMPORTED_MODULE_1__["AbstractService"]));



/***/ }),

/***/ "./src/app/support/components/abstract-dialog/abstract-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/support/components/abstract-dialog/abstract-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AbstractDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDialogComponent", function() { return AbstractDialogComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var AbstractDialogComponent = /** @class */ (function () {
    function AbstractDialogComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.observable = this.observer;
    }
    AbstractDialogComponent.prototype.confirm = function () {
        this.observer.next('confirm');
        this.observer.complete();
        this.bsModalRef.hide();
    };
    AbstractDialogComponent.prototype.decline = function () {
        this.observer.error('decline');
        this.bsModalRef.hide();
    };
    AbstractDialogComponent.prototype.ngOnDestroy = function () {
        this.observer.error('decline');
    };
    return AbstractDialogComponent;
}());



/***/ }),

/***/ "./src/app/support/components/alert-dialog/alert-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/support/components/alert-dialog/alert-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body text-center\">\n    <h4 class=\"font-w300 push-20\">{{ title }}</h4>\n    <div [innerHTML]=\"body | safeHtml\"></div>\n    <button type=\"button\" class=\"btn btn-default push-10-r\" (click)=\"confirm('ok')\">Ok</button>\n</div>\n"

/***/ }),

/***/ "./src/app/support/components/alert-dialog/alert-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/support/components/alert-dialog/alert-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return AlertDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _abstract_dialog_abstract_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-dialog/abstract-dialog.component */ "./src/app/support/components/abstract-dialog/abstract-dialog.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertDialogComponent = /** @class */ (function (_super) {
    __extends(AlertDialogComponent, _super);
    function AlertDialogComponent(bsModalRef) {
        return _super.call(this, bsModalRef) || this;
    }
    AlertDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-dialog',
            template: __webpack_require__(/*! ./alert-dialog.component.html */ "./src/app/support/components/alert-dialog/alert-dialog.component.html"),
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], AlertDialogComponent);
    return AlertDialogComponent;
}(_abstract_dialog_abstract_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AbstractDialogComponent"]));



/***/ }),

/***/ "./src/app/support/components/confirm-dialog/confirm-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/support/components/confirm-dialog/confirm-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body text-center\">\n    <h4 class=\"font-w300 push-20\" [innerHTML]=\"message | safeHtml\"></h4>\n    <button type=\"button\" class=\"btn btn-success push-10-r\" (click)=\"confirm()\">Sim</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">Não, cancelar</button>\n</div>\n"

/***/ }),

/***/ "./src/app/support/components/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/support/components/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _abstract_dialog_abstract_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-dialog/abstract-dialog.component */ "./src/app/support/components/abstract-dialog/abstract-dialog.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmDialogComponent = /** @class */ (function (_super) {
    __extends(ConfirmDialogComponent, _super);
    function ConfirmDialogComponent(bsModalRef) {
        var _this = _super.call(this, bsModalRef) || this;
        _this.bsModalRef = bsModalRef;
        return _this;
    }
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/support/components/confirm-dialog/confirm-dialog.component.html"),
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}(_abstract_dialog_abstract_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AbstractDialogComponent"]));



/***/ }),

/***/ "./src/app/support/components/datatable/datatable.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/support/components/datatable/datatable.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"!hideOptions\">\n    <div *ngIf=\"searchable\" class=\"col-xs-12 col-sm-12 col-md-3\">\n        <label class=\"pull-left input-group\">\n            Pesquisar:\n            <input\n                    #input\n                    (input)=\"inputSubject.next($event.target.value)\"\n                    [(ngModel)]=\"inputValue\"\n                    type=\"search\"\n                    class=\"form-control\">\n            <span class=\"input-group-btn\" style=\"vertical-align: bottom;\">\n                <a (click)=\"inputSubject.next(input.value = null)\" class=\"btn btn-default\" style=\"padding: 6px 12px;\">\n                    <span class=\"fa fa-close\"></span>\n                </a>\n            </span>\n        </label>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 remove-padding-l\" [ngClass]=\"{'col-md-10': !searchable, 'col-md-7': searchable}\">\n        <ng-container [ngTemplateOutlet]=\"filterHeader\"></ng-container>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-2 text-right\">\n        <label> Qtd. Items\n            <select class=\"form-control\" (change)=\"itemsPerPageChanged($event.target.value)\">\n                <option *ngFor=\"let i of itemsPerPageData\" [value]=\"i\">{{ i }}\n                </option>\n            </select>\n        </label>\n    </div>\n</div>\n\n<div class=\"table-responsive row\" [ngClass]=\"{'block-opt-refresh block-opt-refresh-icon4': loading}\">\n    <table class=\"table table-condensed table-striped\"\n           [ngStyle]=\"{'min-width.px': minTableWidth, 'min-height.px': minHeight}\">\n        <thead>\n        <tr>\n            <ng-container [ngTemplateOutlet]=\"header\"></ng-container>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let row of paginatorData.data  | slice:0:paginatorData.meta.per_page\">\n            <ng-container *ngTemplateOutlet=\"template; context: { $implicit: row}\"></ng-container>\n        </tr>\n        <tr *ngIf=\"paginatorData.data.length === 0 && !this.loading\" style=\"background: transparent !important;\">\n            <td class=\"row text-center\" colspan=\"100\" style=\"vertical-align: middle;\">\n                <h5 *ngIf=\"!!currentConfig.filter\" class=\"font-w300 push\">Nenhum registro correspondente\n                    encontrado.</h5>\n                <h5 *ngIf=\"!currentConfig.filter\" class=\"font-w300 push\">Nenhum registro encontrado.</h5>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"row\" style=\"z-index: 10;\">\n    <div class=\"col-sm-4 hidden-xs\">\n        <div style=\"padding-top: 10px; white-space: nowrap;\">\n            Mostrando\n            <strong>\n                {{ paginatorData.meta.total === 0 ? 0 : ((paginatorData.meta.current_page - 1) *\n                paginatorData.meta.per_page) + 1 }}\n            </strong>\n            -\n            <strong>{{ (paginatorData.meta.current_page * paginatorData.meta.per_page) > paginatorData.meta.total ?\n                paginatorData.meta.total\n                : (paginatorData.meta.current_page * paginatorData.meta.per_page) }}\n            </strong>\n            de\n            <strong>\n                {{ paginatorData.meta.total }}\n            </strong>\n        </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n        <div style=\"margin: 0;white-space: nowrap;text-align: right;\">\n            <pagination previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\n                        [boundaryLinks]=\"true\" [disabled]=\"loading\"\n                        [totalItems]=\"paginatorData.meta.total\"\n                        [itemsPerPage]=\"paginatorData.meta.per_page\"\n                        (pageChanged)=\"pageChanged($event)\"\n                        [maxSize]=\"maxSize\"></pagination>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/support/components/datatable/datatable.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/support/components/datatable/datatable.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/support/components/datatable/datatable.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/support/components/datatable/datatable.component.ts ***!
  \*********************************************************************/
/*! exports provided: SortHeaderDirective, DatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortHeaderDirective", function() { return SortHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/support/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SortHeaderDirective = /** @class */ (function () {
    function SortHeaderDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.listener = null;
    }
    Object.defineProperty(SortHeaderDirective.prototype, "direction", {
        set: function (direction) {
            this.renderer.removeClass(this.el.nativeElement, 'asc');
            this.renderer.removeClass(this.el.nativeElement, 'desc');
            if (direction) {
                this.renderer.addClass(this.el.nativeElement, direction);
            }
        },
        enumerable: true,
        configurable: true
    });
    SortHeaderDirective.prototype.ngOnInit = function () {
        this.renderer.addClass(this.el.nativeElement, 'sorting');
    };
    SortHeaderDirective.prototype.setOnClickListener = function (listener) {
        this.listener = listener;
    };
    SortHeaderDirective.prototype.onclick = function () {
        if (this.listener != null) {
            this.listener(this);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appSortable'),
        __metadata("design:type", String)
    ], SortHeaderDirective.prototype, "sortBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SortHeaderDirective.prototype, "onclick", null);
    SortHeaderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SortHeaderDirective);
    return SortHeaderDirective;
}());

var DatatableComponent = /** @class */ (function () {
    function DatatableComponent(router, toastr) {
        this.router = router;
        this.toastr = toastr;
        this.searchable = true;
        this.hideOptions = false;
        this.minTableWidth = null;
        this.minHeight = null;
        this.maxSize = 5;
        this.paginatorData = {
            meta: {
                current_page: 1,
                total: 0,
                per_page: 5
            },
            data: [],
        };
        this.inputValue = '';
        this.inputSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.config = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            sortable: { direction: null, key: null, el: null },
            currentPage: 1,
            itemsPerPage: 5,
            filter: {}
        });
        this.itemsPerPageData = [
            5,
            10,
            15,
            20
        ];
    }
    Object.defineProperty(DatatableComponent.prototype, "currentConfig", {
        get: function () {
            return this.config.getValue();
        },
        enumerable: true,
        configurable: true
    });
    DatatableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.inputConnector = this.inputSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (value) { return _this.searchableChanged(value); });
        this.headersConnector = this.headers.changes.subscribe(function (headers) {
            return headers.forEach(function (h) { return h.setOnClickListener(function (s) { return _this.sortHeaderClick(s); }); });
        });
    };
    DatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.dataSource) {
            throw new Error('Datasource Not Initialized');
        }
        this.loadingSubscribe = this.dataSource.isLoading.subscribe(function (loading) {
            return _this.loading = loading;
        });
        this.routerSubscribe = this.router.events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.loading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                _this.loading = false;
            }
        });
        this.initializeConnector();
        this.config.subscribe(function () {
            if (_this.connector.closed) {
                _this.initializeConnector();
            }
        });
    };
    DatatableComponent.prototype.initializeConnector = function () {
        var _this = this;
        if (this.connector) {
            this.connector.unsubscribe();
        }
        this.connector = this.dataSource.connect(this.config)
            .subscribe(function (pd) { return _this.paginatorData = pd; }, function (error) { return _this.catchError(error); });
    };
    DatatableComponent.prototype.catchError = function (err) {
        if (err.status !== 401 && err.status !== 403) {
            this.toastr.serverResponseFail();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            meta: {
                current_page: 1,
                total: 0,
                per_page: 5
            },
            data: [],
        });
    };
    DatatableComponent.prototype.ngOnDestroy = function () {
        this.headersConnector.unsubscribe();
        this.inputConnector.unsubscribe();
        this.loadingSubscribe.unsubscribe();
        this.routerSubscribe.unsubscribe();
        this.connector.unsubscribe();
    };
    DatatableComponent.prototype.refresh = function () {
        this.config.next(this.config.getValue());
    };
    DatatableComponent.prototype.pageChanged = function ($event) {
        var current = this.currentConfig;
        this.config.next({
            sortable: current.sortable,
            filter: current.filter,
            itemsPerPage: current.itemsPerPage,
            currentPage: $event.page
        });
    };
    DatatableComponent.prototype.filterChanged = function (filter) {
        var current = this.currentConfig;
        if (filter && filter.query && this.inputValue !== filter.query) {
            this.inputValue = filter.query;
        }
        this.config.next({
            sortable: current.sortable,
            filter: Object.assign(current.filter, filter),
            itemsPerPage: current.itemsPerPage,
            currentPage: current.currentPage
        });
    };
    DatatableComponent.prototype.searchableChanged = function (value) {
        this.filterChanged({
            query: value
        });
    };
    DatatableComponent.prototype.itemsPerPageChanged = function (value) {
        var current = this.currentConfig;
        this.config.next({
            sortable: current.sortable,
            filter: current.filter,
            itemsPerPage: value,
            currentPage: current.currentPage
        });
    };
    DatatableComponent.prototype.sortHeaderClick = function (sortHeader) {
        var current = this.currentConfig;
        var old = current.sortable;
        var sortable = { direction: 'asc', key: sortHeader.sortBy, el: sortHeader };
        if (old && old.key === sortHeader.sortBy && old.direction === 'desc') {
            sortable.direction = sortable.key = null;
        }
        else if (old && old.key === sortHeader.sortBy && old.direction === 'asc') {
            sortable.direction = 'desc';
        }
        else if (old.el && old.key !== sortHeader.sortBy) {
            old.el.direction = null;
        }
        sortHeader.direction = sortable.direction;
        this.config.next({
            sortable: sortable,
            filter: current.filter,
            itemsPerPage: current.itemsPerPage,
            currentPage: current.currentPage
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('header'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], DatatableComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('template'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], DatatableComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('filterHeader'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], DatatableComponent.prototype, "filterHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(SortHeaderDirective),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "headers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchableEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DatatableComponent.prototype, "searchableEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "searchable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "hideOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "minTableWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "minHeight", void 0);
    DatatableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datatable',
            template: __webpack_require__(/*! ./datatable.component.html */ "./src/app/support/components/datatable/datatable.component.html"),
            styles: [__webpack_require__(/*! ./datatable.component.less */ "./src/app/support/components/datatable/datatable.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], DatatableComponent);
    return DatatableComponent;
}());



/***/ }),

/***/ "./src/app/support/components/index.ts":
/*!*********************************************!*\
  !*** ./src/app/support/components/index.ts ***!
  \*********************************************/
/*! exports provided: DatatableComponent, SortHeaderDirective, InputControlComponent, InputDialogComponent, ConfirmDialogComponent, AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatable/datatable.component */ "./src/app/support/components/datatable/datatable.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__["DatatableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortHeaderDirective", function() { return _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__["SortHeaderDirective"]; });

/* harmony import */ var _input_control_input_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-control/input-control.component */ "./src/app/support/components/input-control/input-control.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputControlComponent", function() { return _input_control_input_control_component__WEBPACK_IMPORTED_MODULE_1__["InputControlComponent"]; });

/* harmony import */ var _input_dialog_input_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-dialog/input-dialog.component */ "./src/app/support/components/input-dialog/input-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputDialogComponent", function() { return _input_dialog_input_dialog_component__WEBPACK_IMPORTED_MODULE_2__["InputDialogComponent"]; });

/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/support/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]; });

/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ "./src/app/support/components/alert-dialog/alert-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AlertDialogComponent"]; });








/***/ }),

/***/ "./src/app/support/components/input-control/input-control.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/support/components/input-control/input-control.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"containerClass\"\n     [ngClass]=\"{\n        'has-error': !valid && (touched || dirty) && !disabled && !readonly,\n        'has-success': valid  && !disabled && !readonly && (touched || dirty) && allowSuccess,\n        'input-group': inputGroupBtn != null\n     }\">\n\n    <label *ngIf=\"label != null\">{{ label }}</label>\n\n    <ng-container *ngIf=\"type != 'text-area'\">\n        <input\n                [name]=\"name\"\n                [min]=\"minlength\"\n                [max]=\"maxlength\"\n                [mask]=\"inputMask\"\n                [class]=\"inputClass + ' form-control'\"\n                [ngClass]=\"{'readonly': readonly}\"\n                [placeholder]=\"placeholder\"\n                [value]=\"value\" (click)=\"setTouched()\" (input)=\"setValue($event.target.value)\"\n                [disabled]=\"disabled\" [type]=\"type\">\n    </ng-container>\n    <ng-container *ngIf=\"type == 'text-area'\">\n        <textarea\n                [name]=\"name\"\n                [mask]=\"inputMask\"\n                [class]=\"inputClass + ' form-control'\"\n                [ngClass]=\"{'readonly': readonly}\"\n                [placeholder]=\"placeholder\"\n                [value]=\"value\"\n                [rows]=\"rows\"\n                (click)=\"setTouched()\" (input)=\"setValue($event.target.value)\"\n                [disabled]=\"disabled\"\n        ></textarea>\n    </ng-container>\n\n\n    <div *ngIf=\"inputGroupBtn != null\" [class]=\"inputGroupClass\" [ngStyle]=\"{'padding-top.px': label != null ? 24 : 0}\">\n        <ng-container [ngTemplateOutlet]=\"inputGroupBtn\"></ng-container>\n    </div>\n</div>\n<label *ngIf=\"!valid && (touched || dirty) && !disabled && showValidationMessage\"\n       class=\"help-block text-danger text-right animated fadeInDown\">\n    {{ errors[0] }}\n</label>"

/***/ }),

/***/ "./src/app/support/components/input-control/input-control.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/support/components/input-control/input-control.component.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/support/components/input-control/input-control.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/support/components/input-control/input-control.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InputControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputControlComponent", function() { return InputControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var messages = {
    required: 'Preencha este campo.',
    email: 'Preencha um e-mail válido.',
    validateEqual: 'Os campos não correspondem.',
    pattern: 'Formato inválido.',
    checkEmail: 'E-mail já cadastrado no sistema.'
};
var InputControlComponent = /** @class */ (function () {
    function InputControlComponent(injector, elementRef) {
        this.injector = injector;
        this.elementRef = elementRef;
        this.control = null;
        this.type = 'text';
        this.label = null;
        this.placeholder = '';
        this.inputClass = '';
        this.inputGroupClass = 'input-group-btn';
        this.containerClass = '';
        this.inputMask = null;
        this.minlength = null;
        this.maxlength = null;
        this.rows = null;
        this.allowSuccess = false;
        this.showValidationMessage = true;
        this.name = '';
        this.value = '';
    }
    InputControlComponent_1 = InputControlComponent;
    Object.defineProperty(InputControlComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (isDisabled) {
            this._disabled = isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputControlComponent.prototype, "readonly", {
        set: function (isReadOnly) {
            this.disabled = isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    InputControlComponent.guidGenerator = function () {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    };
    Object.defineProperty(InputControlComponent.prototype, "errors", {
        get: function () {
            if (this.control && this.control.errors) {
                var errors = Object.keys(this.control.errors);
                return errors.map(function (err) { return messages[err]; });
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputControlComponent.prototype, "valid", {
        get: function () {
            return this.control ? this.control.valid : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputControlComponent.prototype, "touched", {
        get: function () {
            return this.control ? this.control.touched : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputControlComponent.prototype, "dirty", {
        get: function () {
            return this.control ? this.control.dirty : true;
        },
        enumerable: true,
        configurable: true
    });
    InputControlComponent.prototype.ngOnInit = function () {
        if (!this.name) {
            this.name = InputControlComponent_1.guidGenerator();
        }
        try {
            this.control = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]);
        }
        catch (e) {
            this.control = null;
        }
    };
    InputControlComponent.prototype.ngOnChanges = function (changes) {
    };
    InputControlComponent.prototype.setTouched = function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    InputControlComponent.prototype.setValue = function (value) {
        this.value = value;
        if (this.onChange) {
            this.onChange(this.value);
        }
    };
    InputControlComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    InputControlComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    InputControlComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    InputControlComponent.prototype.writeValue = function (obj) {
        if (obj && this.value !== obj) {
            this.value = obj;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isDisabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputControlComponent.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('readonly'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputControlComponent.prototype, "readonly", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputControlComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputControlComponent.prototype, "formControlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "inputClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "inputGroupClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('containerClass'),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "containerClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "inputMask", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "minlength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "maxlength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "rows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "allowSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "showValidationMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputControlComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('inputGroupBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], InputControlComponent.prototype, "inputGroupBtn", void 0);
    InputControlComponent = InputControlComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-control',
            template: __webpack_require__(/*! ./input-control.component.html */ "./src/app/support/components/input-control/input-control.component.html"),
            styles: [__webpack_require__(/*! ./input-control.component.less */ "./src/app/support/components/input-control/input-control.component.less")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputControlComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InputControlComponent);
    return InputControlComponent;
    var InputControlComponent_1;
}());



/***/ }),

/***/ "./src/app/support/components/input-dialog/input-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/support/components/input-dialog/input-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ngForm #form=\"ngForm\" class=\"modal-body text-center\">\n    <div class=\"form-group\">\n        <app-input-control\n                required\n                [isDisabled]=\"disabled\"\n                [(ngModel)]=\"input\"\n                [label]=\"label\"\n                [type]=\"type\"\n                [rows]=\"rows\"\n                name=\"control\"\n        ></app-input-control>\n    </div>\n    <button type=\"button\" [disabled]=\"disabled || form.invalid\" class=\"btn btn-default push-10-r\" (click)=\"confirm()\">{{ confirmButtonText }}</button>\n    <button type=\"button\" [disabled]=\"disabled\" class=\"btn btn-primary\" (click)=\"decline()\">{{ cancelButtonText }}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/support/components/input-dialog/input-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/support/components/input-dialog/input-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: InputDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDialogComponent", function() { return InputDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_dialog_abstract_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-dialog/abstract-dialog.component */ "./src/app/support/components/abstract-dialog/abstract-dialog.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputDialogComponent = /** @class */ (function (_super) {
    __extends(InputDialogComponent, _super);
    function InputDialogComponent(bsModalRef) {
        var _this = _super.call(this, bsModalRef) || this;
        _this.bsModalRef = bsModalRef;
        _this.rows = null;
        _this.autoHide = true;
        return _this;
    }
    InputDialogComponent.prototype.confirm = function () {
        this.observer.next({
            value: this.input,
            instance: this,
            modalRef: this.bsModalRef
        });
        if (this.autoHide) {
            this.observer.complete();
            this.bsModalRef.hide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputDialogComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputDialogComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputDialogComponent.prototype, "rows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputDialogComponent.prototype, "autoHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputDialogComponent.prototype, "confirmButtonText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputDialogComponent.prototype, "cancelButtonText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputDialogComponent.prototype, "disabled", void 0);
    InputDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-dialog',
            template: __webpack_require__(/*! ./input-dialog.component.html */ "./src/app/support/components/input-dialog/input-dialog.component.html"),
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], InputDialogComponent);
    return InputDialogComponent;
}(_abstract_dialog_abstract_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AbstractDialogComponent"]));



/***/ }),

/***/ "./src/app/support/directivies/check-email-validator.ts":
/*!**************************************************************!*\
  !*** ./src/app/support/directivies/check-email-validator.ts ***!
  \**************************************************************/
/*! exports provided: CheckEmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckEmailValidator", function() { return CheckEmailValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./src/app/support/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckEmailValidator = /** @class */ (function () {
    function CheckEmailValidator(userService, dialogService, toastr) {
        this.userService = userService;
        this.dialogService = dialogService;
        this.toastr = toastr;
        this.model = null;
        this.parent = null;
    }
    CheckEmailValidator_1 = CheckEmailValidator;
    CheckEmailValidator.prototype.validate = function (c) {
        var _this = this;
        var v = c.value;
        if (v && c.dirty) {
            clearTimeout(this.emailTimeout);
            return new Promise(function (resolve, reject) {
                _this.emailTimeout = setTimeout(function () {
                    _this.userService.checkEmailNotTaken(v, _this.appCheckEmail)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (a) { return a; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err.error.data || {});
                    }))
                        .subscribe(function (response) { return resolve(response); }, function (error) { return resolve(error); });
                }, 600);
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CheckEmailValidator.prototype, "appCheckEmail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckEmailValidator.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckEmailValidator.prototype, "parent", void 0);
    CheckEmailValidator = CheckEmailValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[appCheckEmail][formControlName],[appCheckEmail][formControl],[appCheckEmail][ngModel]",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CheckEmailValidator_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], CheckEmailValidator);
    return CheckEmailValidator;
    var CheckEmailValidator_1;
}());



/***/ }),

/***/ "./src/app/support/directivies/equal-validator.ts":
/*!********************************************************!*\
  !*** ./src/app/support/directivies/equal-validator.ts ***!
  \********************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator() {
        this.subscribe = null;
    }
    EqualValidator_1 = EqualValidator;
    EqualValidator.prototype.validate = function (c) {
        var v = c.value;
        var e = c.root.get(this.validateEqual);
        if (this.subscribe == null) {
            this.subscribe = e.valueChanges.subscribe(function () {
                c.updateValueAndValidity();
            });
        }
        if (e && v !== e.value) {
            return {
                validateEqual: true
            };
        }
        return null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("appValidateEqual"),
        __metadata("design:type", String)
    ], EqualValidator.prototype, "validateEqual", void 0);
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[appValidateEqual][formControlName],[validateEqual]\n    [formControl],[validateEqual][ngModel]",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        })
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "./src/app/support/directivies/index.ts":
/*!**********************************************!*\
  !*** ./src/app/support/directivies/index.ts ***!
  \**********************************************/
/*! exports provided: CheckEmailValidator, EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_email_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-email-validator */ "./src/app/support/directivies/check-email-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckEmailValidator", function() { return _check_email_validator__WEBPACK_IMPORTED_MODULE_0__["CheckEmailValidator"]; });

/* harmony import */ var _equal_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equal-validator */ "./src/app/support/directivies/equal-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return _equal_validator__WEBPACK_IMPORTED_MODULE_1__["EqualValidator"]; });





/***/ }),

/***/ "./src/app/support/pipes/index.ts":
/*!****************************************!*\
  !*** ./src/app/support/pipes/index.ts ***!
  \****************************************/
/*! exports provided: Safe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/support/pipes/safe.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Safe", function() { return _safe_pipe__WEBPACK_IMPORTED_MODULE_0__["Safe"]; });




/***/ }),

/***/ "./src/app/support/pipes/safe.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/support/pipes/safe.pipe.ts ***!
  \********************************************/
/*! exports provided: Safe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Safe", function() { return Safe; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Safe = /** @class */ (function () {
    function Safe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Safe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    Safe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], Safe);
    return Safe;
}());



/***/ }),

/***/ "./src/app/support/services/abstract-service.ts":
/*!******************************************************!*\
  !*** ./src/app/support/services/abstract-service.ts ***!
  \******************************************************/
/*! exports provided: AbstractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractService", function() { return AbstractService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var AbstractService = /** @class */ (function () {
    function AbstractService(http) {
        this.http = http;
        this.baseURL = '/api';
    }
    AbstractService.prototype.all = function () {
        return this.http.get(this.baseURL + "/" + this.resourceURL + "/all").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (r) { return r.data; }));
    };
    AbstractService.prototype.paginate = function (page, perPage, sortable, filter) {
        var defaultParameters = {
            order_by: sortable ? sortable.key : null,
            direction: sortable ? sortable.direction : null,
            page: page,
            per_page: perPage,
        };
        var filterParameters = this.formatFilter(filter);
        var parameters = this.buildParameter(__assign({}, defaultParameters, filterParameters));
        return this.http.get(this.baseURL + "/" + this.resourceURL + "?" + parameters);
    };
    AbstractService.prototype.in = function (ids) {
        return this.http
            .post(this.baseURL + "/" + this.resourceURL + "/in", {
            data: ids
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) { return resp.data; }));
    };
    AbstractService.prototype.find = function (id) {
        return this.http.get(this.baseURL + "/" + this.resourceURL + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) { return resp.data; }));
    };
    AbstractService.prototype.save = function (entity) {
        var response = null;
        if (entity.id == null) {
            response = this.http.post(this.baseURL + "/" + this.resourceURL, entity);
        }
        else {
            response = this.http.put(this.baseURL + "/" + this.resourceURL + "/" + entity.id, entity);
        }
        return response.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) { return resp.data; }));
    };
    AbstractService.prototype.delete = function (id) {
        return this.http.delete(this.baseURL + "/" + this.resourceURL + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) { return resp.data; }));
    };
    AbstractService.prototype.buildParameter = function (data) {
        var _filter = Object.keys(data).map(function (k) {
            return data[k] ? k + "=" + data[k] : null;
        });
        return _filter.filter(function (f) { return f != null; }).join('&');
    };
    AbstractService.prototype.formatFilter = function (filter) {
        filter = filter ? filter : {};
        var data = {};
        Object.keys(filter).map(function (k) {
            data["filter[" + k + "]"] = filter[k];
            return k;
        });
        return data;
    };
    return AbstractService;
}());



/***/ }),

/***/ "./src/app/support/services/dialog-service.ts":
/*!****************************************************!*\
  !*** ./src/app/support/services/dialog-service.ts ***!
  \****************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/alert-dialog/alert-dialog.component */ "./src/app/support/components/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/confirm-dialog/confirm-dialog.component */ "./src/app/support/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _components_input_dialog_input_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/input-dialog/input-dialog.component */ "./src/app/support/components/input-dialog/input-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DialogService = /** @class */ (function () {
    function DialogService(modalService) {
        var _this = this;
        this.modalService = modalService;
        this.instances = [];
        this.modalService.onHide.subscribe(function (ref) {
            _this.instances.pop();
        });
    }
    DialogService.prototype.openModal = function (view, options) {
        var ref = this.modalService.show(view, options);
        this.instances.push(ref);
        return ref;
    };
    DialogService.prototype.alert = function (title, body) {
        return this.openDialogComponent(_components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AlertDialogComponent"], {
            initialState: {
                title: title,
                body: body
            }
        }, true);
    };
    DialogService.prototype.confirm = function (message, catch_error) {
        if (message === void 0) { message = 'Realmente deseja alterar as informações?'; }
        if (catch_error === void 0) { catch_error = true; }
        return this.openDialogComponent(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            initialState: {
                message: message
            },
            class: 'modal-sm'
        }, catch_error);
    };
    DialogService.prototype.input = function (label, type, autoHide, confirmButtonText, cancelButtonText, catch_error, rows, classSize) {
        if (type === void 0) { type = 'text'; }
        if (autoHide === void 0) { autoHide = true; }
        if (confirmButtonText === void 0) { confirmButtonText = 'Salvar'; }
        if (cancelButtonText === void 0) { cancelButtonText = 'Cancelar'; }
        if (catch_error === void 0) { catch_error = true; }
        return this.openDialogComponent(_components_input_dialog_input_dialog_component__WEBPACK_IMPORTED_MODULE_6__["InputDialogComponent"], {
            initialState: {
                label: label,
                type: type,
                autoHide: autoHide,
                confirmButtonText: confirmButtonText,
                cancelButtonText: cancelButtonText,
                rows: rows
            },
            class: classSize ? classSize : 'modal-sm'
        }, catch_error);
    };
    DialogService.prototype.openDialogComponent = function (component, config, catch_error) {
        if (catch_error === void 0) { catch_error = false; }
        var ref = this.openModal(component, config);
        var model = ref.content;
        if (catch_error) {
            return model.observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }));
        }
        return model.observable;
    };
    DialogService.prototype.hideAll = function () {
        this.instances.forEach(function (ref) { return ref.hide(); });
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/support/services/index.ts":
/*!*******************************************!*\
  !*** ./src/app/support/services/index.ts ***!
  \*******************************************/
/*! exports provided: AbstractService, DialogService, ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-service */ "./src/app/support/services/abstract-service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractService", function() { return _abstract_service__WEBPACK_IMPORTED_MODULE_0__["AbstractService"]; });

/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-service */ "./src/app/support/services/dialog-service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]; });

/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast-service */ "./src/app/support/services/toast-service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]; });






/***/ }),

/***/ "./src/app/support/services/toast-service.ts":
/*!***************************************************!*\
  !*** ./src/app/support/services/toast-service.ts ***!
  \***************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(toastr) {
        this.toastr = toastr;
        this.defaultConfig = {
            timeOut: 3000,
            progressBar: true
        };
    }
    ToastService.prototype.success = function (message, title, options) {
        return this.toastr.success(message, title ? title : 'Sucesso!', Object.assign({}, options, this.defaultConfig));
    };
    ToastService.prototype.error = function (message, title, options) {
        return this.toastr.error(message, title ? title : 'Oops!', Object.assign({}, options, this.defaultConfig));
    };
    ToastService.prototype.alert = function (message, title, options) {
        return this.toastr.warning(message, title ? title : 'Alerta!', Object.assign({}, options, this.defaultConfig));
    };
    ToastService.prototype.info = function (message, title, options) {
        return this.toastr.info(message, title ? title : 'Alerta!', Object.assign({}, options, this.defaultConfig));
    };
    ToastService.prototype.serverResponseFail = function () {
        this.error('Algo deu errado, contate o administrador.');
    };
    ToastService.prototype.updateSuccess = function () {
        this.success('Informações alteradas com sucesso.');
    };
    ToastService.prototype.createSuccess = function () {
        this.success('Informações cadastradas com sucesso.');
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/support/support.module.ts":
/*!*******************************************!*\
  !*** ./src/app/support/support.module.ts ***!
  \*******************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components */ "./src/app/support/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services */ "./src/app/support/services/index.ts");
/* harmony import */ var _directivies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directivies */ "./src/app/support/directivies/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes */ "./src/app/support/pipes/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var exportShared = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PopoverModule"],
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
    ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"],
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"],
    ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__["Ng2Webstorage"],
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"],
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"],
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"]
];
var importShared = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(),
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PopoverModule"].forRoot(),
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
    ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
    ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forRoot(),
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
    ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__["Ng2Webstorage"].forRoot({ prefix: 'unieventos' })
];
var declarations = [
    _components__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"],
    _components__WEBPACK_IMPORTED_MODULE_10__["SortHeaderDirective"],
    _components__WEBPACK_IMPORTED_MODULE_10__["InputControlComponent"],
    _components__WEBPACK_IMPORTED_MODULE_10__["InputDialogComponent"],
    _components__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"],
    _components__WEBPACK_IMPORTED_MODULE_10__["AlertDialogComponent"],
    _directivies__WEBPACK_IMPORTED_MODULE_12__["EqualValidator"],
    _directivies__WEBPACK_IMPORTED_MODULE_12__["CheckEmailValidator"],
    _pipes__WEBPACK_IMPORTED_MODULE_13__["Safe"]
];
var entryComponents = [
    _components__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"],
    _components__WEBPACK_IMPORTED_MODULE_10__["AlertDialogComponent"],
    _components__WEBPACK_IMPORTED_MODULE_10__["InputDialogComponent"],
];
/**
 * Contém a base para todos os módulos
 */
var SupportModule = /** @class */ (function () {
    function SupportModule() {
    }
    SupportModule_1 = SupportModule;
    SupportModule.forRoot = function () {
        return {
            ngModule: SupportModule_1,
            providers: [
                { provide: _services__WEBPACK_IMPORTED_MODULE_11__["ToastService"], useClass: _services__WEBPACK_IMPORTED_MODULE_11__["ToastService"] },
                { provide: _services__WEBPACK_IMPORTED_MODULE_11__["DialogService"], useClass: _services__WEBPACK_IMPORTED_MODULE_11__["DialogService"] }
            ]
        };
    };
    SupportModule = SupportModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: importShared.slice(),
            exports: exportShared.concat(declarations),
            declarations: declarations.slice(),
            entryComponents: entryComponents.slice()
        })
    ], SupportModule);
    return SupportModule;
    var SupportModule_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    authClientID: '',
    authClientSecret: ''
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/deploy/app/resources/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map