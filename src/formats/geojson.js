export default {
  convert(layer, percision){
    return layer.toGeoJSON(percision);
  },
  parse(geojson, options){
    return L.geoJson(geojson, options);
  },
}
