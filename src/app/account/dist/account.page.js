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
exports.AccountPage = void 0;
var core_1 = require("@angular/core");
var AccountPage = /** @class */ (function () {
    function AccountPage(router, navCtrl, server, toastController, loadingController) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.fname = localStorage.getItem("user_firstname");
        this.lname = localStorage.getItem("user_lastname");
        this.pnumber = localStorage.getItem("user_phone");
        this.aline1 = localStorage.getItem("user_address1");
        this.aline2 = localStorage.getItem("user_address2");
        this.state = localStorage.getItem("state");
        this.zip = localStorage.getItem("zip");
        this.uid = localStorage.getItem("user_id");
        this.email = localStorage.getItem("user_email");
        var uid = localStorage.getItem('user_id');
        if (uid == null || uid == "") {
            this.navCtrl.navigateForward('login');
        }
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage.prototype.oniconClick = function () {
        this.router.navigate(['/account']);
    };
    AccountPage.prototype.onbackClick = function () {
        console.log("click");
        this.navCtrl.navigateForward('/available');
    };
    AccountPage.prototype.onlogoutClick = function () {
        localStorage.clear();
        this.navCtrl.navigateForward('/login');
    };
    AccountPage.prototype.onSubmitClick = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var param, loading_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            email: this.email,
                            userid: this.uid,
                            firstname: data.fname,
                            lastname: data.lname,
                            phone: data.pnumber,
                            address1: data.aline1,
                            address2: data.aline2,
                            state: data.state,
                            zip: data.zip
                        };
                        console.log("data", param);
                        if (!(this.fname == undefined || this.lname == undefined || this.pnumber == undefined || this.aline1 == undefined || this.aline2 == undefined || this.state == undefined || this.zip == undefined || this.fname == "" || this.lname == "" || this.pnumber == "" || this.aline1 == "" || this.aline2 == "" || this.state == "" || this.zip == "")) return [3 /*break*/, 1];
                        this.presentToast("Please enter all details");
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 2:
                        loading_1 = _a.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 3:
                        _a.sent();
                        this.server.updateProfile(param).subscribe(function (response) {
                            console.log("response", response);
                            if (response.error == undefined) {
                                localStorage.setItem('user_firstname', response.firstname);
                                localStorage.setItem('user_lastname', response.lastname);
                                localStorage.setItem('user_phone', response.phonenumber);
                                localStorage.setItem('user_address1', response.address1);
                                localStorage.setItem('user_address2', response.address2);
                                localStorage.setItem('state', response.state);
                                localStorage.setItem('zip', response.zip);
                                _this.presentToast("Updated Successfully");
                                loading_1.dismiss();
                            }
                            else {
                                _this.presentToast(response.error);
                                loading_1.dismiss();
                            }
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.presentToast = function (txt) {
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
    AccountPage = __decorate([
        core_1.Component({
            selector: 'app-account',
            templateUrl: './account.page.html',
            styleUrls: ['./account.page.scss']
        })
    ], AccountPage);
    return AccountPage;
}());
exports.AccountPage = AccountPage;
