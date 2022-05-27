# Coordinates converter

## GeoJSON
Leaflet default 

```javascript
L.ConvertCoords.GeoJSON.convert(layer, percision);
L.ConvertCoords.GeoJSON.parse(geojson, options);
```

## GPX
Convert: https://github.com/tyrasd/togpx
Parse: https://github.com/mapbox/togeojson

```javascript
L.ConvertCoords.GPX.convert(layer, percision);
L.ConvertCoords.GPX.parse(gpx, options);
```

## KML
Convert: https://github.com/mapbox/tokml
Parse: https://github.com/mapbox/togeojson

```javascript
L.ConvertCoords.KML.convert(layer, percision);
L.ConvertCoords.KML.parse(kml, options);
```

## SHP
Convert: Fork of https://github.com/mapbox/shp-write
Parse: _Not supported!_

```javascript
L.ConvertCoords.SHP.convert(layer, percision);
```

## TopoJSON
Convert & parse: https://github.com/topojson/topojson

```javascript
L.ConvertCoords.TopoJSON.convert(layer, percision);
L.ConvertCoords.TopoJSON.parse(kml, options);
```

## Wellknown Text (WKT)
Convert & parse: https://github.com/mapbox/wellknown

```javascript
L.ConvertCoords.TopoJSON.convert(layer, percision);
L.ConvertCoords.TopoJSON.parse(kml, options);
```

