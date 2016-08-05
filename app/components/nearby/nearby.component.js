"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
var NearbyComponent = (function () {
    function NearbyComponent() {
        this.services = [{ title: 'Restaurants', icon: 'fa-cutlery' }, { title: 'Grocerie Stores', icon: 'fa-shopping-cart' }, { title: 'Banks', icon: 'fa-usd' }];
        this.header = 'Top Rated Amenities In and Around [Listing Name] ';
    }
    NearbyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nearby',
            templateUrl: 'nearby.component.html',
            styles: ["\n        .nearby {\n\n            background-image: url('img/nearby/BG.png');\n            width: 180px;\n            height: 180px;\n          }\n          "]
        }), 
        __metadata('design:paramtypes', [])
    ], NearbyComponent);
    return NearbyComponent;
}());
exports.NearbyComponent = NearbyComponent;
//# sourceMappingURL=nearby.component.js.map