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
* `firsRun` is used to display the anomaly color scale only once in yhe right pane, at first run;
* `xGauss`and `severity`are used when charting, to set the min and max thresholds of the index and its anomaly calculated over the lifetime of the satellite. Watchers use these thresholds to assess the severity of crop losses

The next section of code initialises the date range for the study. Parameters are given in the natural way of thinking of a watcher. It takes the month to watch, the duration of the period to consider, to convert them in 3 variables in GEE internal format and units: start and end dates, range of dates.
```javascript
//  -initDates: Calculations from last day of studyMonth and count back 'rangeYear' years
var libIBISA = require ('users/ibisa/common:lib');
var studyYear = 2020; var studyMonth = 6, rangeYear = 0.085;   // <--- 1 month = 0.085 year
var stRange = libIBISA.initDates(studyYear, studyMonth, rangeYear);
var startStudyDate = stRange[0], endStudyDate = stRange[1], studyRange = stRange[2];
```
The function `initDates()` is used by many watcher tools, and therefore is in the common library. Due to the limitations of JavaScript, the 3 variables returned by this functions are bundeled in a single returned array.

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


