import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {ContentComponent} from './components/content/content.component';
import {NearbyComponent} from './components/nearby/nearby.component';

import {HTTP_PROVIDERS} from '@angular/http';
//import {AmenitiesService} from'./services/amenities.services';
import {ApiService} from'./services/api.service';


@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,

          directives: [HeaderComponent,ContentComponent,NearbyComponent],
          providers: [ApiService, HTTP_PROVIDERS]
})
export class AppComponent { }
