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
var api_service_1 = require('../../services/api.service');
require('rxjs/add/operator/map');
//import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
var ContentComponent = (function () {
    // Images = ["../img/carousel/img1.png",
    //         "https://i.ytimg.com/vi/AAXRBx_30EE/hqdefault.jpg",this.getImg]
    function ContentComponent(_apiService) {
        var _this = this;
        this._apiService = _apiService;
        this.getApi = new Array();
        this.getBuss = new Array();
        this.location = new Array();
        this.resName = new Array();
        //  private ListingDetails = [{est:'Establishment',addr:'Establishment address', Location:'location'}];
        //private services = [{title:'Restaurants', icon:'fa-cutlery', total:this.getTotal},{title:'Grocerie Stores',icon:'fa-shopping-cart'},{title:'Banks',icon:'fa-usd'},{title:'others',icon:'fa-ellipsis-h'}];
        this.num = 0;
        this._apiService.getApi()
            .subscribe(function (getApi) {
            _this.getApi = getApi.data;
            _this.getBankTotal = getApi.data.banks.total;
            _this.getGroTotal = getApi.data.grocers.total;
            _this.getResTotal = getApi.data.restaurant.total;
            _this.getBuss = getApi.data.restaurant.businesses;
            _this.getImg = _this.getBuss.snippet_image_url;
            _this.location = getApi.data.restaurant.businesses[0].location;
            _this.resName = _this.getBuss[0].name;
            var imgSlide = document.getElementById("img-circle");
            imgSlide.style.backgroundImage = "url(" + _this.getBuss[0].image_url + ")";
        });
        this.services = [{ title: 'Restaurants', icon: 'fa-cutlery', total: this.getResTotal },
            { title: 'Grocerie Stores', icon: 'fa-shopping-cart', total: this.getGroTotal },
            { title: 'Banks', icon: 'fa-usd', total: this.getBankTotal },
            { title: 'others', icon: 'fa-ellipsis-h', total: "####" }];
        this.courselHeader = 'What’s the highest rated resturant in this area?';
        this.ListingName = 'Listing Name';
    }
    ContentComponent.prototype.nextImg = function () {
        var imgSlide = document.getElementById("img-circle");
        this.num += 1;
        if (this.num > this.getBuss.length - 1)
            this.num = 0;
        this.location = this.getBuss[this.num].location;
        this.resName = this.getBuss[this.num].name;
        imgSlide.style.backgroundImage = "url(" + this.getBuss[this.num].image_url + ")";
    };
    ContentComponent.prototype.prevImg = function () {
        var imgSlide = document.getElementById("img-circle");
        //imgSlide.style.backgroundImage = "url("+this.Images[this.num]+")"
        //console.log(this.Images[this.num])
        this.num -= 1;
        if (this.num < 0)
            this.num = this.getBuss.length - 1;
        this.location = this.getBuss[this.num].location;
        this.resName = this.getBuss[this.num].name;
        imgSlide.style.backgroundImage = "url(" + this.getBuss[this.num].image_url + ")";
    };
    ContentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'content',
            templateUrl: 'content.component.html',
            styleUrls: ['content.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map