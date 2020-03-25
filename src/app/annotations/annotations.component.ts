import { Component, OnInit, Input } from "@angular/core";
import * as MapboxDraw from "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw";
import * as mapboxgl from "mapbox-gl";
import { DATA } from "src/assets/Data";
import { Feature } from "geojson";
import * as turf from "@turf/turf";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";

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
  constructor(private store: Store<AppState>) {
    this.store
      .select(state => state.annotations)
      .subscribe(e => {
        this.annotations = e;
      });
  }
  ngOnInit() {}
  ngAfterContentInit() {
    setTimeout(() => {
      this.draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          trash: true
        }
      });
      this.map.on("load", () => {
        for (const key in this.annotations) {
          if (this.annotations.hasOwnProperty(key)) {
            const element = this.annotations[key];
            this.draw.add(element);
          }
        }
      });
      this.map.on("draw.create", e => {
        const feature = e.features[0];
        // this.annotations[feature.id] = feature;
        this.store.dispatch({
          type: "ADD_FEATURE",
          payload: feature
        });
      });
      this.map.on("draw.selectionchange", e => {
        if (e.features.length !== 0) {
          this.selectedShape = e.features[0].id;
        }
      });
      this.map.on("draw.delete", e => {
        for (const feature of e.features) {
          this.removeShape(feature.id);
        }
      });

      this.map.addControl(this.draw);
    });
  }
  removeShape(id: string) {
    this.store.dispatch({
      type: "REMOVE_FEATURE",
      payload: id
    });
    this.draw.delete(id);
  }

  moveToFeature(currentFeature: Feature) {
    if (currentFeature.geometry.type === "Point") {
      this.flyToPoint(currentFeature);
    } else if (currentFeature.geometry.type === "LineString") {
      let coordinates = currentFeature.geometry.coordinates as any;
      let bounds = coordinates.reduce(function(bounds, coord) {
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

  flyToPoint(currentFeature) {
    this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 20
    });
  }

  chooseShape(shapeToDraw: string) {
    this.draw.changeMode(shapeToDraw);
  }
}
