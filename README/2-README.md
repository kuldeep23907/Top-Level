# The long-term vision
The following fully decentralised _Machu-Picchu_ approach using a double blockchain RSC-WCC is too far from the current practices and therefore has to be implemented gradually in the shadow of IBISA, although it has a stronger growth potential. IBISA has its place in the global landscape of _Machu-Picchu_, as can be seen in the following chart. ![Overall RSC-WCC Architecture](https://raw.githubusercontent.com/kvutien/Top-Level/master/common/images/20200717%20RSC-WCC%20Overall%20Architecture.png)

Our dream is that every chief of village, anywhere in the world, would be able to open a McGyver on a tablet and assess the state of vegetation of the villages around and beyond, and make a consensus between them on the eventual damages that need to be compensated. They'll use mainly the chlorophyll activity and the water content of the leaves without even knowing it. For each villager, the reputation of her village and her individual contribution to the common pot would be the basis for her compensation in case of damage. This is _Machu_. The assessment of every chief of village will be comforted by independent and neutral watchers, worldwide. This is _Picchu_. The work and the reputation of these independent watchers would also be compensated somehow by DeFi (Decentralised Finance).

A sample set of watcher helper tools have been already developed in Google Earth Engine (GEE). They are already available in GEE open Git code repository and is described here [in this GitHub](https://github.com/kvutien/Top-Level/tree/master/WCC). it is composed of:
* _McGyver_: a web app to visualise the monthly chlorophyll activity of plants and the water content of the leaves. It also visualises "anomalies", the differences of the current value with the average of the past 20 years;
* _Laureline_: a web app to chart over one year the monthly chlorophyll activity of plants and the water content of the leaves. It also charts "anomalies". The charts show the one-year time series of each parameter as well as the upper and lower bounds that contains 80% of that parameter over the past 20 years;
* _Dredd_: a web app to visualise 2 complex indexes. They are composite and less directly linked with measurements although they represent better the physical reality. One composite parameter is the fAPAR (fraction of Absorbed Photosynthetically Active Radiation). The other is the Leaf Area Index. This web app also visualises "anomalies";
* _Valerian_: a web app to do the same as Laureline does, but for the fAPAR and the LAI;
* _Bonsai_: a web app to visualise the Surface Soil Moisture (SSM) and the SubSurface Soil Moisture (SuSM). These parameters are more remote from the vegetation health. Actually studies have shown that the health of vegetation is most correlated with the soil moisture of 30 to 40  days before. Hence the web app have exotic names.
* _Kakemono_: a web app to do the same as Laureline does, but for the SSM and the SuSM.

Technically speaking, this evolution of IBISA is based on a [microservice architecture](https://en.wikipedia.org/wiki/Microservices). Each of the sample web app is such a microservice. A microservice architecture allows external developers to develop easily additional watcher helper tools and risk-sharing applications without being tied to any previous internal choices.

More in [README2.md](https://github.com/kvutien/Top-Level/blob/master/README2.md)

# [One last thing...](https://github.com/Machu-Pichu/Top-Level/blob/master/README/3-README.md)
