import { DATA } from "./../assets/Data";
import { Feature } from "geojson";

export interface AppState {
  annotations: { [id: string]: Feature };
}
