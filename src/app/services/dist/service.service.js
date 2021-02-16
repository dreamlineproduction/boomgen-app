"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServiceService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var ServiceService = /** @class */ (function () {
    function ServiceService(http, httpBackend, navCtrl) {
        this.http = http;
        this.httpBackend = httpBackend;
        this.navCtrl = navCtrl;
        this.url = "https://boomgen.crtvecode.in/api/";
        this.http = new http_1.HttpClient(this.httpBackend);
        var headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json'
        });
        this.options = {
            headers: headers
        };
    }
    ServiceService.prototype.login = function (data) {
        return this.http.post(this.url + 'login', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService.prototype.forgotPassword = function (data) {
        return this.http.post(this.url + 'forgotpassword', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService.prototype.verifyCode = function (data) {
        return this.http.post(this.url + 'verifyotp', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService.prototype.changepasswordafterverified = function (data) {
        return this.http.post(this.url + 'changepasswordafterverified', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService.prototype.updateProfile = function (data) {
        return this.http.post(this.url + 'updateprofile', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService.prototype.getCoupons = function (data) {
        return this.http.post(this.url + 'getcoupons', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService.prototype.getAds = function (data) {
        return this.http.post(this.url + 'getads', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService.prototype.getRedeemedCoupons = function (data) {
        return this.http.post(this.url + 'getredeemedcoupons', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService.prototype.getRedeemedCouponDetails = function (data) {
        return this.http.post(this.url + 'getredeemedcoupondetails', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService.prototype.getCouponDetails = function (data) {
        return this.http.post(this.url + 'getcoupondetails', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService.prototype.redeemCoupon = function (data) {
        return this.http.post(this.url + 'redeemcoupon', data, this.options)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ServiceService);
    return ServiceService;
}());
exports.ServiceService = ServiceService;
