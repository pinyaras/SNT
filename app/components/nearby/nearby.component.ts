import { Component } from '@angular/core';
//import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'nearby',
  templateUrl: 'nearby.component.html',
  styleUrls:['nearby.component.css']
  //directives:[ROUTER_DIRECTIVES]
})

export class NearbyComponent {
  private header:string;
  private services = [{title:'Restaurants', icon:'fa-cutlery'},{title:'Grocerie Stores',icon:'fa-shopping-cart'},{title:'Banks',icon:'fa-usd'}];
  constructor(){
    this.header = 'Top Rated Amenities In and Around [Listing Name] ';
  }
}
