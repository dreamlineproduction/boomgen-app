"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CouponPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var coupon_routing_module_1 = require("./coupon-routing.module");
var coupon_page_1 = require("./coupon.page");
var CouponPageModule = /** @class */ (function () {
    function CouponPageModule() {
    }
    CouponPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                coupon_routing_module_1.CouponPageRoutingModule
            ],
            declarations: [coupon_page_1.CouponPage]
        })
    ], CouponPageModule);
    return CouponPageModule;
}());
exports.CouponPageModule = CouponPageModule;
