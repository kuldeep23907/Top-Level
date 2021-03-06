# WCC Earth Observation scripts
date of writing: _July 2020_

All EO scripts of ECC at the date of writing are for Google Earth Engine and are in the Git repository of GEE. Since the GEE repository is not adapted for documentation, contrary to a Jupyter notebook, the descriptions of the scripts are moved here. For the most up-to-date source code, refer to the GEE repository.

At the date of writing, 2 GEE users are registered
1. `kvutien.yes@gmail.com`
2. `ibisa.training@gmail.com`

## GEE scripts in `kvutien.yes@gmail.com`
The GEE scripts do one or several of the following functions, mainly for MODIS, but also for  Sentinel-2 and Landsat-8:
* display a satellite index spatially on a map to "watch",
* "chart" a satellite index evolution in time as a time series series,
* generate a "time lapse" over a large region, to view the index both spatially and in time.

## Overall libraries organisation
In the following we'll describe a function (for example _watch_), for a satellite (for example _MODIS_) and for a location (for example _Tamil Nadu_)
![Overall WCC GEE libraries](https://github.com/kvutien/Top-Level/blob/master/common/images/20200718%20WCC%20Libraries.png)

The account `kvutien.yes@gmail.com` "owns" 8 repositories and has "writer" access to a repository of `ibisa.training@gmail.com`
* `users/ibisa/common`: this repository contains only GEE "modules" to be shared by other scripts. All functions are prefixed "exports"
  * `GPSpts`: contains the GPS coordinates of the points to watch or chart
  * `libs`: contains `chartLib`, `lapseLib` and `watchLib`, the slowly evolving code used by the generic scripts `watchNDVITamil`or `watchNDVINiger`or `chartNDVITamil`etc.
  * `spectrBands`: maps a same name, for example 'RED', to the names of the bands in MODIS and in Sentinel-2
  * `lib`: contains the common EO calculations used by the other modules
* `users/ibisa/Kenya`: contains old versions of scripts (v0.3) used to study excess rain in Kenya. Obsolete
* `users/ibisa/Niger`: contains different watch and chart scripts of various indexes (rainfall, soil moisture, vegetation) for some sample locations in Niger around Say and Tamou.
* `users/ibisa/public`: contains scripts shared publicly. These scripts are used to generate the web apps to illustrate LinkedIn articles. Of special interest are the scripts that are used also in the Android Apps that constitute the beginning of the helper tools: `watchNDVITamil`, `SalinityMekongAll`, `testSierraLeone`
* `users/ibisa/TamilNadu`: contains scripts equivalent to `users/ibisa/Niger`
* `users/ibisa/test-EE1`: contains test scripts
* `users/ibisa/Vietnam`: contains scripts equivalent to `users/ibisa/Niger` and `users/ibisa/TamilNadu` but less indexes
* `users/ibisa/watchers`: contains test scripts, most of the time obsolete

The repositories `users/ibisa/common` and `users/ibisa/public` are shared publicly. Their URL are
* `git clone` https://earthengine.googlesource.com/users/ibisa/public
* `git clone` https://earthengine.googlesource.com/users/ibisa/common

## GEE scripts in `ibisa.training.yes@gmail.com`
The account `ibisa.training.yes@gmail.com` "owns" 1 repository with code for training and for LinkedIn articles

