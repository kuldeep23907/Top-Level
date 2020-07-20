# The Watcher Collaborative Community

The Watcher Collaborative Community (WCC) takes advantage of the 21st century Earth Observation services such as _[Google Earth Engine](https://code.earthengine.google.com/) (Google)_ and Sentinel _[EO-browser](https://apps.sentinel-hub.com/eo-browser/) (Sinergise)_, that are made available at no cost to the public for non-commercial uses. 

Such services use cloud computing, cloud storage and parallel computing to take care of the Earth Observation computing chores such as filtering individual satellite images by location and by date, compositing them into larger images, managing resolution scales, applying image processing algorithms, calculating statistics on pixels, managing the display etc.

Such free and easy-to-use services makes it possible to crowdsource photo-interpretation that used to be reserved to highly skilled specialists. In turn, low cost crowdsourcing opens the possibility of "TechForGood", using technology for humanitary purposes such as assessing by satellite crop losses in a transparent and neutral way, helping smallholder farmers to share their risks.

Most crowdsourcing initiatives have been managed in a centralised way, with an authority that dispatches the work, collects the contributions, validates them, consolidates the results before making them available to the public. The WCC initiative leverages the blockchain technology to decentralise these tasks to achieve totally autonomous operations.

## Overall diagram
![Overall RSC-WCC Architecture](https://raw.githubusercontent.com/kvutien/Top-Level/master/common/images/20200717%20RSC-WCC%20Overall%20Architecture.png)

## RSC-WCC Sub-projects
![GitHub folder organisation RSC-WCC](https://github.com/kvutien/Top-Level/blob/master/common/images/20200717%20WCC%20Github%20Folders.png)

## EO scripts
There are 3 kinds of GEE scripts:
* "watch" scripts: display spatially the median index(es) of the month and their median anomalies of the month. Watch scripts exist for MODIS, Sentinel 2 and Landsat 8. They exist for NDVI (Normalised Differential Vegetation Index) and NDWI (Normalised Differential Water Index) as defined by Gao (1996). They also exist for fAPAR (fraction of Absorbed Photosynthetically Active Radiation) and LAI (Leaf Area Index) on MODIS, for SMOS (Soil Moisture), for CHIRPS (Climate Hazards Group InfraRed Precipitation with Station data), SPI (Standard Precipitation Index), LST (Land Surface Temperature) and many other indexes available on GEE
* "chart" scripts: calculate and display time series of the same indexes as above. They also generate CSV files that can feed R-Studio scripts to calculate correlations and other statistical objects
* "lapse" scripts: calculate and display time lapses of the indexes. They are like "charts" because they visualise time series, and they are like "watch" because they visualise spatially the indexes and their anomalies spatially

"Watch" helper tools exist already as standalone Web apps and Android apps. "Chart" helper tools exist in July 2020 as code editor apps; they are being moved to web apps and Android apps. "Lapse" tools exist only as Code Editor because their outputs require GEE batch executables. In the following we will describe the JavaScript codes. Ideally, they would be in Python and be documented using Jupyter notebooks but GEE Python is still one step behind JavaScript.

![Calling sequence of GEE scripts (July 2020)](https://github.com/kvutien/Top-Level/blob/master/common/images/20200718%20WCC%20Libraries.png) 
