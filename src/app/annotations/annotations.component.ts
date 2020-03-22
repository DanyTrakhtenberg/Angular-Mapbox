import { GeoJson, FeatureCollection } from "./../map";
import { Component, OnInit, Input } from "@angular/core";
import * as MapboxDraw from "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw";
import * as mapboxgl from "mapbox-gl";
import { DATA } from "src/assets/Data";
import { Feature } from "geojson";
import * as leafset from "leaflet";
import * as turf from "@turf/turf";

@Component({
  selector: "app-annotations",
  templateUrl: "./annotations.component.html",
  styleUrls: ["./annotations.component.css"]
})
export class AnnotationsComponent implements OnInit {
  @Input() map: mapboxgl.Map;
  draw: MapboxDraw;
  annotations: { [id: string]: Feature };
  selectedShape: string;
  constructor() {
    this.annotations = DATA;
  }

  ngOnInit() {}
  ngAfterContentInit() {
    setTimeout(() => {
      this.draw = new MapboxDraw({
        displayControlsDefault: true,
        controls: {
          polygon: true,
          trash: true,
          lineString: true,
          point: true
        }
      });

      this.map.on("draw.create", e => {
        const feature = e.features[0];
        this.annotations[feature.id] = feature;
      });
      this.map.addControl(this.draw);
      // this.map.on('draw.create', function (e) {

      //   console.log(e.features);
      // });
    });
  }

  moveToFeature(currentFeature: Feature) {
    if (currentFeature.geometry.type === "Point") {
      this.flyToPoint(currentFeature);
    } else if (currentFeature.geometry.type === "LineString") {
      // Geographic coordinates of the LineString
      var coordinates = currentFeature.geometry.coordinates as any;
      var bounds = coordinates.reduce(function(bounds, coord) {
        return bounds.extend(coord as any);
      }, new mapboxgl.LngLatBounds(
        coordinates[0] as any,
        coordinates[0] as any
      ));
      this.map.fitBounds(bounds, {
        padding: 20
      });
    } else {
      let cFeature = currentFeature as any;
      var bbox = turf.bbox(cFeature);
      this.map.fitBounds(bbox as any, {
        padding: 20
      });
    }
    this.selectedShape = currentFeature.id as string;
  }

  flyToLineString(currentFeature: Feature) {}

  flyToPoint(currentFeature) {
    this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }

  chooseShape(shapeToDraw: string) {
    this.draw.changeMode(shapeToDraw);
  }
}
