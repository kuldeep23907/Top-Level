# Description of the GEE script `pt2watchSelector`
The code `pt2watchSelector.js` that is stored in this GitHub folder is meant only as illustration. This version worked in July 20, 2020 in the GEE Code Editor. For the most up-to-date code, please refer to the link (https://code.earthengine.google.com/?scriptPath=users%2Fibisa%2Fpublic%3Apt2watchSelector)

## General
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
