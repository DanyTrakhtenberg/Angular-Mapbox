import { Component } from "@angular/core";
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "mapbox-project-app";
  map: mapboxgl.Map;

  ngAfterContentInit() {


  };



  getMap(event) {
    setTimeout(() => {
      this.map = event;
  });

  }
}
