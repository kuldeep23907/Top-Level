exports.pt2watchSelector = function pt2watchSelector(mapToChange, boxPosition, pts, selection, zoomLevel
    , firstRun, visuAnoNDVI) {
/* users/ibisa/watchLib:pt2watchSelector
*  Present a dropdown menu to choose a point to display for watch
*  @param {ui.Map}  mapToChange: Map on  which to present the dropdown menu
*  @param {CSS style} boxPosition: for example 'top-left'
*  @param {Object} pts: JSON key-value pairs of points
*  @param {ee.Geometry.Point} selection: key of point selected by default
*/
  var watchLib = require ('users/ibisa/common:libs/watchLib');
  var libIBISA = require ('users/ibisa/common:lib');
  var label = ui.Label('IBISA: Choose a group to assess');
  var dropDown = ui.Select({items: libIBISA.objKeyList(pts), 
        onChange: watchLib.updateMap(mapToChange, pts, zoomLevel
            , firstRun, visuAnoNDVI)}); 
  dropDown.setValue(libIBISA.objKey(pts, selection), true);
  var controlPanel =
      ui.Panel({widgets: [label, dropDown], style: {position: boxPosition}});
  mapToChange.add(controlPanel);
} // end of function pt2watchSelector
