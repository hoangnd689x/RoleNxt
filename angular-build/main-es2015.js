(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login *ngIf=\"!isLoggedIn\"></app-login>\r\n\r\n<app-main *ngIf=\"isLoggedIn\" [isAdmin]=\"isAdmin\"></app-main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-graph class=\"chart-container\" [view]=\"[900, 390]\" [links]=\"links\" [nodes]=\"nodes\" [autoCenter]=\"autoCenter\"\r\n  [autoZoom]=\"autoZoom\" [draggingEnabled]=\"draggingEnabled\" [panningEnabled]=\"panningEnabled\" [enableZoom]=\"zoomEnabled\"\r\n  [layoutSettings]=\"layoutSettings\" [clusters]=\"clusters\"\r\n  [layout]=\"layout\">\r\n  <ng-template #defsTemplate>\r\n    <svg:marker id=\"arrow\" viewBox=\"0 -5 10 10\" refX=\"8\" refY=\"0\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\">\r\n      <svg:path d=\"M0,-5L10,0L0,5\" class=\"arrow-head\" />\r\n    </svg:marker>\r\n  </ng-template>\r\n  <ng-template #nodeTemplate let-node>\r\n    <svg:g (click)=\"openModal(content,node.id)\">\r\n        <svg:rect [attr.width]=\"node.dimension.width\" [attr.height]=\"node.dimension.height\"\r\n          style=\"fill:rgb(255, 255, 255);stroke-width:3;stroke:rgb(0,0,0)\" />\r\n        <svg:text alignment-baseline=\"central\" [attr.x]=\"10\" [attr.y]=\"node.dimension.height / 2\">{{node.label}}\r\n        </svg:text>\r\n    </svg:g>\r\n  </ng-template>\r\n  <ng-template #linkTemplate let-link>\r\n    <svg:g class=\"edge\">\r\n      <svg:path class=\"line\" stroke-width=\"2\" marker-end=\"url(#arrow)\">\r\n      </svg:path>\r\n    </svg:g>\r\n  </ng-template>\r\n  <ng-template #clusterTemplate let-cluster>\r\n    <svg:g\r\n    >\r\n      <svg:rect\r\n        rx=\"5\"\r\n        ry=\"5\"\r\n        [attr.width]=\"cluster.dimension.width\"\r\n        [attr.height]=\"cluster.dimension.height\"\r\n        [attr.fill]=\"cluster.data.color\"\r\n      />\r\n    </svg:g>\r\n  </ng-template>\r\n</ngx-graph>\r\n\r\n<!-- JOB SPEC MODAL -->\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\" style=\"background-color: #003471;\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\" style=\"color: #ffffff\">\r\n      {{ selectedPosition.position_name }}\r\n    </h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\" style=\"color: #ffffff\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <h5 class=\"jobSpec\">Job Specification</h5>\r\n        <p class=\"roleSummary\">{{ selectedPosition.position_summary }}</p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\r\n  <div class=\"row wholeForm\">\r\n    <div class=\"col-md-6 login-form-2\">\r\n      <img\r\n        class=\"image-responsive logo\"\r\n        src=\"../assets/Kainos-logo.svg\"\r\n        alt=\"Kainos logo\"\r\n        width=\"90\"\r\n        height=\"39\"\r\n      />\r\n      <form class=\"loginForm was-validated\" [formGroup]=\"angForm\">\r\n        <h3>Login</h3>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Your Username\"\r\n            name=\"username\"\r\n            formControlName=\"username\"\r\n            #username\r\n            required\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"password\"\r\n            name=\"pwd\"\r\n            placeholder=\"Enter Password\"\r\n            formControlName=\"password\"\r\n            #password\r\n            required\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            class=\"btnSubmit subBtn\"\r\n            type=\"submit\"\r\n            value=\"Submit\"\r\n            (click)=\"onClickSubmit(username.value, password.value)\"\r\n          />\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main/main.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <main\r\n      role=\"main\"\r\n      class=\"col-sm-12 col-md-12 ml-sm-auto col-lg-12 pt-3 px-5 mainContent\"\r\n    >\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navcss\" class=\"mainHeader\">\r\n  <nav class=\"navbar flex-md-nowrap navbar-fixed-top\">\r\n    <img\r\n      class=\"image-responsive logo\"\r\n      src=\"../assets/Kainos-logo.svg\"\r\n      alt=\"Kainos logo\"\r\n      width=\"90\"\r\n      height=\"39\"\r\n    />\r\n    <h1 id=\"CLtitle\">{{ title }}</h1>\r\n\r\n    <form class=\"form-inline my-2 my-lg-0 profileInfo\">\r\n      <span class=\"navbar-text userInfo\"> \r\n        Hello, {{ username }} \r\n      </span>\r\n      <i class=\"material-icons profileIcon\">\r\n          account_circle\r\n        </i>\r\n    </form>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/position/position.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/position/position.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>position works!</p>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_position_position_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/position/position.component */ "./src/app/components/position/position.component.ts");





const routes = [
    {
        path: "",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: { capabilityTitle: "All capabilities", familyID: "0" }
    },
    {
        path: "position/:id",
        component: _components_position_position_component__WEBPACK_IMPORTED_MODULE_4__["PositionComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

// ,
//   {
//     path: "home/:username",
//     component: HomeComponent,
//     data: { capabilityTitle: "All capabilities", familyID: "0" }
//   },


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: \"Open Sans\", sans-serif, \"Arial\";\r\n}\r\n\r\n.mainContent {\r\n  margin: 7px 0px 20px 0px;\r\n  background-color: #fdfdfd;\r\n}\r\n\r\n.sidebar {\r\n  margin-top: 48px;\r\n  position: fixed;\r\n  z-index: 13;\r\n  height: 100%;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 1px 2px 1px hsla(0, 0%, 0%, 0.1);\r\n  border: 0;\r\n}\r\n\r\n.sidebarItems {\r\n  color: #333;\r\n}\r\n\r\n.sidebarItems:hover {\r\n  color: #003471;\r\n}\r\n\r\n.container {\r\n  width: 80%;\r\n  margin-top: 5rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.jobRow {\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n}\r\n\r\n.roleTableHead {\r\n  color: #ffffff;\r\n  background-color: #003471;\r\n}\r\n\r\n.roleName {\r\n  font-size: 16px;\r\n}\r\n\r\n.mainTitle {\r\n  padding: 1rem;\r\n  color: #ffffff;\r\n  background-color: #003471;\r\n}\r\n\r\n.familyTitle {\r\n  color: #333;\r\n  font-size: 30px;\r\n}\r\n\r\n.roleRow {\r\n  padding-top: 200px;\r\n}\r\n\r\n.jobSpec {\r\n  font-size: 20px;\r\n}\r\n\r\n.roleCap {\r\n  cursor: pointer;\r\n  padding-top: 0px;\r\n}\r\n\r\n.capabilityTable {\r\n  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);\r\n}\r\n\r\n.jobBand {\r\n  color: #777;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n  float: right;\r\n  text-align: right;\r\n  z-index: 12;\r\n}\r\n\r\n#logo {\r\n  max-width: 7%;\r\n  max-height: 7%;\r\n}\r\n\r\n#CLtitle {\r\n  text-align: center;\r\n  position: absolute;\r\n  color: #ffffff;\r\n  font-size: 22px;\r\n  width: 100%;\r\n  padding-right: 5%;\r\n}\r\n\r\n.mainHeader {\r\n  z-index: 10;\r\n  background-color: #003471;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);\r\n  border: 0;\r\n}\r\n\r\n.compBtn:hover {\r\n  color: #003471;\r\n}\r\n\r\n.roleNameBtn {\r\n  text-decoration: none;\r\n  color: #222;\r\n}\r\n\r\n.roleNameBtn:hover {\r\n  color: #003471;\r\n}\r\n\r\n::ng-deep .card {\r\n  border: 0;\r\n  box-shadow: 0 0 3px hsla(0, 0%, 0%, 0.2);\r\n}\r\n\r\n::ng-deep .card-header {\r\n  background-color: #ffffff;\r\n}\r\n\r\n::ng-deep .card .btn {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n::ng-deep .card .btn:hover {\r\n  color: #003471;\r\n  text-decoration: none;\r\n}\r\n\r\n::ng-deep .card-header {\r\n  padding: 0;\r\n  text-decoration: none;\r\n}\r\n\r\n::ng-deep .card-header > button {\r\n  width: 100%;\r\n  text-align: left;\r\n  padding: 20px 30px 20px;\r\n  text-decoration: none;\r\n}\r\n\r\n::ng-deep .card-header > button:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.compBtn {\r\n  z-index: 11;\r\n  text-decoration: none;\r\n  color: #777;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw4Q0FBOEM7RUFDOUMsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcmlhbFwiO1xyXG59XHJcblxyXG4ubWFpbkNvbnRlbnQge1xyXG4gIG1hcmdpbjogN3B4IDBweCAyMHB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgbWFyZ2luLXRvcDogNDhweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTM7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFySXRlbXMge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uc2lkZWJhckl0ZW1zOmhvdmVyIHtcclxuICBjb2xvcjogIzAwMzQ3MTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmpvYlJvdyB7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4ucm9sZVRhYmxlSGVhZCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzQ3MTtcclxufVxyXG5cclxuLnJvbGVOYW1lIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5tYWluVGl0bGUge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzQ3MTtcclxufVxyXG5cclxuLmZhbWlseVRpdGxlIHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5yb2xlUm93IHtcclxuICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbi5qb2JTcGVjIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5yb2xlQ2FwIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmNhcGFiaWxpdHlUYWJsZSB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IDAgaHNsYSgwLCAwJSwgMCUsIDAuMik7XHJcbn1cclxuXHJcbi5qb2JCYW5kIHtcclxuICBjb2xvcjogIzc3NztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB6LWluZGV4OiAxMjtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIG1heC13aWR0aDogNyU7XHJcbiAgbWF4LWhlaWdodDogNyU7XHJcbn1cclxuI0NMdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4ubWFpbkhlYWRlciB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzQ3MTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIGhzbGEoMCwgMCUsIDAlLCAwLjIpO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmNvbXBCdG46aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAzNDcxO1xyXG59XHJcblxyXG4ucm9sZU5hbWVCdG4ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuLnJvbGVOYW1lQnRuOmhvdmVyIHtcclxuICBjb2xvcjogIzAwMzQ3MTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJkIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCBoc2xhKDAsIDAlLCAwJSwgMC4yKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJkIC5idG4ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2FyZCAuYnRuOmhvdmVyIHtcclxuICBjb2xvcjogIzAwMzQ3MTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcmQtaGVhZGVyID4gYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJkLWhlYWRlciA+IGJ1dHRvbjpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29tcEJ0biB7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let AppComponent = class AppComponent {
    constructor(dataService, modalService) {
        this.modalService = modalService;
        this.title = "Career Lattice";
        this.roleID = -1;
        this.roleName = "";
        this.roleSummary = "";
        this.roleLink = "";
        this.bandID = -1;
        this.bandName = "";
        this.data = dataService;
    }
    ngOnInit() {
        this.isLoggedIn = true;
        this.isAdmin = true;
    }
    openModal(content, id, name, summary, link) {
        this.roleID = id;
        this.roleName = name;
        this.roleSummary = summary;
        this.roleLink = link;
        this.modalService.open(content, {
            size: "lg",
            ariaLabelledBy: "modal-basic-title"
        });
    }
    openCompModal(competencyModal, band_id, band_name) {
        this.bandID = band_id;
        this.modalService.open(competencyModal, {
            size: "lg",
            ariaLabelledBy: "modal-basic-title"
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-graph */ "./node_modules/@swimlane/ngx-graph/fesm2015/swimlane-ngx-graph.js");
/* harmony import */ var _components_position_position_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/position/position.component */ "./src/app/components/position/position.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
            _components_position_position_component__WEBPACK_IMPORTED_MODULE_12__["PositionComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_11__["NgxGraphModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/classes/data.ts":
/*!*********************************!*\
  !*** ./src/app/classes/data.ts ***!
  \*********************************/
/*! exports provided: nodes, links, clusters, positions, promotions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodes", function() { return nodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusters", function() { return clusters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positions", function() { return positions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promotions", function() { return promotions; });
const nodes = [
    {
        id: '1',
        label: 'Financial Manager',
    }, {
        id: '2',
        label: 'Brokerage Clerk'
    }, {
        id: '3',
        label: 'Stock Broker'
    }, {
        id: '4',
        label: 'Financial Advisor'
    },
    {
        id: '5',
        label: 'Financial Analyst'
    }
];
const links = [
    {
        id: 'e1',
        source: '2',
        target: '4'
    },
    {
        id: 'e2',
        source: '2',
        target: '3',
    }, {
        id: 'e3',
        source: '2',
        target: '5',
    }, {
        id: 'e4',
        source: '4',
        target: '1',
    }, {
        id: 'e5',
        source: '3',
        target: '1',
    },
    {
        id: 'e6',
        source: '5',
        target: '1',
    },
];
const clusters = [
    {
        id: 'c1',
        label: 'Cluster node',
        childNodeIds: ['3', '4', '5']
    },
    {
        id: 'c2',
        label: 'Cluster node 2',
        childNodeIds: ['1']
    },
    {
        id: 'c3',
        label: 'Cluster node 3',
        childNodeIds: ['2']
    }
];
const positions = [
    {
        position_id: '1',
        position_name: 'Financial Manager',
        position_summary: 'Financial managers are responsible for the financial health of an organization. They produce financial reports, direct investment activities, and develop strategies and plans for the long-term financial goals of their organization. Financial managers work in many places, including banks and insurance companies.'
    }, {
        position_id: '2',
        position_name: 'Brokerage clerks',
        position_summary: 'Brokerage clerks work for securities or brokerage firms. They are responsible for preparing and maintaining the records of financial transactions involving stocks, bonds, and other types of investments. Purchase-and-sale clerks match orders to buy with orders to sell and balance and verify stock trades.'
    }, {
        position_id: '3',
        position_name: 'Stock Broker',
        position_summary: 'A stockbroker is a professional who executes buy and sell orders for stocks and other securities on behalf of clients. A stockbroker may also be known as a registered'
    }, {
        position_id: '4',
        position_name: 'Financial Advisor',
        position_summary: "A financial advisor is a professional that provides expertise for clients' decisions around money matters, personal finances, and investments. Financial advisors may work as an independent agent, or may be employed by a larger financial firm. Advisors must be licensed to carry out business with clients."
    },
    {
        position_id: '5',
        position_name: 'Financial Analyst',
        position_summary: 'Financial analysts work in banks, pension funds, insurance companies, and other businesses. Financial analysts provide guidance to businesses and individuals making investment decisions. They assess the performance of stocks, bonds, and other types of investments'
    }
];
const promotions = [
    {
        promotion_id: '1',
        start_position_id: '2',
        next_position_id: '4'
    },
    {
        promotion_id: '2',
        start_position_id: '2',
        next_position_id: '3'
    },
    {
        promotion_id: '3',
        start_position_id: '2',
        next_position_id: '5'
    },
    {
        promotion_id: '4',
        start_position_id: '4',
        next_position_id: '1'
    },
    {
        promotion_id: '5',
        start_position_id: '3',
        next_position_id: '1'
    },
    {
        promotion_id: '6',
        start_position_id: '5',
        next_position_id: '1'
    },
];


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jobBandText {\r\n  padding: 0.5rem;\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  text-align: center;\r\n  z-index: -1;\r\n}\r\n\r\n.jobBand {\r\n  margin: auto;\r\n}\r\n\r\n::ng-deep .card-body {\r\n  padding: 10px 15px 0px 15px;\r\n}\r\n\r\n.roleSummary {\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n#leadName {\r\n  padding-bottom: 0.1rem;\r\n  text-align: center;\r\n}\r\n\r\n#capabilityLeadTitle{\r\n  font-weight: bold;\r\n}\r\n\r\n#leadMessage{\r\n  font-style: italic;\r\n}\r\n\r\n.leadSummary{\r\n  padding-left: 0.9rem;\r\n  font-size: 12px;\r\n\r\n}\r\n\r\n#noLeadSummary {\r\n  font-style: italic;\r\n}\r\n\r\n#capPhoto{\r\n  float: right;\r\n}\r\n\r\n#border{\r\n  display: block;\r\n  border-bottom:1pt solid black;\r\n\r\n}\r\n\r\n.roleCap {\r\n  padding: 5px 12px 5px 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsY0FBYztFQUNkLDZCQUE2Qjs7QUFFL0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpvYkJhbmRUZXh0IHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmpvYkJhbmQge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAwcHggMTVweDtcclxufVxyXG5cclxuLnJvbGVTdW1tYXJ5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuI2xlYWROYW1lIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2NhcGFiaWxpdHlMZWFkVGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNsZWFkTWVzc2FnZXtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLmxlYWRTdW1tYXJ5e1xyXG4gIHBhZGRpbmctbGVmdDogMC45cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuXHJcbiNub0xlYWRTdW1tYXJ5IHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbiNjYXBQaG90b3tcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuI2JvcmRlcntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItYm90dG9tOjFwdCBzb2xpZCBibGFjaztcclxuXHJcbn1cclxuXHJcbi5yb2xlQ2FwIHtcclxuICBwYWRkaW5nOiA1cHggMTJweCA1cHggMTJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _classes_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/data */ "./src/app/classes/data.ts");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let HomeComponent = class HomeComponent {
    constructor(dataService, modalService) {
        this.modalService = modalService;
        this.name = 'NGX-Graph Demo';
        this.clusters = _classes_data__WEBPACK_IMPORTED_MODULE_2__["clusters"];
        this.positions = _classes_data__WEBPACK_IMPORTED_MODULE_2__["positions"];
        this.promotions = _classes_data__WEBPACK_IMPORTED_MODULE_2__["promotions"];
        this.layoutSettings = {
            orientation: "BT"
        };
        this.layout = 'dagreCluster';
        // line interpolation
        this.curveType = 'Bundle';
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveLinear"];
        this.draggingEnabled = false;
        this.panningEnabled = false;
        this.zoomEnabled = false;
        this.autoZoom = true;
        this.autoCenter = true;
        this.data = dataService;
    }
    getPositions() {
        this.nodes = this.positions.map(position => {
            let newNode = {
                // id: position.position_id,
                id: position.position_id.toString(),
                label: position.position_name
            };
            return newNode;
        });
    }
    getPromotions() {
        this.links = this.promotions.map(promotion => {
            let newEdge = {
                id: 'e' + promotion.promotion_id.toString(),
                source: promotion.start_position_id.toString(),
                target: promotion.next_position_id.toString()
            };
            return newEdge;
        });
    }
    ngOnInit() {
        this.getPositions();
        this.getPromotions();
    }
    openModal(content, id) {
        this.selectedPosition = this.positions.find(function (element, index, array) {
            return (element.position_id.toString() === id.toString());
        });
        this.modalService.open(content, {
            size: "lg",
            ariaLabelledBy: "modal-basic-title"
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.login-form-2{\r\n    padding: 1.3%;\r\n    background: #003471;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.loginForm {\r\n    padding-top: 4% !important; \r\n}\r\n\r\n.wholeForm {\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.login-form-2 h3{\r\n    text-align: center;\r\n    padding-bottom: 1rem;\r\n    color: #fff;\r\n}\r\n\r\n.login-container form{\r\n    padding: 10%;\r\n}\r\n\r\n.btnSubmit\r\n{\r\n    width: 50%;\r\n    border-radius: 0.2rem;\r\n    padding: 1.5%;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.login-form-2 .btnSubmit{\r\n    font-weight: 600;\r\n    color: #fff;\r\n    background-color: #35983F;\r\n}\r\n\r\n.login-form-2 .btnSubmit:hover{\r\n    color: #ffffff;\r\n    background-color: rgb(51, 141, 60);\r\n}\r\n\r\n.login-form-2 .ForgetPwd{\r\n    color: #fff;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n\r\n.login-form-1 .ForgetPwd{\r\n    color: #0062cc;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n\r\n.subBtn {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTs7SUFFSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0tMntcclxuICAgIHBhZGRpbmc6IDEuMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAzNDcxO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAyNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLmxvZ2luRm9ybSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNCUgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi53aG9sZUZvcm0ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLTIgaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIgZm9ybXtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxufVxyXG4uYnRuU3VibWl0XHJcbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS0yIC5idG5TdWJtaXR7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU5ODNGO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS0yIC5idG5TdWJtaXQ6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTQxLCA2MCk7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLTIgLkZvcmdldFB3ZHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubG9naW4tZm9ybS0xIC5Gb3JnZXRQd2R7XHJcbiAgICBjb2xvcjogIzAwNjJjYztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zdWJCdG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _assets_saltedHashing_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/saltedHashing.js */ "./src/assets/saltedHashing.js");
/* harmony import */ var _assets_saltedHashing_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_saltedHashing_js__WEBPACK_IMPORTED_MODULE_6__);







let LoginComponent = class LoginComponent {
    constructor(fb, http, router, dataService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.dataService = dataService;
        this.title = "Angular Login Form";
        this.signInStatus = "f";
        this.data = dataService;
        this.createForm();
    }
    createForm() {
        this.angForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    getHeaders() {
        return (this.headers = {
            "Content-Type": "application/json"
        });
    }
    successfulLogin(isAdmin, username) {
        this.data.loginDetails.subscribe(value => {
            value["isAdmin"] = isAdmin;
            value["loggedIn"] = true;
            value["username"] = username;
        });
    }
    onClickSubmit(username, password) {
        let formData = new FormData();
        password = _assets_saltedHashing_js__WEBPACK_IMPORTED_MODULE_6__["saltedHash"](password);
        let params = { username: username, password: password };
        this.headers = {
            'Content-Type': 'application/json'
        };
        this.http
            .post('/api/user-details', { params: params }, this.headers)
            .subscribe(response => {
            let rsp = JSON.stringify(response);
            rsp = rsp.substring(11, 12);
            if (rsp == 'a') {
                this.successfulLogin(true, username);
            }
            else if (rsp == 'e') {
                this.successfulLogin(false, username);
            }
            else if (rsp == 'f') {
                alert('Failed');
            }
            window.location.reload();
            this.signInStatus = rsp;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let MainComponent = class MainComponent {
    constructor(dataService, modalService) {
        this.modalService = modalService;
        this.title = "Career Lattice";
        this.roleID = -1;
        this.roleName = "";
        this.roleSummary = "";
        this.roleLink = "";
        this.bandID = -1;
        this.data = dataService;
    }
    openModal(content, id, name, summary, link) {
        this.roleID = id;
        this.roleName = name;
        this.roleSummary = summary;
        this.roleLink = link;
        this.modalService.open(content, {
            size: "lg",
            ariaLabelledBy: "modal-basic-title"
        });
    }
    openCompModal(competencyModal, band_id) {
        this.bandID = band_id;
        this.modalService.open(competencyModal, {
            size: "lg",
            ariaLabelledBy: "modal-basic-title"
        });
    }
};
MainComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainComponent.prototype, "isAdmin", void 0);
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-main",
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navcss{\r\n  background-color: #003471;\r\n  padding: 1rem;\r\n  color: #ffffff;\r\n}\r\n\r\n.navbar {\r\n  height:14px;\r\n}\r\n\r\n.logo {\r\n  z-index: 10;\r\n}\r\n\r\n#CLtitle {\r\n  text-align: center;\r\n  position: absolute;\r\n  color: #ffffff;\r\n  font-size: 18px;\r\n  width: 100%;\r\n  padding-right: 5%;\r\n}\r\n\r\n.mainHeader {\r\n  z-index: 100;\r\n  background-color: #003471;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 2px 1px hsla(0, 0%, 0%, 0.1);\r\n  border: 0;\r\n}\r\n\r\n.usernameDisplay {\r\n  float: right;\r\n}\r\n\r\n.profileInfo {\r\n  z-index: 10;\r\n  text-decoration: none;\r\n}\r\n\r\n.userInfo {\r\n  padding-right: 0.5rem;\r\n  font-size: 15px;\r\n}\r\n\r\n.profileIcon {\r\n  padding-right: 1.5rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sV0FBVztFQUNYLDhDQUE4QztFQUM5QyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZjc3N7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzQ3MTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBoZWlnaHQ6MTRweDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4jQ0x0aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5tYWluSGVhZGVyIHtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzQ3MTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMXB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnVzZXJuYW1lRGlzcGxheSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvZmlsZUluZm8ge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnVzZXJJbmZvIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZmlsZUljb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let NavbarComponent = class NavbarComponent {
    constructor(route, dataservice, http) {
        this.route = route;
        this.dataservice = dataservice;
        this.http = http;
        this.title = "Career Lattice";
        this.data = dataservice;
    }
    ngOnInit() {
        this.data.loginDetails.subscribe(x => {
            this.username = x["username"];
        });
    }
    signUserOut() {
        this.http.post("/api/signout", "").subscribe(res => {
            this.resetLogInDetails();
            window.location.reload();
        });
    }
    resetLogInDetails() {
        this.data.loginDetails.subscribe(value => {
            value["isAdmin"] = false;
            value["loggedIn"] = false;
            value["username"] = null;
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/position/position.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/position/position.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/position/position.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/position/position.component.ts ***!
  \***********************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PositionComponent = class PositionComponent {
    constructor() { }
    ngOnInit() {
    }
};
PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-position',
        template: __webpack_require__(/*! raw-loader!./position.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/position/position.component.html"),
        styles: [__webpack_require__(/*! ./position.component.css */ "./src/app/components/position/position.component.css")]
    })
], PositionComponent);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.loginDetails = this.http.get("api/user-details");
        this.positions = this.http.get("api/positions");
        this.promotions = this.http.get("api/promotions");
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], DataService);



/***/ }),

/***/ "./src/assets/saltedHashing.js":
/*!*************************************!*\
  !*** ./src/assets/saltedHashing.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const hash = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js")

exports.saltedHash = function(password)
{
    var salt = "S@E1F53135E559C253assdk100101"; 
    var newPassword = password;
    newPassword+= salt;
    newPassword = hash.SHA224(newPassword);

    return new String(newPassword); 
}

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\APV1HC\Documents\Project\Plantect\Heroku2\new roku\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map