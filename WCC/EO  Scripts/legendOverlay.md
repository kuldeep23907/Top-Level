# The GEE script `legendOverlay`that creates a scale of colours as legend on the Map
This function is taken from the blog `Open Geo Blog: https://mygeoblog.com/2016/12/09/add-a-legend-to-to-your-gee-map/)`.
It draws a vertical scale of colours that is a gradual change between `min` and `max` of the colour palette given as argument in `visuAnoNDVI`. 

For  this scale to remain the same when the image is panned and zoomed, this scale is actually a GEE `thumbnail`image that is generated based on the underlying equivalent latitudes of the matching point the map on which the scale is drawn.

In practice, it is composed of the following steps:
* define the widget panel `legend`
* define the properties of legend's title text and add it to the `legend`
* define the properties of legend's subtitle text and add it to the `legend`
* define the properties of legend's "max value" text and add it to the `legend`
* create the thumbnail image that is the scale of colours and add it to the `legend`
* define the properties of legend's "min value" text and add it to the `legend`
* add the `legend` widget to the main Map (the right pane).

The result looks like this 

<img src="https://github.com/kvutien/Top-Level/blob/master/common/images/20200722%20Colour%20scale%20legend.jpg" width="120">

## Step 1: define the widget panel `legend`
The padding is the space _inside_ the panel, between the border and the panel's content. The margin is the space _outside_ it, between the panel and its surrounding. 
Here, top and bottom paddings are 8 pixels; right and left paddings are 15 pixels.
```javascript
  // set position of panel
  var legend = ui.Panel({
    style: {
      position: 'bottom-right',
      padding: '8px 15px',
    }
  });
```
## Step 2: define the properties of legend's title text and add it to the `legend`
```javascript
  // Create legend title
  /*temp code*/var titleTextVis = {
    'margin':'0px 0px 6px 0px',  // top, right, bottom, left
    'fontSize': '15px', 
    'font-weight':'', 
    'color': 'dodgerblue' // CSS colour name for #1E90FF, 'firebrick' is for #B22222
  };
  var legendTitle = ui.Label('Legend',titleTextVis);
  // Add the title to the panel
  legend.add(legendTitle);
```
## Step 3: define the properties of legend's subtitle text and add it to the `legend`
```javascript
  // Subtitle
  var legendTitle2 = ui.Label({
    value: legendTitleText,
    style: {
    fontWeight: 'bold',
    fontSize: '12px',
    margin: '2px 0 0 0',  // top, right, bottom, left
    padding: '0'
    }
  });
  // Add title of second part of the legend to the panel
  legend.add(legendTitle2);
```
## Step 4: define the properties of legend's "max value" text and add it to the `legend`
```javascript
  var legendAnoNDVI = {min: visuAnoNDVI.min, max: visuAnoNDVI.max, palette: visuAnoNDVI.palette};
  // create text on top of legend with the 'max' of the palette
  var panel = ui.Panel({
    widgets: [
    ui.Label('> '.concat(legendAnoNDVI['max']))
    ],
  });
  legend.add(panel);
```
## Step 5: create the thumbnail image that is the scale of colours and add it to the `legend`
The explanations are in the comments. The legend is a thumbnail that GEE can create from an image. Here we use `pixelLonLat()` to complement the image with 2 bands, one band where each pixel contains the pixel's latitude in the inital image, the other band where each pixel value is the longitude. Then we select the band `latitude` (vertcal thumbnail).
```javascript
  // create the legend image thumnail in a gradient of colours 
  //    using a trick to keep it stable when the user moves the map
  // -add to the image two bands named 'longitude' and 'latitude', 
  //    containing the longitude and latitude at each pixel, in degrees
  // -here the thumnail is vertical so we select the band 'latitude' as an image named 'lon' (:-)
  // if the thumbnail is horizontal rather than vertical, select the band 'longitude'
  var lon = ee.Image.pixelLonLat().select('latitude');
```
In the code below, we fill the image `lon` with the gradient of the value of latitude defined by the anomaly palette of colours. We `visualise` it in JPEG 8-bit.
```javascript
// 'legendAnoNDVI' is the object used to visualise the image layer 'NDVI_anomaly'
//   with the 'min' the 'max' and the 'palette'
  var gradient = lon.multiply((legendAnoNDVI.max-legendAnoNDVI.min)/100.0).add(legendAnoNDVI.min);
  var legendImage = gradient.visualize(legendAnoNDVI);
```
We ask GEE to create a thumnail out of it and store it in the `legend` panel.
```javascript
// create thumbnail from the image, showing the vertical gradient
  var thumbnail = ui.Thumbnail({
    image: legendImage,
    params: {bbox:'0,0,10,100', dimensions:'10x160'},
    style: {padding: '1px', position: 'bottom-center'}
  });   
  // add the thumbnail gradient to the legend
  legend.add(thumbnail);
```
## Step 6: define the properties of legend's "min value" text and add it to the `legend`
```javascript
  // create text on bottom of legend with the 'min' of the palette
  panel = ui.Panel({
    widgets: [
    ui.Label(legendAnoNDVI['min'])
    ],
  });
  legend.add(panel);
```
## Step 7: add the `legend` widget to the main Map (the right pane).
```javascript
  // add legend to map (alternatively you can also print the legend to the console)
  Map.add(legend);
};  // end of legendOverlay
```
