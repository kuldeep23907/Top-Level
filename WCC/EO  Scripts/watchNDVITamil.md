# Description of the GEE script watchNDVITamil

The code `watchNDVITamil.js`that is stored in  this GitHub folder is meant only as illustration. This version worked in July 20, 2020 in the GEE Code Editor. For the most up-to-date code, please refer to the link (https://code.earthengine.google.com/?scriptPath=users%2Fibisa%2Fpublic%3AwatchNDVITamil)

## General presentation
This script is an instance of the "watch" script, applied to MODIS data and for 54 groups of farmers (312 farmers in total) in Tamil Nadu who are members of IBISA in June 2020. The folloowing picture shows their respective positions ![groups Tamil Nadu June 2020](https://github.com/kvutien/Top-Level/blob/master/common/images/20200720%20Tamil%20Nadu%20groups.png)

When launched, the spatial display shows 2 panes that can be resized to show more of one or of the other:
* the left pane is the RGB image of the month. It is useful to show eventual clouds that might pollute the NDVI;
* the right pane shows the groups to assess loss. Each group is represented by its center (a black dot) and a circle of 1 km radius around the black dot showing the NDVI anomaly or the NDWI anomaly. This cirle is surrounded by another of 3 km radius that displays the actual value of the index (NDVI and NDWI) inside this area. ![screen display](https://github.com/kvutien/Top-Level/blob/master/common/images/20200628%20Tamil%20Nadu%20layers.jpg)
