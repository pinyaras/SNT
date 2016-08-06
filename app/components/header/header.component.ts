import { Component } from '@angular/core';
import {AmenitiesService} from'../../services/amenities.services';
import 'rxjs/add/operator/map';

//import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
  //directives:[ROUTER_DIRECTIVES]
})

export class HeaderComponent {
//  getApi[];
  private header:string;

/*
  constructor(private _amenitiesSerivce:AmenitiesService){
    this._getapiService.getApi().subcribe(getApi => {
      this.getApi = getApi;
    })
    this.header = 'Top Rated Amenities In and Around [Listing Name] ';
  }
*/
  constructor(){
  this.header = 'Top Rated Amenities In and Around [Listing Name] ';
  }
}
