import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {ContentComponent} from './components/content/content.component';
import {NearbyComponent} from './components/nearby/nearby.component';



@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <header></header>
      <div class="col-md-8">
          <content></content>
      </div>
      <div class="col-md-4">
          <nearby></nearby>
      </div>
  </div>


          `,
          directives: [HeaderComponent,ContentComponent,NearbyComponent]
})
export class AppComponent { }
