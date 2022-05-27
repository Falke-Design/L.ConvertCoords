import tokml from "tokml";
import toGeoJSON from "@mapbox/togeojson";

export default {
  convert(layer, percision){
    return tokml(L.ConvertCoords.GeoJSON.convert(layer,percision));
  },
  parse(kml, options){
    return L.ConvertCoords.GeoJSON.parse(toGeoJSON.kml(L.ConvertCoords._parseXML(kml)), options);
  },
}
