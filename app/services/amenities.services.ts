import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AmenitiesService {
  private state; // Github Username
  private city;
  constructor(private _http:Http){
    this.state = 'kansas';
    this.city = 'wichita';
  }

  getApi(){
    return this._http.get('http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/'+this.state+ this.city)
      .map(res => res.json());
  }
}
