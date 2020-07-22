# The GEE script `legendOverlay`that creates a scale of colours as legend on the Map
This function is taken from the blog `Open Geo Blog: https://mygeoblog.com/2016/12/09/add-a-legend-to-to-your-gee-map/)`.
It draws a vertical scale of colours that is a gradual change between `min` and `max` of the colour palette given as argument in `visuAnoNDVI`. This scale is actually a GEE `thumbnail`image that is generated based on the underlying equivalent latitudes of the matching point the map on which the scale is drawn.

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
