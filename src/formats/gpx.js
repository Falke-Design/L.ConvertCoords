import toGeoJSON from "@mapbox/togeojson";
import togpx from 'togpx'

export default {
  convert(layer, percision){
    return togpx(L.ConvertCoords.GeoJSON.convert(layer, percision));
  },
  parse(gpx, options){
    return L.ConvertCoords.GeoJSON.parse(toGeoJSON.gpx(L.ConvertCoords._parseXML(gpx)), options);
  },
}
