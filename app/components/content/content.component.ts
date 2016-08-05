import { Component } from '@angular/core';
//import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'content.component.html',
  //directives:[ROUTER_DIRECTIVES]
})

export class ContentComponent {
  private courselHeader:string;
  private ListingName:string;
//  private ListingDetails = [{est:'Establishment',addr:'Establishment address', Location:'location'}];
  private services = [{title:'Restaurants', icon:'fa-cutlery'},{title:'Grocerie Stores',icon:'fa-shopping-cart'},{title:'Banks',icon:'fa-usd'}];

  constructor(){
    this.courselHeader = 'What’s the highest rated resturant in this area?';
    this.ListingName = 'Listing Name';
  }
}
