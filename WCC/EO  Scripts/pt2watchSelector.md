# The GEE scripts that manage the dropdown selector `pt2watchSelector` and `updateMap`
A dropdown menu allows the user to select which group centre will be displayed in the right panel, with the indexes and their anomalies. This dropdown menu is displayed in the left  pane by `pt2watchSelector` and everytime  a selection is made, the action is  handled  by the callback function `updateMap`.

## Description of the GEE script `pt2watchSelector`
The code `pt2watchSelector.js` that is stored in this GitHub folder is meant only as illustration. This version worked in July 20, 2020 in the GEE Code Editor. For the most up-to-date code, please refer to the link (https://code.earthengine.google.com/?scriptPath=users%2Fibisa%2Fpublic%3Apt2watchSelector)

This script displays the dropdown box. The choice of the user is sent to a callback `updateMap()`. The large part of the calling arguments are for this callback.

The bulk of the script is made of comments and of library declarations. The last 2 instructions are the important ones. They declare that the `controlPanel`is composed of 2 widgets and ask the left pane (`mapToChange`, given as call argument) to add it to the display.
```javascript
  var controlPanel =
      ui.Panel({widgets: [label, dropDown], style: {position: boxPosition}});
  mapToChange.add(controlPanel);
```
The widget `label` is a straightforward prompt.

The widget `dropDown` is given a list of keys to populate the menu of the dropdown, and a callback `updateMap()` that is executed everytime the user makes a selection (event `onChange`). The widget is set to default values.
```javascript
  var label = ui.Label('IBISA: Choose a group to assess');
  var dropDown = ui.Select({items: libIBISA.objKeyList(pts), 
        onChange: watchLib.updateMap(mapToChange, pts, zoomLevel
            , firstRun, visuAnoNDVI)}); 
  dropDown.setValue(libIBISA.objKey(pts, selection), true);
```
## Description of the GEE script `updateMap`
The code `updateMap.js` that is stored in this GitHub folder is meant only as illustration. This version worked in July 20, 2020 in the GEE Code Editor. For the most up-to-date code, please refer to the link (https://code.earthengine.google.com/?scriptPath=users%2Fibisa%2Fpublic%3AupdateMap)

This script is a callback that is invoked everytime the user makes a choice in the dropdown box. Its design makes use of a well-known programming trick in GEE to add additional variables to the scope of a function other than the unique argument of the standard call to this function. The standard call to this callback carries only one argument (`selection`). To accomplish its task, it needs the additional variables `mapToChange`, `pts`, `zoomLevel`, `firstRun`, `visuAnoNDVI`. The syntax of the extended function that satisfies this requirement is as follows:
```javascript
function updateMap(mapToChange, pts, zoomLevel, firstRun, visuAnoNDVI){
  return function (selection) {
    // actual tasks carried out here
  };
}; // end of function updateMap
```
We observe that the outer function serves only as a carrier of the calling arguments in its scope. It returns an anonymous function that does the actual job. We will meet again this programming trick when mapping functions that need more than one argument on `ImageCollections` and on arrays, for example the functions `addNDVI`, `addNDWI`, `subtractIndexMean`etc.

As far as the actual tasks of `updateMap`, they are:
1. center the display on the point selected in the dropdown box: `mapToChange.centerObject(pts[selection], zoomLevel);`
2. if it's the first run, call the libary function `overlayLegend()` to display the  scale of colours of the anomaly
3. add a black dot on both panes (`mapToChange`and `Map`) at the location of the point, associated with a label that is the name of the point, the key of  `pts` the array of pairs `key`:`value`
```javascript
  mapToChange.addLayer(pts[selection], {}, selection.slice(0,5));
  Map.addLayer(ee.FeatureCollection(pts[selection]), {}, selection.slice(0,5));
```
