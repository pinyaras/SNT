import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private username:string; // Github Username
  private state:string; // Github Username
  private city:string;
  constructor(private _http:Http){
    this.username = 'nomadsix';
    this.state = 'ks';
    this.city = 'wichita';
  }


  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos')
      .map(res => res.json());
  }

  getUser(){
    return this._http.get('http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/'+this.state+'/'+ this.city)
      .map(res => res.json());
  }

}
