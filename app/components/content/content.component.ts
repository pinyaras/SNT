import { Component } from '@angular/core';
//import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
  //directives:[ROUTER_DIRECTIVES]
})

export class ContentComponent {
  private courselHeader:string;
  private ListingName:string;
//  private ListingDetails = [{est:'Establishment',addr:'Establishment address', Location:'location'}];
  private services = [{title:'Restaurants', icon:'fa-cutlery'},{title:'Grocerie Stores',icon:'fa-shopping-cart'},{title:'Banks',icon:'fa-usd'},{title:'others',icon:'fa-ellipsis-h'}];
    num = 0

     Images = ["../img/carousel/img1.png",
               "https://i.ytimg.com/vi/AAXRBx_30EE/hqdefault.jpg"]

  constructor(){
    this.courselHeader = 'What’s the highest rated resturant in this area?';
    this.ListingName = 'Listing Name';
  }

  nextImg(){
       var elImg = document.getElementById("img-circle")
       elImg.style.backgroundImage = "url("+this.Images[this.num]+")"
       console.log(this.Images[this.num])
       this.num += 1
       if (this.num > this.Images.length - 1)
           this.num = 0
   }
   prevImg(){
        var elImg = document.getElementById("img-circle")
        elImg.style.backgroundImage = "url("+this.Images[this.num]+")"
        console.log(this.Images[this.num])
        this.num -= 1
        if (this.num < 0)
            this.num = 1
    }

}
