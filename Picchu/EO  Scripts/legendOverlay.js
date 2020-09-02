exports.legendOverlay = function (legendTitleText, visuAnoNDVI){
/* legendOverlay: add to map a legend 
*   credits to this earthsite on Open Geo Blog: https://mygeoblog.com/2016/12/09/add-a-legend-to-to-your-gee-map/)
*   used by: 
*  @param {string}  legendTitleText: for example 'Location to watch:'
*  @param {object}  visuAnoNDVI : visualisation parameters (min, max, palette, etc.)
*/
  // set position of panel
  var legend = ui.Panel({
    style: {
      position: 'bottom-right',
      padding: '8px 15px',
    }
  });
 
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

  var legendAnoNDVI = {min: visuAnoNDVI.min, max: visuAnoNDVI.max, palette: visuAnoNDVI.palette};
  // create text on top of legend with the 'max' of the palette
  var panel = ui.Panel({
    widgets: [
    ui.Label('> '.concat(legendAnoNDVI['max']))
    ],
  });
  legend.add(panel);

  // create the legend image
  // -creates an image with two bands named 'longitude' and 'latitude', 
  //  containing the longitude and latitude at each pixel, in degrees
  //  select the band 'latitude' and store it in variable 'lon' (?)
  // this is the trick to make the vertical gradient and keep it stable when the use moves the map
  // if the 'thumbnail' is horizontal rather than vertical, select the band 'longitude'
  var lon = ee.Image.pixelLonLat().select('latitude');
  // ' populationExposedVis' is the object used to visualise the image layer ' population_exposed'
  // with the 'min' the 'max' and the 'palette'
  var gradient = lon.multiply((legendAnoNDVI.max-legendAnoNDVI.min)/100.0).add(legendAnoNDVI.min);
  var legendImage = gradient.visualize(legendAnoNDVI);
  // create thumbnail from the image, showing the vertical gradient
  var thumbnail = ui.Thumbnail({
    image: legendImage,
    params: {bbox:'0,0,10,100', dimensions:'10x160'},
    style: {padding: '1px', position: 'bottom-center'}
  });   
  // add the thumbnail gradient to the legend
  legend.add(thumbnail);
   
  // create text on bottom of legend with the 'min' of the palette
  panel = ui.Panel({
    widgets: [
    ui.Label(legendAnoNDVI['min'])
    ],
  });
  legend.add(panel);

  // add legend to map (alternatively you can also print the legend to the console)
  Map.add(legend);
};  // end of legendOverlay
