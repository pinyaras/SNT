import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private state:string; // State
  private city:string; //city
  private apiUrl:string ; //Url of API
  // Created a constructor for http
  constructor(private _http:Http){

    this.state = 'ks';
    this.city = 'wichita';
    this.apiUrl='http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/';
  }

//Retreive an api object and save in getApi()
  getApi(){
    return this._http.get(this.apiUrl+this.state+'/'+ this.city)
      .map(res => res.json());
  }

}
