webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<layout></layout>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_answer_service__ = __webpack_require__("../../../../../src/app/services/answer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_layout_layout_component__ = __webpack_require__("../../../../../src/app/components/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__questions_questions_component__ = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// services




// angular material compnents
















// components






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_32__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_29__components_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_30__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_31__questions_questions_component__["a" /* QuestionsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_27__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__questions_questions_component__["a" /* QuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_radio__["a" /* MatRadioModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_10__services_answer_service__["a" /* AnswerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_27__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-upload{\n    max-width: 50%;\n    margin: 20px;    \n}\n\n.upload-button{\n    background-color: #3f51b5;\n    color: white;\n}\n\ninput[type=\"file\"] {\n    display: none;\n}\n\n#custom-file-input {\n    border: 1px solid #ccc;\n    display: inline-block;\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-container\">\n    <mat-card class=\"file-upload\">\n        <mat-card-header class=\"file-upload-header\">\n            <mat-card-title>Upload questions</mat-card-title>\n        </mat-card-header>\n    \n        <mat-card-content class=\"file-upload-content\" >\n            <div class=\"upload-form\" fxLayout=\"column\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Enterprise Id\" [(ngModel)]=\"enterpriseId\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Filename\" [(ngModel)]=\"fileName\">\n                    <mat-hint align=\"end\">Name of the file to be uploaded</mat-hint>\n                </mat-form-field>\n                \n                <div >\n                    <button id=\"custom-file-input\"mat-button class=\"upload-button\">\n                        Choose file\n                    </button>\n                    <input id=\"file-input\" name=\"myFile\" type=\"file\" (change)=\"encodeFile()\">\n                </div>\n                \n                \n                \n            </div>\n        </mat-card-content>\n        \n        <mat-card-actions>\n            <button class=\"upload-button\" mat-button (click)=\"onUpload()\">Upload</button>\n          </mat-card-actions>\n    \n    </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(service) {
        this.service = service;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var fileInput = document.getElementById('file-input');
        var customInput = document.getElementById('custom-file-input');
        customInput.addEventListener('click', function () {
            fileInput.click();
            //console.log(fileInput);
        });
        fileInput.addEventListener('change', function (event) {
            customInput.innerText = event.target.value.replace(/^.*[\\\/]/, '');
            //console.log(event.target.value);
        });
    };
    DashboardComponent.prototype.encodeFile = function () {
        var _this = this;
        var doc = document.querySelector('input[type=file]');
        var file = doc.files[0];
        var dataPromise = new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (event) {
                resolve(reader.result.split(',')[1]);
            };
            reader.onerror = function (error) {
                reject(error);
                console.log('Error: ', error);
            };
            reader.readAsDataURL(file);
        }).then(function (base64) {
            _this.data = base64;
        });
    };
    DashboardComponent.prototype.onUpload = function () {
        var options = {
            entId: this.enterpriseId,
            data: this.data,
            fileName: this.fileName
        };
        this.service.uploadQuestions(options);
        //console.log(this.enterpriseId,this.fileName,this.data);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#closeNavIcon{\n    float:right;\n  }\n\n  /* #sideNav{\n    color: #8C7272;\n  } */\n\n  #navHeader{\n    height: 40px;\n    padding-left: 10px;\n    margin-bottom: 20px;\n  }\n\n  #navHeader #projectName{\n    margin: 10px 10px 10px 5px;\n    display: inline-block;\n    font-size: 20px;\n  }\n\n  .navLinks{\n  font-size: 14px;\n}\n\n  .active{\n  background: #F5F5F5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--*ngIf=\"auth.isLoggedIn()\"-->\n<mat-sidenav-container layout=\"row\" fullscreen>\n    <div \n      class=\"container\" id=\"header\"\n      fxLayout\n      fxLayoutAlign=\"center\"\n      fxLayoutGap=\"10px\"\n      fxLayoutGap.xs=\"0\">\n    \n      <mat-toolbar role=\"header\" color=\"primary\">\n\n        <div class=\"text-left\" fxFlex=\"15%\">\n          <button mat-icon-button (click)=\"menu.open()\">\n            <mat-icon >menu</mat-icon>\n          </button>   \n        </div>\n\n        <div  fxFlex=\"70%\"  >\n          <span id=\"place\" >{{projectName}}</span>\n        </div>\n\n        <div fxFlex=\"15%\">\n          <div *ngIf=\"auth.isLoggedIn()\" else notLoggedIn>\n              <button mat-icon-button [matMenuTriggerFor]=\"userMenu\">\n                  <mat-icon >person</mat-icon>\n                </button>\n          </div>\n          <ng-template #notLoggedIn>\n            <div>\n                <span>Login</span>\n            </div>\n          </ng-template>  \n        </div>\n        \n      </mat-toolbar>   \n    </div>\n\n    <div>\n      <mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\">\n        <button mat-menu-item (click)=\"logoutUser()\" >\n          <span>Logout</span>\n        </button>         \n      </mat-menu>  \n    </div>\n\n    \n  \n    <router-outlet></router-outlet>\n    <!-- <login></login> -->\n    <!-- Routed views go here -->\n\n\n    <mat-sidenav id=\"sideNav\" color=\"primary\" #menu>\n      <mat-nav-list >\n        <!-- <div id=\"navHeader\">\n            <span id=\"projectName\">{{projectName}}</span>\n            <button mat-icon-button id=\"closeNavIcon\" (click)=\"menu.close()\">\n                <mat-icon >close</mat-icon>\n            </button>\n        </div> -->\n          \n          <a mat-list-item \n            routerLink=\"/dashboard\"\n            routerLinkActive=\"active\" \n            class=\"navLinks\" (click)=\"menu.close()\"> Dashboard </a>\n          <a mat-list-item routerLink=\"aquapro/geoSpatial\" \n            routerLinkActive=\"active\" class=\"navLinks\" \n            (click)=\"menu.close()\" > Questions </a>\n\n      </mat-nav-list>\n      <hr>\n    </mat-sidenav>\n  </mat-sidenav-container>\n  "

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { RouterState } from '@angular/router/src/router_state';
var LayoutComponent = (function () {
    function LayoutComponent(auth, route, router) {
        // this.state = router.routerState:RouterState;
        // router.events
        //   .subscribe((event) => {
        //     // console.log(event);
        //     if (event instanceof NavigationEnd ) {
        //       this.currentUrl = event.url;
        var _this = this;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.projectName = 'Expert spoon';
        this.logoutUser = function () {
            _this.auth.logout();
            _this.router.navigate(['']);
        };
        //       if (event.url.match(/aquapro/g)){
        //         this.projectName = 'Aqua-Pro';
        //         this.currentApp = 'aquapro';
        //         return;
        //       }
        //       if (event.url.match(/aquasmart/g)){
        //         this.projectName = 'Aqua-Smart';
        //         this.currentApp = 'aquasmart';
        //         return;
        //       }
        //     }
        // });
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'layout',
            template: __webpack_require__("../../../../../src/app/components/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width{\n    width: 100%;\n}\n\n#loginContainer{\n    display: table;\n    width: 100%;\n    margin: 0 auto;\n    height: 100%;\n}\n\n.alert{\n    color: red;\n}\n\n#loginForm, #signUpForm{\n    width: 350px;\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle;\n}\n\n.formInputs{\n    margin-top: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loginContainer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n  <mat-tab-group class=\"demo-tab-group\">\n    <mat-tab label=\"Sign In\">\n  \n      <form  id=\"loginForm\" #loginForm=\"ngForm\" (ngSubmit)=\"formSubmit(loginForm)\">\n          <mat-form-field class=\"full-width\" >\n            <input \n              [(ngModel)]=\"model.email\" \n              #login_email=\"ngModel\" \n              required \n              name=\"login_email\" \n              type=\"email\" \n              matInput  \n              id=\"login_email\"\n              placeholder=\"Email\"\n              class=\"formInputs\">\n            \n          </mat-form-field>\n          <div id=\"loginEmailErrors\" *ngIf=\"login_email.touched && !login_email.valid\">\n            <span *ngIf=\"login_email['errors']['required']\"  class=\"alert\">\n                Email is required\n            </span>\n          </div>\n          \n\n          <mat-form-field class=\"full-width\">\n            <input  \n              [(ngModel)]=\"model.password\" \n              #login_password=\"ngModel\"\n              required \n              name=\"password\" \n              type=\"password\" \n              matInput       \n              id=\"login_password\"\n              placeholder=\"Password\"\n              class=\"formInputs\">\n          </mat-form-field>\n          <div id=\"loginPasswordErrors\" *ngIf=\"login_password.touched && !login_password.valid\">\n            <span *ngIf=\"login_password['errors']['required']\"  class=\"alert\">\n                Password is required\n            </span>\n          </div>\n          <span class=\"alert\">{{invalidLogin}}</span> <br>\n          <button type=\"submit\"\n            [disabled]=\"!loginForm.valid\" mat-raised-button color='primary'>Sign In</button>\n      </form>\n    </mat-tab>\n\n    <mat-tab label=\"Sign Up\">\n      <form  id=\"signUpForm\" #signupForm=\"ngForm\" (ngSubmit)=\"formSubmit(signupForm)\">\n          <mat-form-field class=\"full-width\" >\n            <input \n              [(ngModel)]=\"model.email\" \n              #signup_email=\"ngModel\" \n              required \n              name=\"signup_email\" \n              type=\"email\" \n              matInput  \n              id=\"signup_email\"\n              placeholder=\"Email\"\n              class=\"formInputs\">\n            \n          </mat-form-field>\n          <div id=\"signupEmailErrors\" *ngIf=\"signup_email.touched && !signup_email.valid\">\n            <span *ngIf=\"signup_email['errors']['required']\"  class=\"alert\">\n                Email is required\n            </span>\n          </div>\n          \n\n          <mat-form-field class=\"full-width\">\n            <input  \n              [(ngModel)]=\"model.password\" \n              #signup_password=\"ngModel\"\n              required \n              name=\"signup_password\" \n              type=\"password\" \n              matInput       \n              id=\"signupPassword\"\n              placeholder=\"Password\"\n              class=\"formInputs\">\n          </mat-form-field>\n          <div id=\"signupPasswordErrors\" *ngIf=\"signup_password.touched && !signup_password.valid\">\n            <span *ngIf=\"signup_password['errors']['required']\"  class=\"alert\">\n                Password is required\n            </span>\n          </div>\n          <!-- <span class=\"alert\">{{invalidSignup}}</span> <br> -->\n          <button type=\"submit\"\n            [disabled]=\"!signupForm.valid\" mat-raised-button color='primary'>Sign Up</button>\n      </form>\n    </mat-tab>\n  </mat-tab-group>\n\n</div>\n\n\n<mat-spinner *ngIf=\"showSpinner\"></mat-spinner>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(auth, router, route) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.model = {
            email: '',
            password: ''
        };
        this.showSpinner = false;
        this.formSubmit = function (f) {
            // this.showSpinner = true;
            // if (f.valid){
            //   this.auth.login(f.value)
            //     .subscribe(
            //       response => {
            //         if (response){
            //           const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            //           this.router.navigate([returnUrl || '../landing']);
            //         }
            //         else
            //           this.invalidLogin = 'Invalid credentials';
            //         this.showSpinner = false;
            //       },
            //       (error: Response) => {
            //         // console.log(error);
            //         switch (error.status){
            //           case 401:
            //             this.invalidLogin = 'Invalid credentials';
            //             break;
            //           case 404:
            //             this.invalidLogin = 'Something went wrong';
            //             break;
            //           default:
            //             this.invalidLogin = 'Something went wrong';
            //         }
            //         this.showSpinner = false;
            //       }
            //     );
            // }
            console.log('entered');
            _this.auth.login();
            _this.router.navigate(['/dashboard']);
        };
        // authentication
        if (auth.isLoggedIn()) {
            router.navigate(['/dashboard']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questions/questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section-card{\n    max-width: 80%;\n    margin: 20px;\n    background-color: #DCDCDC\n}\n\n.section-title{\n    font-size: 100px;\n}\n\n.radio-option{\n    margin: 5px\n}\n\n.radio-submit {\n    background-color: #3f51b5;\n    color: white;\n    margin-left: 50px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"questionContainer\" fxLayout=\"column\">\n  <mat-card class=\"section-card\" *ngFor = \"let section of sections;let i=index\">\n\n    <mat-card-header class=\"section-title\">\n        <mat-card-title>{{section}}:</mat-card-title>\n    </mat-card-header>\n    \n    <mat-card-content>\n      <mat-card class=\"question-card\" *ngFor = \"let question of questions[i]\">\n\n          <mat-card-header>\n              <mat-card-title>{{question.title}}</mat-card-title>\n          </mat-card-header>\n\n          <mat-card-content>\n              <mat-radio-group \n                  #radio\n                  class=\"options\" \n                  fxLayout=\"column\"\n                  (change) = \"onChange($event,question,section)\"\n                >\n                <mat-radio-button class=\"radio-option\" *ngFor = \"let option of question.options\" [value]=\"option.option\">\n                    {{option.option}}\n                </mat-radio-button>\n              </mat-radio-group>\n          </mat-card-content>\n\n      </mat-card>\n    </mat-card-content>\n\n    <mat-card-actions >\n        <button mat-button class=\"radio-submit\" (click)=\"onSubmit(section)\">Submit</button>\n      </mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_answer_service__ = __webpack_require__("../../../../../src/app/services/answer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsComponent = (function () {
    function QuestionsComponent(questionService, answerService) {
        this.questionService = questionService;
        this.answerService = answerService;
        this.sections = [];
        this.questions = [];
        this.answers = {};
    }
    ;
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getQuestions().subscribe(function (response) {
            for (var section in response) {
                _this.sections.push(section);
                _this.questions.push(response[section]);
                _this.answers[section] = [];
            }
            console.log(response);
            //console.log(this.sections);
            //console.log(this.questions);
            //console.log(this.answers);
        }, function (error) {
            console.log(error);
        });
    };
    QuestionsComponent.prototype.isAnswered = function (questionId, section) {
        var i = 0;
        var status = false;
        for (var _i = 0, _a = this.answers[section]; _i < _a.length; _i++) {
            var answer = _a[_i];
            if (answer.questionId === questionId) {
                status = true;
                break;
            }
            i++;
        }
        if (status)
            return i;
        else
            return -1;
    };
    QuestionsComponent.prototype.onChange = function (radioEvent, question, section) {
        var choiceArray = ['a', 'b', 'c', 'd', 'e'];
        var choice;
        var index = 0;
        //loop to find the choice from the option value
        for (var _i = 0, _a = question.options; _i < _a.length; _i++) {
            var optionObject = _a[_i];
            if (optionObject.option === radioEvent.value) {
                choice = choiceArray[index];
                break;
            }
            index++;
        }
        //check to see if the question is already answered
        var questionIndex = this.isAnswered(question.questionId, section);
        if (questionIndex > -1) {
            this.answers[questionIndex].choice = choice;
        }
        else if (questionIndex === -1) {
            this.answers[section].push({
                questionId: question.questionId,
                choice: choice,
            });
        }
        console.log(this.answers);
    };
    QuestionsComponent.prototype.onSubmit = function (section) {
        this.sendAnswers(this.answers[section]);
    };
    QuestionsComponent.prototype.sendAnswers = function (answers) {
        this.answerService.postAnswers(answers);
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'questions',
            template: __webpack_require__("../../../../../src/app/questions/questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__services_answer_service__["a" /* AnswerService */]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/answer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerService = (function () {
    function AnswerService(http) {
        this.http = http;
    }
    AnswerService.prototype.postAnswers = function (answers) {
        var _this = this;
        answers.forEach(function (answer) {
            var httpOptions = {
                questionId: answer.questionId,
                revieweeId: 'test-user',
                choice: answer.choice,
            };
            _this.http.post('/api/answer', httpOptions).subscribe(function (response) {
                console.log('answer submitted');
            });
        });
        console.log(answers);
    };
    AnswerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AnswerService);
    return AnswerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn())
            return true;
        // this.router.navigate(['/login'], {queryParams: {returnUrl : state.url}});
        this.router.navigate(['/login']);
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { error } from 'selenium-webdriver';
var AuthService = (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        this.login = function (credentials) {
            var url = "http://localhost:3000/api/login";
            return _this.http.post(url, credentials)
                .map(function (response) {
                console.log(response);
                /*if (response && response['id']) {
                   console.log(response);
                   localStorage.setItem('survey-app-token', response['id']);
                   //localStorage.setItem('survey-app-token', 'sdasdad12qrasdfwr');
                   return true;
                }
                return false;*/
            });
        };
        this.logout = function () {
            localStorage.removeItem('survey-app-token');
        };
        this.isLoggedIn = function () {
            var access_token = localStorage.getItem('survey-app-token');
            if (!access_token) {
                return false;
            }
            // let tokenExpData = jwtHelper.getTokenExpirationDate(access_token),
            //     isExpired = jwtHelper.isTokenExpired(access_token);
            // console.log('date ', tokenExpData);
            // console.log('isexpired ', isExpired);
            return true;
        };
        this.getToken = function () {
            if (_this.isLoggedIn()) {
                return localStorage.getItem('access_token');
            }
            return '';
        };
    }
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
    }
    QuestionService.prototype.getQuestions = function () {
        return this.http.get('/api/question/asdf/');
    };
    QuestionService.prototype.uploadQuestions = function (httpOptions) {
        this.http.post('/api/upload', httpOptions).subscribe(function (response) {
            console.log(response);
        });
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // server : 'http://localhost:3000/api',
    projectName: 'survey-app'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map