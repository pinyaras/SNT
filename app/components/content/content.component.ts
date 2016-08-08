import { Component } from '@angular/core';
import {ApiService} from'../../services/api.service';
import 'rxjs/add/operator/map';
//import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
  //directives:[ROUTER_DIRECTIVES]
})

export class ContentComponent {
  getApi:any = new Array();
  getBuss:any = new Array();
  location:any = new Array();
  resName:any = new Array();
  private courselHeader:string;
  private ListingName:string;
  private getResTotal:any;
  private getGroTotal:any;
  private getBankTotal:any;
  private getImg:string;
  //private resName;
  services;
//  private ListingDetails = [{est:'Establishment',addr:'Establishment address', Location:'location'}];
  //private services = [{title:'Restaurants', icon:'fa-cutlery', total:this.getTotal},{title:'Grocerie Stores',icon:'fa-shopping-cart'},{title:'Banks',icon:'fa-usd'},{title:'others',icon:'fa-ellipsis-h'}];
    num = 0

    // Images = ["../img/carousel/img1.png",
      //         "https://i.ytimg.com/vi/AAXRBx_30EE/hqdefault.jpg",this.getImg]




    constructor(private _apiService:ApiService){
      this._apiService.getApi()
      .subscribe(
        getApi => {
        this.getApi=getApi.data;
        this.getBankTotal=getApi.data.banks.total;
        this.getGroTotal=getApi.data.grocers.total;
        this.getResTotal=getApi.data.restaurant.total;
        this.getBuss=getApi.data.restaurant.businesses;
        this.getImg=this.getBuss.snippet_image_url;
        this.location= getApi.data.restaurant.businesses[0].location
        this.resName = this.getBuss[0].name;
        var imgSlide = document.getElementById("img-circle")
        imgSlide.style.backgroundImage = "url("+this.getBuss[0].image_url+")"


      })
      this.services = [{title:'Restaurants', icon:'fa-cutlery', total: this.getResTotal},
                       {title:'Grocerie Stores',icon:'fa-shopping-cart', total: this.getGroTotal},
                       {title:'Banks',icon:'fa-usd',total: this.getBankTotal},
                       {title:'others',icon:'fa-ellipsis-h', total: "####"}];
      this.courselHeader = 'What’s the highest rated resturant in this area?';
      this.ListingName = 'Listing Name';
    }







  nextImg(){
       var imgSlide = document.getElementById("img-circle")

       this.num += 1
        if (this.num > this.getBuss.length - 1)
           this.num = 0
        this.location = this.getBuss[this.num].location
        this.resName = this.getBuss[this.num].name
        imgSlide.style.backgroundImage = "url("+this.getBuss[this.num].image_url+")"

   }
   prevImg(){
        var imgSlide = document.getElementById("img-circle")
      //imgSlide.style.backgroundImage = "url("+this.Images[this.num]+")"
        //console.log(this.Images[this.num])
        this.num -= 1
        if (this.num < 0)
            this.num = this.getBuss.length - 1
          this.location = this.getBuss[this.num].location
          this.resName = this.getBuss[this.num].name
          imgSlide.style.backgroundImage = "url("+this.getBuss[this.num].image_url+")"

        }

}
