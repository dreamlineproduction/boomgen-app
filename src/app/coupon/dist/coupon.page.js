"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CouponPage = void 0;
var core_1 = require("@angular/core");
var CouponPage = /** @class */ (function () {
    function CouponPage(router, route, navCtrl, server, toastController, loadingController, screenshot, datePipe) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.screenshot = screenshot;
        this.datePipe = datePipe;
        this.loaded = false;
        this.screenshotBtn = true;
        this.redeemed = false;
        console.log("yes");
        var uid = localStorage.getItem('user_id');
        if (uid == null || uid == "") {
            this.navCtrl.navigateForward('login');
        }
        this.route.queryParams.subscribe(function (data) {
            console.log(data['redeemed']);
            if (data && data.id) {
                if (data['redeemed'] == "true") {
                    _this.redeemed = true;
                    _this.id = data.id;
                    _this.getRedeemedCouponDetails(_this.id);
                }
                else {
                    _this.id = data.id;
                    _this.getCouponDetails(_this.id);
                }
            }
            else {
                _this.navCtrl.back();
            }
        });
    }
    CouponPage.prototype.ngOnInit = function () {
    };
    CouponPage.prototype.screenShot = function () {
        var _this = this;
        this.screenshotBtn = false;
        this.screenshot.save('jpg', 80, this.title + '.jpg').then(function () {
            _this.screenshotBtn = true;
            _this.presentToast("Screenshot saved");
        });
    };
    CouponPage.prototype.oniconClick = function () {
        this.router.navigate(['/account']);
    };
    CouponPage.prototype.onbackClick = function () {
        if (this.redeemed) {
            this.navCtrl.navigateForward('/redeemedcoupons');
        }
        else {
            this.navCtrl.navigateForward('/available');
        }
    };
    CouponPage.prototype.getCouponDetails = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, param;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        param = {
                            id: id
                        };
                        this.server.getCouponDetails(param).subscribe(function (response) {
                            if (response.error == undefined) {
                                _this.coupon = response;
                                console.log("coupon details", _this.coupon);
                                _this.title = _this.coupon.title;
                                _this.loaded = true;
                                loading.dismiss();
                            }
                            else {
                                _this.presentToast("Something went wrong");
                                loading.dismiss();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CouponPage.prototype.getRedeemedCouponDetails = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, param;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        param = {
                            id: id
                        };
                        this.server.getRedeemedCouponDetails(param).subscribe(function (response) {
                            if (response.error == undefined) {
                                _this.coupon = response;
                                console.log("coupon details", _this.coupon);
                                var date = _this.datePipe.transform(_this.coupon.purchased, 'dd/MM/yyyy');
                                _this.coupon.purchased = date;
                                console.log("coupon details", _this.coupon);
                                _this.title = _this.coupon.title;
                                _this.loaded = true;
                                loading.dismiss();
                            }
                            else {
                                _this.presentToast("Something went wrong");
                                loading.dismiss();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CouponPage.prototype.presentToast = function (txt) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: txt,
                            duration: 3000,
                            position: 'top',
                            mode: 'ios',
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CouponPage = __decorate([
        core_1.Component({
            selector: 'app-coupon',
            templateUrl: './coupon.page.html',
            styleUrls: ['./coupon.page.scss']
        })
    ], CouponPage);
    return CouponPage;
}());
exports.CouponPage = CouponPage;
