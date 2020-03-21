import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  AfterContentInit
} from "@angular/core";
import * as mapboxgl from "mapbox-gl";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"]
})
export class SideBarComponent implements OnInit, AfterContentInit {
  @Input() map: mapboxgl.Map;
  constructor() {}

  ngAfterContentInit() {
    // setTimeout(() => {
    //   var geocoder = new MapboxGeocoder({
    //     accessToken: environment.mapboxgl.accessToken
    //   });
    //   document.getElementById("geocoder").appendChild(geocoder.onAdd(this.map));
    // });
  }
  ngOnInit() {}
}
