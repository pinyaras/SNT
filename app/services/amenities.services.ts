import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AmenitiesService {
  private state:string; // Github Username
  private city:string;
  constructor(private _http:Http){
    this.state = 'ks';
    this.city = 'wichita';
  }

  getApi(){
    return this._http.get('http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/'+this.state+'/'+ this.city)
      .map(res => res.json());
  }
}
