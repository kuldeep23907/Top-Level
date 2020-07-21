# Description of the GEE script `watchNDVITamil`

The code `watchNDVITamil.js`that is stored in  this GitHub folder is meant only as illustration. This version worked in July 20, 2020 in the GEE Code Editor. For the most up-to-date code, please refer to the link (https://code.earthengine.google.com/?scriptPath=users%2Fibisa%2Fpublic%3AwatchNDVITamil)

## General presentation
This script is an instance of the "watch" script, applied to MODIS data and for 54 groups of farmers (312 farmers in total) in Tamil Nadu who are members of IBISA in June 2020. The folloowing picture shows their respective positions ![groups Tamil Nadu June 2020](https://github.com/kvutien/Top-Level/blob/master/common/images/20200720%20Tamil%20Nadu%20groups.png)

When launched, the spatial display shows 2 panes that can be resized to show more of one or of the other:
* the left pane is the RGB image of the month. It is useful to show eventual clouds that might pollute the NDVI;
* the right pane shows the groups to assess loss. Each group is represented by its center (a black dot) and a circle of 1 km radius around the black dot showing the NDVI anomaly or the NDWI anomaly. This circle is surrounded by another of 3 km radius that displays the actual value of the index (NDVI and NDWI) inside this area. ![screen display](https://github.com/kvutien/Top-Level/blob/master/common/images/20200628%20Tamil%20Nadu%20layers.jpg)
* The left panel has a specific widget that is a dropdown box to choose the group on which to center the display;
* The right panel has a specific widget that is the scale of colors of the anomaly, in addition to the other GEE widgets such as the "layers" display menu, the buttons to choose the background ("plan" or "satellite"). The "zoom" button acts only the right panel and is therefore not applicable in this split screen display.

The code of `watchNDVITamil`is composed of 3 parts:
1. initialisation of watching parameters
2. calculation of the indexes and their anomalies
3. management of the split display and the choice of a  group to center on

## Initialisation of watching parameters
The code is 
```javascript
/* watchNDVITamil,
*   URL https://code.earthengine.google.com/?scriptPath=users/ibisa/public:watchNDVITamil
*   Calculates and displays NDVI & NDWI + anomalies for many locations. MODIS data
*   Rewritten version designed to separate calculations and selection for display
*   v0.2: display split panel: Sentinel RGB on left and Anomalies on the right
*   v1.0: complete refactor, make initImg agnostic of satellite
*  -> 2020-07-03, (c) IBISA-2020, author Vu Tien Khang */
//---------------------
//  main code - Parameters
var firstRun = true;
var xGauss = [1, 1.3, 1.96, 3];  // [68%, 80%, 95%, 99.7%] chart parameters, not used here
var severity = 1, xSigma = xGauss[severity];    //  used to call function addxSigmaIndex
```
* `firstRun` is used to display the anomaly color scale only once in the right pane, at first run;
* `xGauss`and `severity`are used when charting, to set the min and max thresholds of the index and its anomaly calculated over the lifetime of the satellite. Watchers use these thresholds to assess the severity of crop losses
### Initialise dates
The next section of code initialises the date range for the study. Parameters are given in the natural way of thinking of a watcher. It takes the month to watch, the duration of the period to consider, to convert them in 3 variables in GEE internal format and units: start and end dates, range of dates.
```javascript
//  -initDates: Calculations from last day of studyMonth and count back 'rangeYear' years
var libIBISA = require ('users/ibisa/common:lib');
var studyYear = 2020; var studyMonth = 6, rangeYear = 0.085;   // <--- 1 month = 0.085 year
var stRange = libIBISA.initDates(studyYear, studyMonth, rangeYear);
var startStudyDate = stRange[0], endStudyDate = stRange[1], studyRange = stRange[2];
```
The function `initDates()` is used by many watcher tools, and therefore is in the common library. Due to the limitations of JavaScript, the 3 variables returned by this function are bundeled in a single returned array.
### Initialise centres of groups to watch
The next section of code initialises the GPS coordinates of the centres of the groups to watch.
```javascript
//  -initPoints: extract FeatureCollection of all points to watch without their names
var Tamil = require ('users/ibisa/common:GPSpts/TamilNadu');
// radius of a "assess group", depends on social habits, larger in Niger & smaller in India
var radius = Tamil.radius;
//  pts is a JSON with the names of the points and their coordinates ee.Geometry.Point
var pts = Tamil.initPoints();
//  boundList is a list with the points as ee.Geometry.Point
var boundList = ee.FeatureCollection(libIBISA.objValueList(pts));
var zoomLevel = 13;
Map.centerObject(boundList, zoomLevel);
```
The common library contains a specific library for Tamil Nadu (`GPSpts/TamilNadu`), for Niger (`GPSpts/Niger`), for Vietnam (`GPSpts/Vietnam`), for Zimbabwe (`GPSpts/Zimbawe`) etc. Each of these libraries store the radius of the area making a group. This radius is specific to each region to cover: it can be 1 km for small farmers in India or Vietnam, it can be 3-5 km for the agropastoralists in Niger. These libraries also store a version of the module `initPoints()`.

The function `initPoints()` currently hard-codes the GPS coordinates generated by the IBISA platform (the current equivalent of the RSC). In the future, it will read these GPS coordinates from a file. It returns a list of pairs `name`: `value`where `name`is used in the dropdown selector box and `value` is the centre of a group to assess, in  GEE format.
These GPS points, the values, are extracted by the library function `objValueList()` to build a list of points `boundList` that will be used to center the display and (later below) to restrict the satellite `imageCollection` to the useful images on which the indexes and their anomalies will be calculated.
### Initialise areas to consider for watching
The next section of code uses `radius` and `boundList` to calculate the circular areas that are the groups to watch.
```javascript
//  -initAreas: calculate areas to watch NDVI and NDWI. 'areas' = list of 2 display groups of radius 1km, 2 km
var areas = libIBISA.initAreas (boundList, radius);
var displayGroups = areas[0], displayGroups2 = areas[1];
```
`displayGroups` is the circle of radius `radius` that displays the anomaly, while `displayGroups2` is the circle centred on the same point of radius triple that displays the index of the month
### Initialise the visualisation parameters of the indexes and the anomalies
The next section of code calls the library module `initVis()` to set the visualisation parameters of `addLayer()`. The range of colours is in the common library. Doing so currently, we assume it is the same for Tamil Nadu, Niger, Vietnam, because the vegetation is more or less the same and because what is of interest is the anomaly. Eventually, each region can have specific ranges and in such cases the module `initVis()` will be moved to `GPSPts/Tamil` etc.
```javascript
//  -initVis: Visualisation parameters
var visus = libIBISA.initVis();
var visuIndNDVI = visus[0], visuAnoNDVI = visus[1],
      visuIndNDWI = visus[2], visuAnoNDWI =visus[3], visuRGB =visus[4];
```
here also, due to the limitations of JavaScript, the 5 variables returned by this function are bundeled in a single returned array.
