import { GeoJson } from "src/app/map";
import { Feature } from "geojson";

export const DATA: { [id: string]: Feature } = {
  dfc6be02d206e602dc6da93f3ecb7932: {
    id: "dfc6be02d206e602dc6da93f3ecb7932",
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [-74.55836486816477, 40.38133109989138],
      type: "Point"
    }
  },
  "2fb7545c1d87dd4788983d6d31c642dc": {
    type: "Feature",
    id: "2fb7545c1d87dd4788983d6d31c642dc",
    properties: {},
    geometry: {
      coordinates: [
        [
          [-74.47596740722702, 40.18857314047767],
          [-74.3180389404305, 40.004733844675485],
          [-74.10517883300881, 40.23157223148294],
          [-74.47596740722702, 40.18857314047767]
        ]
      ],
      type: "Polygon"
    }
  },
  "45ba3feafc1e1389130564934fd206c2": {
    id: "45ba3feafc1e1389130564934fd206c2",
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [
        [-74.58171081543045, 40.40434144933704],
        [-74.46223449707072, 40.11509702307532]
      ],
      type: "LineString"
    }
  },
  "275750a9d525ce80be7e5a04030b4a8a": {
    id: "275750a9d525ce80be7e5a04030b4a8a",
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [-74.46772766113325, 40.40747861503982],
      type: "Point"
    }
  }
};
