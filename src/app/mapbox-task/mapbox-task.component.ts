import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mapbox-task",
  templateUrl: "./mapbox-task.component.html",
  styleUrls: ["./mapbox-task.component.css"]
})
export class MapboxTaskComponent implements OnInit {
  constructor() {}
  map: mapboxgl.Map;
  ngOnInit() {}


  getMap(event) {
    setTimeout(() => {
      this.map = event;
    });
  }
}
