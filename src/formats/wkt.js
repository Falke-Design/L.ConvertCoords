import wellknown from "wellknown";

export default {
  convert(layer, percision){
    return wellknown.stringify(L.ConvertCoords.GeoJSON.convert(layer,percision));
  },
  parse(wkt, options){
    return L.ConvertCoords.GeoJSON.parse(wellknown.parse(wkt), options);
  },
}
