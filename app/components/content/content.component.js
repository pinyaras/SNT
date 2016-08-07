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
var ContentComponent = (function () {
    function ContentComponent() {
        //  private ListingDetails = [{est:'Establishment',addr:'Establishment address', Location:'location'}];
        this.services = [{ title: 'Restaurants', icon: 'fa-cutlery' }, { title: 'Grocerie Stores', icon: 'fa-shopping-cart' }, { title: 'Banks', icon: 'fa-usd' }, { title: 'others', icon: 'fa-ellipsis-h' }];
        this.num = 0;
        this.Images = ["../img/carousel/img1.png",
            "https://i.ytimg.com/vi/AAXRBx_30EE/hqdefault.jpg"];
        this.courselHeader = 'What’s the highest rated resturant in this area?';
        this.ListingName = 'Listing Name';
    }
    ContentComponent.prototype.nextImg = function () {
        var elImg = document.getElementById("img-circle");
        elImg.style.backgroundImage = "url(" + this.Images[this.num] + ")";
        console.log(this.Images[this.num]);
        this.num += 1;
        if (this.num > this.Images.length - 1)
            this.num = 0;
    };
    ContentComponent.prototype.prevImg = function () {
        var elImg = document.getElementById("img-circle");
        elImg.style.backgroundImage = "url(" + this.Images[this.num] + ")";
        console.log(this.Images[this.num]);
        this.num -= 1;
        if (this.num < 0)
            this.num = 1;
    };
    ContentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'content',
            templateUrl: 'content.component.html',
            styleUrls: ['content.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map