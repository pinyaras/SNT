import { Component } from '@angular/core';

import {ApiService} from'../../services/api.service';
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
  getApi:any = new Array();
  addr:any = new Array();

  private Header:string;
  constructor(private _apiService:ApiService){
    this._apiService.getApi()
    .subscribe(
      addr => {
      this.addr=addr.data.restaurant.businesses[0].location;
    })

    this.Header = 'Top Rated Amenities In and Around';
  }

/*
  constructor(private _amenitiesSerivce:AmenitiesService){
    this._amenitiesSerivce.getApi().subcribe(getApi => {
      this.getApi = getApi;
    //  console.log(data);
    })
    this.header = 'Top Rated Amenities In and Around [Listing Name] ';
  }
*/
/*
  constructor(){
  this.header = 'Top Rated Amenities In and Around [Listing Name] ';
  }
*/

}
