import { Component } from '@angular/core';
import {AmenitiesService} from'../../services/amenities.services';
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
  user:any = new Array();
  repos:any= new Array();
  private header:string;

  constructor(private _apiService:ApiService){
    this._apiService.getUser().subscribe(user => {
      this.user=user;
    })

    this.header = 'Top Rated Amenities In and Around ';

    this._apiService.getRepos().subscribe(repos => {
      this.repos= repos;
      })
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
