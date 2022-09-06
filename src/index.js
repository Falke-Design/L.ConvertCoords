import GeoJSON from './formats/geojson';
import GPX from './formats/gpx';
import KML from './formats/kml';
import SHP from './formats/shp';
import TopoJSON from './formats/topojson';
import WKT from './formats/wkt';


L.ConvertCoords = {
  GeoJSON, // done
  GPX, // ~
  KML, // done
  SHP,
  TopoJSON, // done
  WKT, // done

  _parseXML(str){
  	if(str instanceof XMLDocument ){
  		return str;
	}
    return (new DOMParser()).parseFromString(str, 'text/xml');
  }
};

