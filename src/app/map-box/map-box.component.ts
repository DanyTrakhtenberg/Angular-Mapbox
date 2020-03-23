import { environment } from "./../../environments/environment";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as mapboxgl from "mapbox-gl";
//import * as MapboxDraw from "@mapbox/mapbox-gl-draw";
 import * as MapboxDraw from "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw";



@Component({
  selector: "app-map-box",
  templateUrl: "./map-box.component.html",
  styleUrls: ["./map-box.component.css"]
})
export class MapBoxComponent implements OnInit {
  @Output() notifyMap: EventEmitter<mapboxgl.Map> = new EventEmitter();
  map: mapboxgl.Map;
  constructor() {}
  ngOnInit() {
    this.initializeMap();
  }
  private initializeMap() {
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapboxgl.accessToken,
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9
    });
    this.notifyMap.emit(this.map);

  }

}
