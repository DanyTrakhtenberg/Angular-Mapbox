import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterContentInit {
  @Input() map: mapboxgl.Map;
  constructor() { }

  ngOnInit() {
  }


  ngAfterContentInit() {
    setTimeout(() => {
      const geocoder = new MapboxGeocoder({
        accessToken: environment.mapboxgl.accessToken
      });
      document.getElementById("geocoder").appendChild(geocoder.onAdd(this.map));
    });
  }

}
