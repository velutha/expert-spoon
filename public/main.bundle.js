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

module.exports = "<layout>\n\n</layout>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_layout_layout_component__ = __webpack_require__("../../../../../src/app/components/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_questions_questions_component__ = __webpack_require__("../../../../../src/app/components/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
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
    { path: "", component: __WEBPACK_IMPORTED_MODULE_34__components_home_home_component__["a" /* HomeComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_31__components_login_login_component__["a" /* LoginComponent */], pathMatch: "full" },
    { path: "signup", component: __WEBPACK_IMPORTED_MODULE_35__components_signup_signup_component__["a" /* SignupComponent */], pathMatch: "full" },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_34__components_home_home_component__["a" /* HomeComponent */], pathMatch: "full" },
    {
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_32__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    { path: "questions", component: __WEBPACK_IMPORTED_MODULE_33__components_questions_questions_component__["a" /* QuestionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_29__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_questions_questions_component__["a" /* QuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
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
                __WEBPACK_IMPORTED_MODULE_22__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_progress_bar__["a" /* MatProgressBarModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_10__services_answer_service__["a" /* AnswerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_29__app_component__["a" /* AppComponent */]]
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
exports.push([module.i, ".file-upload{\n    max-width: 50%;\n    margin: 30px; \n    margin-left: 20%   \n}\n\n.upload-button{\n    background-color: #3f51b5;\n    color: white;\n}\n\ninput[type=\"file\"] {\n    display: none;\n}\n\n#custom-file-input {\n    border: 1px solid #ccc;\n    display: inline-block;\n    cursor: pointer;\n}\n\n.progress-bar{\n    max-width: 50%;\n    margin: 30px; \n    margin-left: 20%; \n    margin-top: 0%\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-container\">\n    <mat-card class=\"file-upload\">\n        <mat-card-header class=\"file-upload-header\">\n            <mat-card-title>Upload questions</mat-card-title>\n        </mat-card-header>\n    \n        <mat-card-content class=\"file-upload-content\" >\n            <div class=\"upload-form\" fxLayout=\"column\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Enterprise Id\" [(ngModel)]=\"enterpriseId\">\n                </mat-form-field> \n                <div >\n                    <button id=\"custom-file-input\"mat-button class=\"upload-button\" >\n                        Choose file\n                    </button>\n                    <input id=\"file-input\" name=\"myFile\" type=\"file\" (change)=\"encodeFile()\" >\n                </div>\n            </div>\n        </mat-card-content>\n        \n        <mat-card-actions>\n            <button class=\"upload-button\" mat-button (click)=\"onUpload()\">Upload</button>\n        </mat-card-actions>\n    </mat-card>\n\n    <!--<mat-progress-bar\n          [class.hidden] = \"progressBar\"\n          class=\"progress-bar\"\n          color='primary'\n          mode=\"indeterminate\"\n          value= 20\n          bufferValue= 75>\n      </mat-progress-bar>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function DashboardComponent(service, snackBar) {
        this.service = service;
        this.snackBar = snackBar;
        this.progressBar = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var fileInput = document.getElementById('file-input');
        var customInput = document.getElementById('custom-file-input');
        customInput.addEventListener('click', function () {
            fileInput.click();
            //console.log(fileInput);
        });
        fileInput.addEventListener('change', function (event) {
            _this.fileName = event.target.value.replace(/^.*[\\\/]/, '');
            customInput.innerText = _this.fileName;
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
        var _this = this;
        var options = {
            entId: this.enterpriseId,
            data: this.data,
            fileName: this.fileName
        };
        this.service.uploadQuestions(options).subscribe(function (response) {
            console.log(response);
            if (response.status === 201) {
                _this.snackBar.open('Questions uploaded!', 'OK', {
                    duration: 2000
                });
            }
            else {
                _this.snackBar.open('Something went wrong', 'OK', {
                    duration: 2000
                });
            }
            _this.enterpriseId = '';
            _this.data = '';
            _this.fileName = '';
            document.getElementById('custom-file-input').innerText = 'Choose file';
        });
        //console.log(this.enterpriseId,this.fileName,this.data);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatSnackBar */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\n  position: relative;\n}\n\n#footer {\n  position: absolute;\n  bottom: 0%;\n  right: 0%;\n  left: 0%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" layout=\"row\" fullscreen>\n  <div fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n    <mat-toolbar id=\"footer\" color='primary'>\n      <div>\n        About us\n      </div>\n      <div>\n        Contact us\n      </div>\n    </mat-toolbar>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "footer",
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n}\n\n#content {\n  margin: 10%;\n  background-color: #dcdcdc;\n}\n\n.card-header {\n  font-weight: bold;\n  font-size: 125%;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <mat-card id=\"content\">\n    <mat-card-header fxLayoutAlign=\"center\">\n      <mat-card-title class=\"card-header\">\n        The ultimate feedback tool\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      Create customised feedback surveys for employees of different hierachical levels and review with statistical results.\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
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
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*#closeNavIcon{\n    float:right;\n  }*/\n\n#sideNav {\n  color: #3f51b5;\n  width: 15%;\n}\n\n#navHeader {\n  height: 40px;\n  padding-left: 10px;\n  margin-bottom: 20px;\n}\n\n#navHeader #projectName {\n  margin: 10px 10px 10px 5px;\n  display: inline-block;\n  font-size: 20px;\n}\n\n.navLinks {\n  font-size: 14px;\n}\n\n.active {\n  background: #f5f5f5;\n}\n\n.login-chip {\n  color: #3f51b5;\n  font-weight: bold;\n  margin: 10px;\n}\n\n.home-link {\n  cursor: pointer;\n}\n\n.hide {\n  display: none;\n}\n\n#header {\n  -webkit-box-shadow: 10px 2px 5px black;\n          box-shadow: 10px 2px 5px black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<!--*ngIf=\"auth.isLoggedIn()\"-->\n<mat-sidenav-container layout=\"row\" fullscreen>\n  <div class=\"container\" id=\"header\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n\n    <mat-toolbar role=\"header\" color=\"primary\">\n\n      <div class=\"text-left\" fxFlex=\"15%\">\n        <button mat-icon-button (click)=\"menu.open()\" *ngIf=\"auth.isLoggedIn()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n\n      <div fxFlex=\"70%\">\n        <span id=\"place\" routerLink=\"/home\" class=\"home-link\">{{projectName}}</span>\n      </div>\n\n      <div fxFlex=\"15%\">\n        <div *ngIf=\"auth.isLoggedIn() else notLoggedIn\">\n          <button mat-icon-button [matMenuTriggerFor]=\"userMenu\">\n            <mat-icon>person</mat-icon>\n          </button>\n        </div>\n        <ng-template #notLoggedIn>\n          <div>\n            <a mat-raised-button class=\"login-chip\" routerLink=\"/login\" routerLinkActive=\"hide\">\n              Login\n            </a>\n\n            <a mat-raised-button class=\"login-chip\" routerLink=\"/signup\" routerLinkActive=\"hide\">\n              Signup\n            </a>\n\n          </div>\n        </ng-template>\n      </div>\n\n    </mat-toolbar>\n\n  </div>\n\n  <div>\n    <mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\">\n      <button mat-menu-item (click)=\"logoutUser()\">\n        <span>Logout</span>\n      </button>\n    </mat-menu>\n  </div>\n\n  <router-outlet></router-outlet>\n  <!-- <login></login> -->\n  <!-- Routed views go here -->\n\n\n  <mat-sidenav id=\"sideNav\" color=\"primary\" #menu>\n    <mat-nav-list>\n      <div id=\"navHeader\" routerLink=\"/home\" class=\"home-link\" (click)=\"menu.close()\">\n        <span id=\"projectName\">{{projectName}}</span>\n        <!-- <button mat-icon-button id=\"closeNavIcon\" (click)=\"menu.close()\">\n                <mat-icon >close</mat-icon>\n            </button> -->\n      </div>\n\n      <div *ngIf=\"auth.getUser().role === 'admin'\">\n        <a mat-list-item routerLink=\"/dashboard\" routerLinkActive=\"active\" class=\"navLinks\" (click)=\"menu.close()\"> Dashboard </a>\n      </div>\n\n      <a mat-list-item routerLink=\"/questions\" routerLinkActive=\"active\" routerLink=\"/questions\" class=\"navLinks\" (click)=\"menu.close()\">\n        Questions </a>\n\n    </mat-nav-list>\n    <hr>\n  </mat-sidenav>\n</mat-sidenav-container>"

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
exports.push([module.i, ".full-width {\n  width: 100%;\n}\n\n#loginContainer {\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n  height: 100%;\n}\n\n.alert {\n  color: red;\n}\n\n#loginForm,\n#signUpForm {\n  width: 350px;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.formInputs {\n  margin-top: 15px;\n}\n\n.card-header {\n  font-weight: bold;\n  font-size: 125%;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n#spinner {\n  margin-left: 45%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loginContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n  <mat-card>\n    <mat-card-header fxLayoutAlign=\"center center\">\n      <mat-card-title class=\"card-header\">\n        Sign In\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form id=\"loginForm\" #loginForm=\"ngForm\" (ngSubmit)=\"formSubmit(loginForm)\">\n        <mat-form-field class=\"full-width\">\n          <input [(ngModel)]=\"model.email\" #login_email=\"ngModel\" required name=\"email\" type=\"email\" matInput id=\"login_email\" placeholder=\"Email\"\n            class=\"formInputs\">\n\n        </mat-form-field>\n        <div id=\"loginEmailErrors\" *ngIf=\"login_email.touched && !login_email.valid\">\n          <span *ngIf=\"login_email['errors']['required']\" class=\"alert\">\n            Email is required\n          </span>\n        </div>\n\n\n        <mat-form-field class=\"full-width\">\n          <input [(ngModel)]=\"model.password\" #login_password=\"ngModel\" required name=\"password\" type=\"password\" matInput id=\"login_password\"\n            placeholder=\"Password\" class=\"formInputs\">\n        </mat-form-field>\n        <div id=\"loginPasswordErrors\" *ngIf=\"login_password.touched && !login_password.valid\">\n          <span *ngIf=\"login_password['errors']['required']\" class=\"alert\">\n            Password is required\n          </span>\n        </div>\n\n\n\n\n        <div *ngIf=\"showSpinner;else signinButton\">\n          <mat-spinner id=\"spinner\" [diameter]=\"30\"></mat-spinner>\n        </div>\n\n        <ng-template #signinButton>\n          <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-raised-button color='primary'>Sign In</button>\n        </ng-template>\n\n      </form>\n    </mat-card-content>\n  </mat-card>\n  <br/>\n  <span class=\"alert\" fxLayoutAlign=\"center\">{{invalidLogin}}</span>\n  <br>\n\n</div>\n\n\n<mat-spinner *ngIf=\"showSpinner\"></mat-spinner>"

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
            email: "",
            password: ""
        };
        this.showSpinner = false;
        this.formSubmit = function (f) {
            console.log(f);
            _this.showSpinner = true;
            if (f.valid) {
                _this.auth.login(f.value).subscribe(function (response) {
                    if (response) {
                        var returnUrl = _this.route.snapshot.queryParamMap.get("returnUrl");
                        //console.log(returnUrl);
                        _this.router.navigate([returnUrl || "/"]);
                    }
                    else
                        _this.invalidLogin = "Invalid credentials";
                    _this.showSpinner = false;
                }, function (error) {
                    // console.log(error);
                    switch (error.status) {
                        case 401:
                            _this.invalidLogin = "Invalid credentials";
                            break;
                        case 404:
                            _this.invalidLogin = "Something went wrong";
                            break;
                        default:
                            _this.invalidLogin = "Something went wrong";
                            _this.showSpinner = false;
                    }
                });
            }
            //console.log('entered');
            //this.auth.login();
            //this.router.navigate(['/dashboard']);
        };
        // authentication
        if (auth.isLoggedIn()) {
            router.navigate(["/dashboard"]);
        }
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "login",
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

/***/ "../../../../../src/app/components/questions/questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section-card {\n  max-width: 80%;\n  margin: 30px;\n  margin-left: 10%;\n  background-color: #dcdcdc;\n}\n\n.section-title {\n  font-weight: bold;\n}\n\n.radio-option {\n  margin: 5px;\n}\n\n.radio-submit {\n  background-color: #3f51b5;\n  color: white;\n  margin-left: 50px;\n}\n\n.error-card {\n  max-width: 10%;\n  margin: 30px;\n  margin-left: 10%;\n  background-color: #dcdcdc;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"questionContainer\" fxLayout=\"column\">\n\n    <div *ngIf=\"errorMessage\">\n        <mat-card class=\"error-card\" fxLayoutAlign=\"center center\">\n            <mat-card-content class=\"section-title\">\n                {{errorMessage}}\n            </mat-card-content>\n        </mat-card>\n    </div>\n\n    <mat-card class=\"section-card\" *ngFor=\"let section of sections;let i=index\">\n\n        <mat-card-header class=\"section-title\">\n            <mat-card-title>{{section}}:</mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n            <mat-card class=\"question-card\" *ngFor=\"let question of questions[i]\">\n\n                <mat-card-header>\n                    <mat-card-title>{{question.title}}</mat-card-title>\n                </mat-card-header>\n\n                <mat-card-content>\n                    <mat-radio-group #radio class=\"options\" fxLayout=\"column\" (change)=\"onChange($event,question,section)\">\n                        <mat-radio-button class=\"radio-option\" *ngFor=\"let option of question.options\" [value]=\"option.option\">\n                            {{option.option}}\n                        </mat-radio-button>\n                    </mat-radio-group>\n                </mat-card-content>\n\n            </mat-card>\n        </mat-card-content>\n\n        <mat-card-actions>\n            <button mat-button class=\"radio-submit\" (click)=\"onSubmit(section)\">Submit</button>\n        </mat-card-actions>\n    </mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/questions/questions.component.ts":
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
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getQuestions().subscribe(function (response) {
            //console.log(Object.keys(response.body).length);
            if (response.status === 200 &&
                Object.keys(response.body).length !== 0) {
                for (var section in response.body) {
                    _this.sections.push(section);
                    _this.questions.push(response.body[section]);
                    _this.answers[section] = [];
                }
                console.log(_this.questions);
            }
            else {
                _this.errorMessage = "Oops..Something went wrong!";
            }
        }, function (error) {
            console.log(error);
            switch (error.status) {
                case 404:
                    _this.errorMessage = "Questions not found";
                    break;
                default:
                    _this.errorMessage = "Oops..Something went wrong!";
            }
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
        var choiceArray = ["a", "b", "c", "d", "e"];
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
            this.answers[section][questionIndex].choice = choice;
        }
        else if (questionIndex === -1) {
            this.answers[section].push({
                questionId: question.questionId,
                choice: choice
                //revieweeId and reviewerId to be attached to the answer
            });
        }
        //console.log(this.answers);
    };
    QuestionsComponent.prototype.onSubmit = function (section) {
        var sectionIndex = this.sections.indexOf(section);
        var questionCount = this.questions[sectionIndex].length;
        if (this.answers[section].length === questionCount) {
            this.sendAnswers(this.answers[section]);
        }
        else {
            window.alert("Please answer all the questions before submitting");
        }
    };
    QuestionsComponent.prototype.sendAnswers = function (answers) {
        this.answerService.postAnswers(answers);
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "questions",
            template: __webpack_require__("../../../../../src/app/components/questions/questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_answer_service__["a" /* AnswerService */]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 100%;\n}\n\n#loginContainer {\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n  height: 100%;\n}\n\n.alert {\n  color: red;\n}\n\n#loginForm,\n#signUpForm {\n  width: 350px;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.formInputs {\n  margin-top: 15px;\n}\n\n.card-header {\n  font-weight: bold;\n  font-size: 125%;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n#spinner {\n  margin-left: 45%;\n}\n\n#success_login {\n  background-color: #3f51b5;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loginContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n  <div *ngIf=\"!signupSuccess; else signup_success \">\n    <mat-card id=\"signup-card\">\n\n      <mat-card-header fxLayoutAlign=\"center center\">\n        <mat-card-title class=\"card-header\">Sign up</mat-card-title>\n      </mat-card-header>\n\n      <mat-card-content>\n\n        <form id=\"signUpForm\" #signupForm=\"ngForm\" (ngSubmit)=\"formSubmit(signupForm)\">\n\n          <mat-form-field class=\"full-width\">\n            <input [(ngModel)]=\"model.name\" #signup_name=\"ngModel\" required name=\"signup_name\" type=\"email\" matInput id=\"signup_name\"\n              placeholder=\"Enter your full name\" class=\"formInputs\">\n          </mat-form-field>\n\n          <div id=\"signupEmailErrors\" *ngIf=\"signup_name.touched && !signup_name.valid\">\n            <span *ngIf=\"signup_name['errors']['required']\" class=\"alert\">\n              Name is required\n            </span>\n            <br/>\n          </div>\n\n          <mat-form-field class=\"full-width\">\n            <input [(ngModel)]=\"model.email\" #signup_email=\"ngModel\" required name=\"signup_email\" type=\"email\" matInput id=\"signup_email\"\n              placeholder=\"Enter your email address\" class=\"formInputs\">\n          </mat-form-field>\n\n          <div id=\"signupEmailErrors\" *ngIf=\"signup_email.touched && !signup_email.valid\">\n            <span *ngIf=\"signup_email['errors']['required']\" class=\"alert\">\n              Email is required\n            </span>\n            <br/>\n          </div>\n\n          <mat-form-field class=\"full-width\">\n            <input [(ngModel)]=\"model.username\" #signup_username=\"ngModel\" required name=\"signup_username\" type=\"username\" matInput id=\"signup_username\"\n              placeholder=\"Choose a username\" class=\"formInputs\">\n          </mat-form-field>\n\n          <div *ngIf=\"signup_username.touched && !signup_username.valid\">\n            <span *ngIf=\"signup_username['errors']['required']\" class=\"alert\">\n              Username is required\n            </span>\n            <br/>\n          </div>\n\n\n          <mat-form-field class=\"full-width\">\n            <input [(ngModel)]=\"model.password\" #signup_password=\"ngModel\" required name=\"signup_password\" type=\"password\" matInput id=\"signupPassword\"\n              placeholder=\"Choose a password\" class=\"formInputs\">\n          </mat-form-field>\n\n          <div *ngIf=\"signup_password.touched && !signup_password.valid\">\n            <span *ngIf=\"signup_password['errors']['required']\" class=\"alert\">\n              Password is required\n            </span>\n            <br/>\n          </div>\n\n          <mat-form-field class=\"full-width\">\n            <input required ngModel #confirm_password=\"ngModel\" name=\"confirm_password\" type=\"password\" matInput id=\"confirmPassword\"\n              placeholder=\"Confirm Password\" class=\"formInputs\">\n          </mat-form-field>\n\n          <div *ngIf=\"confirm_password.touched && !confirm_password.valid\">\n            <span *ngIf=\"confirm_password['errors']['required']\" class=\"alert\">\n              Password is required\n            </span>\n            <br/>\n          </div>\n\n          <div *ngIf=\"confirm_password.touched && confirm_password.valid\">\n            <span *ngIf=\"!(confirm_password.value===signup_password.value)\" class=\"alert\">\n              Passwords do not match\n            </span>\n            <br/>\n          </div>\n\n          <div *ngIf=\"showSpinner;else signupButton\">\n            <mat-spinner id=\"spinner\" [diameter]=\"30\"></mat-spinner>\n          </div>\n\n          <ng-template #signupButton>\n            <button type=\"submit\" [disabled]=\"!signupForm.valid\" mat-raised-button color='primary'>\n              Sign Up\n            </button>\n          </ng-template>\n\n        </form>\n      </mat-card-content>\n    </mat-card>\n    <br>\n    <span class=\"alert\" fxLayoutAlign=\"center\">{{signupError}}</span>\n    <br>\n  </div>\n\n  <ng-template #signup_success>\n    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-card-header>\n        <mat-card-title class=\"card-header\">\n          Success!\n        </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        You have been succesfully signed up..\n      </mat-card-content>\n      <mat-card-actions>\n        <button id=\"success_login\" mat-button routerLink=\"/login\">Click here to login</button>\n      </mat-card-actions>\n    </mat-card>\n  </ng-template>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
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



var SignupComponent = (function () {
    function SignupComponent(auth, router, route) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.model = {
            name: "",
            email: "",
            username: "",
            password: "",
            role: "admin"
        };
        this.signupSuccess = false;
        this.showSpinner = false;
        this.formSubmit = function (f) {
            //console.log(f);
            _this.showSpinner = true;
            if (f.valid) {
                _this.auth.signup(_this.model).subscribe(function (response) {
                    if (response) {
                        _this.signupSuccess = true;
                    }
                    else
                        _this.signupError = "Signup not succesful";
                    _this.showSpinner = false;
                }, function (error) {
                    // console.log(error);
                    switch (error.status) {
                        case 409:
                            _this.signupError = "Username already exists";
                            break;
                        case 404:
                            _this.signupError = "Something went wrong";
                            break;
                        default:
                            _this.signupError = "Something went wrong";
                            _this.showSpinner = false;
                    }
                });
            }
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        /*this.signupSuccess = false;*/
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "signup",
            template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SignupComponent);
    return SignupComponent;
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
        //console.log(answers);
    };
    AnswerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        this.login = function (credentials) {
            var url = "http://localhost:3000/api/login";
            return _this.http.post(url, credentials).map(function (response) {
                //console.log(response);
                if (response && response["token"]) {
                    //console.log(response["token"]);
                    localStorage.setItem("survey-app-token", response["token"]);
                    return true;
                }
                return false;
            });
        };
        this.signup = function (credentials) {
            var url = "http://localhost:3000/api/signup";
            return _this.http
                .post(url, credentials, { observe: "response" })
                .map(function (response) {
                //console.log(response);
                if (response.status === 200) {
                    return true;
                }
                else
                    return false;
            });
        };
        this.logout = function () {
            localStorage.removeItem("survey-app-token");
        };
        this.isLoggedIn = function () {
            var access_token = localStorage.getItem("survey-app-token");
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
                return localStorage.getItem("access_token");
            }
            return "";
        };
    }
    AuthService.prototype.getUser = function () {
        var token = localStorage.getItem("survey-app-token");
        if (!token) {
            return false;
        }
        else {
            var decodedToken = new __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["a" /* JwtHelperService */]().decodeToken(token);
            //console.log(decodedToken);
            return decodedToken;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
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
        return this.http.get("http://localhost:3000/api/question/asdf/", {
            observe: "response"
        });
    };
    QuestionService.prototype.uploadQuestions = function (httpOptions) {
        return this.http.post("/api/upload", httpOptions, { observe: "response" });
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
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