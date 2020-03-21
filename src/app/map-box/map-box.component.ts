import { environment } from "./../../environments/environment";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as mapboxgl from "mapbox-gl";
import { MapService } from "../map.service";
import { GeoJson, FeatureCollection } from "../map";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

@Component({
  selector: "app-map-box",
  templateUrl: "./map-box.component.html",
  styleUrls: ["./map-box.component.css"]
})
export class MapBoxComponent implements OnInit {
  @Output() notifyMap: EventEmitter<mapboxgl.Map> = new EventEmitter();

  /// default settings
  map: mapboxgl.Map;
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
    // this.map.addControl(
    //   new MapboxGeocoder({
    //     accessToken: environment.mapboxgl.accessToken
    //   })
    // );
    // var geocoder = new MapboxGeocoder({
    //   accessToken: environment.mapboxgl.accessToken
    // });

    // document.getElementById("geocoder").appendChild(geocoder.onAdd(this.map));
    /// Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());

    //Add realtime firebase data on map load
    this.map.on("load", event => {});

    //   /// get source
    //  // this.source = this.map.getSource('firebase')

    //   /// subscribe to realtime database and set data source
    //   // this.markers.subscribe(markers => {
    //   //     let data = new FeatureCollection(markers)
    //   //     this.source.setData(data)
    //   // })

    //   /// create map layers with realtime data
    //   this.map.addLayer({
    //     id: 'firebase',
    //     source: 'firebase',
    //     type: 'symbol',
    //     layout: {
    //       'text-field': '{message}',
    //       'text-size': 24,
    //       'text-transform': 'uppercase',
    //       'icon-image': 'rocket-15',
    //       'text-offset': [0, 1.5]
    //     },
    //     paint: {
    //       'text-color': '#f16624',
    //       'text-halo-color': '#fff',
    //       'text-halo-width': 2
    //     }
    //   })

    // })
  }

  /// Helpers

  // removeMarker(marker) {
  //   this.mapService.removeMarker(marker.$key)
  // }

  // flyTo(data: GeoJson) {
  //   this.map.flyTo({
  //     center: data.geometry.coordinates
  //   });
  // }
}
