import parse from "../libs/shp-write/src/parse";

export default {
  convert(layer, percision){
    var fg = L.featureGroup([layer]);
    var geojson = L.ConvertCoords.GeoJSON.convert(fg,percision);
    return parse(geojson);
  },
  // parse(geojson, options){},
}
