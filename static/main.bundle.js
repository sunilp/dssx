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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clsft_clsft_component__ = __webpack_require__("../../../../../src/app/clsft/clsft.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'clsft', component: __WEBPACK_IMPORTED_MODULE_3__clsft_clsft_component__["a" /* ClsftComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<router-outlet></router-outlet>\n"

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

var AppComponent = /** @class */ (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clsft_clsft_component__ = __webpack_require__("../../../../../src/app/clsft/clsft.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_file_drop__ = __webpack_require__("../../../../ngx-file-drop/ngx-file-drop.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__clsft_clsft_component__["a" /* ClsftComponent */],
                __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__["a" /* LandingComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_file_drop__["a" /* FileDropModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/clsft/clsft.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".common-header {\n  line-height: 1;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.common-header-logo {\n  font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\n  font-size: 2.25rem;\n}\n\n.common-header-logo:hover {\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clsft/clsft.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"common-header py-3\">\n    <div class=\"row flex-nowrap justify-content-between align-items-center\">\n      <div class=\"col-4 pt-1\">\n        <a class=\"text-muted\" routerLink=\"/clsft\">Classification Problems</a>\n      </div>\n      <div class=\"col-4 text-center\">\n        <a class=\"common-header-logo text-dark\" href=\"#\">DssX</a>\n      </div>\n\n    </div>\n  </header>\n\n\n\n  <div class=\"center m-md-4 \">\n    <file-drop headertext=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\n    (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n        <span>&nbsp;</span>\n    </file-drop>\n    <div class=\"upload-table m-md-4 \">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                </tr>\n            </thead>\n            <tbody class=\"upload-name-style\">\n                <tr *ngFor=\"let item of files; let i=index\">\n                    <td><strong>{{ item.relativePath }}</strong></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/clsft/clsft.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClsftComponent; });
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

var ClsftComponent = /** @class */ (function () {
    function ClsftComponent() {
        this.files = [];
    }
    ClsftComponent.prototype.ngOnInit = function () {
    };
    ClsftComponent.prototype.dropped = function (event) {
        this.files = event.files;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            file.fileEntry.file(function (info) {
                console.log(info);
            });
            console.log(file.fileEntry);
        }
    };
    ClsftComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    ClsftComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    ClsftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clsft',
            template: __webpack_require__("../../../../../src/app/clsft/clsft.component.html"),
            styles: [__webpack_require__("../../../../../src/app/clsft/clsft.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClsftComponent);
    return ClsftComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* stylelint-disable selector-list-comma-newline-after */\n.blog-header {\n  line-height: 1;\n  border-bottom: 1px solid #e5e5e5;\n}\n.blog-header-logo {\n  font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\n  font-size: 2.25rem;\n}\n.blog-header-logo:hover {\n  text-decoration: none;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\n}\n.display-4 {\n  font-size: 2.5rem;\n}\n@media (min-width: 768px) {\n  .display-4 {\n    font-size: 3rem;\n  }\n}\n.nav-scroller {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n.nav-scroller .nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n.nav-scroller .nav-link {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: .875rem;\n}\n.card-img-right {\n  height: 100%;\n  border-radius: 0 3px 3px 0;\n}\n.flex-auto {\n  -ms-flex: 0 0 auto;\n  -webkit-box-flex: 0;\n  flex: 0 0 auto;\n}\n.h-250 { height: 250px; }\n@media (min-width: 768px) {\n  .h-md-250 { height: 250px; }\n}\n.border-top { border-top: 1px solid #e5e5e5; }\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n.box-shadow { -webkit-box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n/*\n * Blog name and description\n */\n.blog-title {\n  margin-bottom: 0;\n  font-size: 2rem;\n  font-weight: 400;\n}\n.blog-description {\n  font-size: 1.1rem;\n  color: #999;\n}\n@media (min-width: 40em) {\n  .blog-title {\n    font-size: 3.5rem;\n  }\n}\n/* Pagination */\n.blog-pagination {\n  margin-bottom: 4rem;\n}\n.blog-pagination > .btn {\n  border-radius: 2rem;\n}\n/*\n * Blog posts\n */\n.blog-post {\n  margin-bottom: 4rem;\n}\n.blog-post-title {\n  margin-bottom: .25rem;\n  font-size: 2.5rem;\n}\n.blog-post-meta {\n  margin-bottom: 1.25rem;\n  color: #999;\n}\n/*\n * Footer\n */\n.blog-footer {\n  padding: 2.5rem 0;\n  color: #999;\n  text-align: center;\n  background-color: #f9f9f9;\n  border-top: .05rem solid #e5e5e5;\n}\n.blog-footer p:last-child {\n  margin-bottom: 0;\n}\n.bg-blue {\n    background-color: #164879 !important;\n    margin-right: 0;\n    margin-left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<noscript>\n  <h3 style=\"color: #673ab7; font-family: Helvetica; margin: 2rem;\">\n    Sorry, but app is not available without javascript\n  </h3>\n</noscript>\n\n<div class=\"container\">\n  <header class=\"blog-header py-3\">\n    <div class=\"row flex-nowrap justify-content-between align-items-center\">\n      <div class=\"col-4 pt-1\">\n        <a class=\"text-muted\" href=\"#\">Home</a>\n      </div>\n      <div class=\"col-4 text-center\">\n        <a class=\"blog-header-logo text-dark\" href=\"#\">DssX</a>\n      </div>\n      <div class=\"col-4 d-flex justify-content-end align-items-center\">\n        <a class=\"text-muted\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"mx-3\"><circle cx=\"10.5\" cy=\"10.5\" r=\"7.5\"></circle><line x1=\"21\" y1=\"21\" x2=\"15.8\" y2=\"15.8\"></line></svg>\n        </a>\n        <a class=\"btn btn-sm btn-outline-secondary\" href=\"#\">Sign up</a>\n      </div>\n    </div>\n  </header>\n\n  <div class=\"nav-scroller py-1 mb-2\">\n    <nav class=\"nav d-flex justify-content-between\">\n      <a class=\"p-2 text-muted\" href=\"#\">A.I.</a>\n      <a class=\"p-2 text-muted\" href=\"#\">Visualization</a>\n      <a class=\"p-2 text-muted\" href=\"#\">Analytics</a>\n      <a class=\"p-2 text-muted\" href=\"#\">Data Science</a>\n      <a class=\"p-2 text-muted\" href=\"#\">Text Ayx</a>\n      <a class=\"p-2 text-muted\" href=\"#\">Predictive Ayx</a>\n      <a class=\"p-2 text-muted\" href=\"#\">Descriptive Ayx</a>\n      <a class=\"p-2 text-muted\" href=\"#\">Cognitive Ayx</a>\n      <a class=\"p-2 text-muted\" href=\"#\">Tools</a>\n      <a class=\"p-2 text-muted\" href=\"#\">Settings</a>\n      <a class=\"p-2 text-muted\" href=\"#\">User</a>\n      <a class=\"p-2 text-muted\" href=\"#\">Help</a>\n    </nav>\n  </div>\n\n  <div class=\"jumbotron row p-3 p-md-5 text-white rounded bg-blue\">\n\n    <div class=\"col-md-8 px-0\">\n      <h1 class=\"display-4 font-italic\">Data Science for the future</h1>\n      <p class=\"lead my-3\">Inventing DSaaS - Data science as a service to find powerful and effective insights from data, with automated intelligent system driven with AI algorithms and ready to serve models.</p>\n      <p class=\"lead mb-0\"><a href=\"#\" class=\"text-white font-weight-bold\">Show me how...</a></p>\n    </div>\n    <div class=\"col-md-4 pull-right\">\n      <img src=\"assets/images/dsc.png\" width=\"300px\">\n    </div>\n  </div>\n\n  <div class=\"row mb-2\">\n    <div class=\"col-md-6\">\n      <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">A.I. for A.I.</strong>\n          <h3 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">Classification Algorithms</a>\n          </h3>\n          <div class=\"mb-1 text-muted\">Supervised Learning</div>\n          <p class=\"card-text mb-auto\">Automatically train the model to detect region of interest with provided labeled data.</p>\n          <a routerLink=\"/clsft\">Let's go..</a>\n        </div>\n        <!--<img class=\"card-img-right flex-auto d-none d-md-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Card image cap\">-->\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-success\">Analytics</strong>\n          <h3 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">Predictive Analytics</a>\n          </h3>\n          <div class=\"mb-1 text-muted\">Time Series</div>\n          <p class=\"card-text mb-auto\">Prediction of time series data using Machine Learning algorithms.  Extract information from data and using it to predict trends and behavior patterns</p>\n          <a href=\"#\">Know more..</a>\n        </div>\n        <!--<img class=\"card-img-right flex-auto d-none d-md-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Card image cap\">-->\n      </div>\n    </div>\n  </div>\n\n    <div class=\"row mb-2\">\n    <div class=\"col-md-6\">\n      <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">A.I. for A.I.</strong>\n          <h3 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">Pattern Analysis</a>\n          </h3>\n          <div class=\"mb-1 text-muted\">UnSupervised Learning</div>\n          <p class=\"card-text mb-auto\">Tries to find pattern in Unlabelled data</p>\n          <a href=\"#\">Know more..</a>\n        </div>\n        <!--<img class=\"card-img-right flex-auto d-none d-md-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Card image cap\">-->\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-success\">Analytics</strong>\n          <h3 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">Prescriptive Analytics</a>\n          </h3>\n          <div class=\"mb-1 text-muted\">Optimization</div>\n          <p class=\"card-text mb-auto\">Optimization algorithms to provide recommended decision options. </p>\n          <a href=\"#\">Know more..</a>\n        </div>\n        <!--<img class=\"card-img-right flex-auto d-none d-md-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Card image cap\">-->\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<footer class=\"blog-footer\">\n\n  <p>\n    &copy; DssX 2018 &nbsp; | &nbsp; <a href=\"#\">Back to top</a>\n  </p>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
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