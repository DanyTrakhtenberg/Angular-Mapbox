import { Injectable } from '@angular/core';
import { GeoJson } from './map';
import { Observable } from 'rxjs';

@Injectable()
export class MapService {

  // constructor(private db: AngularFireDatabase) {
  //  // mapboxgl.accessToken = environment.mapbox.accessToken
  // }

  constructor() {
    // mapboxgl.accessToken = environment.mapbox.accessToken
   }
  getMarkers(): Observable<any> {
    return undefined;
  }

  createMarker(data: GeoJson) {
    // return this.db.list('/markers')
    //               .push(data)
  }

  removeMarker($key: string) {
    // return this.db.object('/markers/' + $key).remove()
   // return this.db.object('/markers/' + $key).remove()

  }

}
