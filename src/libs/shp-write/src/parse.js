var write = require('./write'),
    geojson = require('./geojson'),
    prj = require('./prj'),
    JSZip = require('jszip');

module.exports = function(gj) {
    var result = {};
    [geojson.point(gj), geojson.line(gj), geojson.polygon(gj)]
      .forEach(function (l) {
        if (l.geometries.length && l.geometries[0].length) {
          write(
            // field definitions
            l.properties,
            // geometry type
            l.type,
            // geometries
            l.geometries,
            function(data){
              result = data;
            });
        }
      });

    return result;
};
