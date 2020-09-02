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

//  -initDates: Calculations from last day of studyMonth and count back 'rangeYear' years
var libIBISA = require ('users/ibisa/common:lib');
var studyYear = 2020; var studyMonth = 6, rangeYear = 0.085;   // <--- 1 month = 0.08 year
var stRange = libIBISA.initDates(studyYear, studyMonth, rangeYear);
var startStudyDate = stRange[0], endStudyDate = stRange[1], studyRange = stRange[2];

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

//  -initAreas: calculate areas to watch NDVI and NDWI. 'areas' = list of 2 display groups of radius 1km, 2 km
var areas = libIBISA.initAreas (boundList, radius);
var displayGroups = areas[0], displayGroups2 = areas[1];

//  -initVis: Visualisation parameters
var visus = libIBISA.initVis();
var visuIndNDVI = visus[0], visuAnoNDVI = visus[1],
      visuIndNDWI = visus[2], visuAnoNDWI =visus[3], visuRGB =visus[4];

//  -initImg: image collections to be used, with NDVI and NDWI bands added
//    this is the only code that is specific to a satellite
var MV = ee.ImageCollection ('MODIS/006/MOD09A1'); //MOD09A1.006 Terra Surface Reflectance 8-Day Global 500m
var bMODIS = require ('users/ibisa/common:spectrBands/bandsMODIS');
var imgs = libIBISA.initImg(MV, displayGroups2, bMODIS.NIR, bMODIS.RED, bMODIS.SWIR, studyRange);
var geoBoundedImgs = imgs[0], geoDateBoundedImgs = imgs[1];

//1.-Make 12-mth list of lifetime mean & stdDev over entire lifetime, for NDVI & NDWI
var msdNDVIByMonth = libIBISA.mStdIndexByMonth ('NDVI', geoBoundedImgs);
var msdNDWIByMonth = libIBISA.mStdIndexByMonth ('NDWI', geoBoundedImgs);

//  if applicable, add xSigma to geoDateBoundedImgs and chart

//2.---Calculate the NDVI-NDWI anomalies of all images in geoDateBoundedImgs
var withAnomaly = geoDateBoundedImgs
        .map(libIBISA.subtractIndexMean('NDVI', msdNDVIByMonth))
        .map(libIBISA.subtractIndexMean('NDWI', msdNDWIByMonth));

//------------- end Preparation of data

// Ask GEE to make a 2nd map area named linkedMap
var linkedMap = ui.Map();
// display the selector dropdown box in the linked Map
var selection = 0, boxPosition = 'top-left';
var pt2watch = libIBISA.objValue(pts, selection);
var watchLib = require ('users/ibisa/common:libs/watchLib');
watchLib.fillLinkedMap(linkedMap, displayGroups2, studyRange, visuRGB);
watchLib.pt2watchSelector(linkedMap, boxPosition, pts, selection, pt2watch, zoomLevel
    , firstRun, withAnomaly, displayGroups, displayGroups2,
        visuIndNDVI, visuIndNDWI, visuAnoNDVI, visuAnoNDWI);

// Ask GEE to generate a linked area of the 2 map areas
var linker = ui.Map.Linker([ui.root.widgets().get(0), linkedMap]);
// Ask GEE to define the split panel from the 2 parts of the linker
var splitPanel = ui.SplitPanel({
  firstPanel: linker.get(1),
  secondPanel: linker.get(0),
  orientation: 'horizontal',
  wipe: true,
  style: {stretch: 'both'}
});
// Ask GEE to replace the browser default list of widgets with this split panel
ui.root.widgets().reset([splitPanel]);
// Ask GEE to display, by setting the center and the zoom level
linker.get(1).centerObject(pt2watch, zoomLevel);


print('NDVI-NDWI anomalies', withAnomaly);
//  end of main code ----------------------------------------
