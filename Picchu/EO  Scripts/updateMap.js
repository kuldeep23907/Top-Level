exports.updateMap = function updateMap(mapToChange, pts, zoomLevel
    , firstRun, visuAnoNDVI){
/* users/ibisa/watchLib:updateMap*/
//-- callback function extended: the outer call holds the scope of arguments
//    to serve the real callback that is the anonymous function
  return function (selection) {
    mapToChange.centerObject(pts[selection], zoomLevel);
    // var pt2watch = pts[selection];
    var libIBISA = require ('users/ibisa/common:lib');
    if(firstRun){
      var legendTitleText = 'Anomaly scale';
    // overlay the scale of the NDVI anomaly
      libIBISA.legendOverlay (legendTitleText, visuAnoNDVI);
      firstRun = false;
    }
  //Display individually the center dot in base map
  mapToChange.addLayer(pts[selection], {}, selection.slice(0,5));
  Map.addLayer(ee.FeatureCollection(pts[selection]), {}, selection.slice(0,5));
  };
}; // end of function updateMap
