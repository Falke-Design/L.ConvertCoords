// https://github.com/topojson/topojson
import * as topojsonLib from 'topojson'

export default {
  convert(layer, percision){
    return topojsonLib.topology({layer: L.ConvertCoords.GeoJSON.convert(layer, percision)});
  },
  parse(topojson, options){
    var geoJSONLayer = L.geoJson(null, options);
    for (var i in topojson.objects) {
      var ft = topojsonLib.feature(topojson, topojson.objects[i]);
      if (ft.features){
        geoJSONLayer.addData(ft.features);
      } else {
        geoJSONLayer.addData(ft);
      }
    }
    return geoJSONLayer;
  },
}
