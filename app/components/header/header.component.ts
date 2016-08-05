import { Component } from '@angular/core';
//import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html',
  //directives:[ROUTER_DIRECTIVES]
})

export class HeaderComponent {
  private header:string;

  constructor(){
    this.header = 'Top Rated Amenities In and Around [Listing Name] ';
  }
}
