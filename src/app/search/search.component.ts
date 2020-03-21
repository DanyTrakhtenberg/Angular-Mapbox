import { Component, OnInit, Input } from '@angular/core';
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() map: mapboxgl.Map;
  constructor() { }

  ngOnInit() {
  }


  ngAfterContentInit() {
    setTimeout(() => {
      var geocoder = new MapboxGeocoder({
        accessToken: environment.mapboxgl.accessToken
      });
      document.getElementById("geocoder").appendChild(geocoder.onAdd(this.map));
    });
  }

}
