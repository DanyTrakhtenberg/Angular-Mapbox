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

  /// default settings
  map: mapboxgl.Map;
  draw: MapboxDraw;
  style = "mapbox://styles/mapbox/outdoors-v9";
  lat = 37.75;
  lng = -122.41;
  message = "Hello World!";

  // data
  source: any;
  markers: any;

  // constructor(private mapService: MapService) {
  // }
  constructor() {}
  ngOnInit() {
    this.markers = [];
    this.initializeMap();
  }

  private initializeMap() {
    /// locate the user
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapboxgl.accessToken,
      container: "map", // container i  d
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
    this.notifyMap.emit(this.map);

    // this.draw = new MapboxDraw({
    //   displayControlsDefault: true,
    //   controls: {
    //     polygon: true,
    //     trash: true,
    //     lineString : true,
    //     point: true

    //   }
    // });

    // this.map.addControl(this.draw);
    this.map.on("load", event => {
      // this.draw.changeMode("draw_polygon");

    });
  }

  // flyTo(data: GeoJson) {
  //   this.map.flyTo({
  //     center: data.geometry.coordinates
  //   });
  // }
}
