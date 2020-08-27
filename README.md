# RSC-WCC Project Description
This document is a work-in-progress draft. It describes an open mutual crop risk-sharing project using blockchain, Earth Observation and Actuarial Risk Modelling. It is based on the same philosophy as IBISA (https://ibisa.network/), but RSC-WCC is a collaborative project while IBISA is a classical monolithic structure. In RSC-WCC, IBISA would be a simple collaborative participant as any other guests and an external user of RSC-WCC data. 

The fundamental vision of the project is the following
* today data belong to big platforms
* with these data, these platforms are more powerful than local authorities. They know more about the citizens habits of mobility, of leisure, of consuming, of credit, of social networking etc.
* these data SHOULD BE A PUBLIC SERVICE
* the decentralised blockchain 2.0 is an ideal tool to support such a public service.

From this vision, the project aims to build a collaborative open source public service of open data, geared at the protection of crop risks of smallholder farùers worldwide. On such a public service could blossom a full ecosystem of services, like on the data of Uber or Facebook, but not owned by a single entity. This ecosystem would be similar to the ecosystem of roads, on which could prosper transportation services, commerce and repair of vehicle, driving school, restauration, shops, guides, maps, directories etc.

The power that fuels the growth of such an ecosystem is the universal need for roads. As we'll see below, the same universal need for crop protection (more than 500M farmers worldwide feeding 90% of the world) will feed the ecosystem built on RSC-WCC.

The components are (see drawings below):

1. [RSC (Risk-Sharing Community)](https://github.com/kvutien/Top-Level/tree/master/RSC): a blockchain-based risk-sharing community, storing information on farmers, geographical locations of  the plots of field, onboarding date, (group membership, to be confirmed);
2. [WCC (Watcher Collaborative Community)](https://github.com/kvutien/Top-Level/tree/master/WCC): a blockchain-based vegetation loss assessment community, storing information on location of the centre of group, date of (monthly) assessment, watcher assessing, percentage of loss.

The 2 blockchains are interoperable via Cosmos or PolkaDot. In the future, other loss assessment blockchains can join the community and their data may be used by other risk-sharing communities. 

The two communities RSC and WCC are open source. Any watcher can develop and contribute a watching helper tool to the WCC community. Any enabler can develop its own application to read the RSC blockchain and connect to its own customer database. The enabler is free to record of contributions and the loss compensation calculation using a classical database or using another blockchain.

## What is the pain? what is the solution?
The need and the opportunities are huge since there are more than 500 M smallholder farmers who don't have access to crop insurance while providing more than 70% of the world's food. See [IFAD report 2013](https://www.ifad.org/documents/38714170/40706188/Smallholders+can+feed+the+world_e.pdf/460ca6c2-7621-40d8-9f79-a56f6f8fa75e). The situation has worsened since 2013. But today in 2021 the planets are aligned to create a cost-effective solution:
* Smallholder farmers communities need to share risks. **They have done so for centuries**, at village level;
* With the Climate Change, the risk protection must be extended to a much larger scale, typically using insurance. Unfortunately, existing insurances have too high operations costs because they use business process practices of the 19th century, although digitalized for the 21st century. The brokering part is being handled by mobile technologies, but it covers only a minor part of the high administrative costs;
* To lower assessment costs, insurers started using parametric approaches using Earth Observation data, but the existing algorithms are either multi-factorial and expensive or use a single factor and give disappointing results on the field;
* Earth Observation data is available for free, Google Earth Engine is available for free research and non-commercial uses and the layperson can have access to powerful and easy-to-use tools;
* Blockchain-based libraries exist in open source to support reputation-based crowdsourcing and record risk-sharing loss.

The solution proposed by IBISA (_Inclusive Blockchain Insurance using Space Assets_) is to use the blockchain to share the risks and use human collective intelligence (crowd-watching) instead of machine algorithms to assess crop damages. This approach reduces drastically the costs, with a potentially equal accuracy. However, because the landscape it starts from was empty, IBISA had to implement the whole value chain to convince existing actors, resulting in an immediately usable but monolithic architecture. 
## The long-term vision
The following fully decentralised approach using a double blockchain RSC-WCC is too far from the current practices and therefore has to be implemented gradually, in the shadow of IBISA, although it has a stronger growth potential. IBISA has its place in the global landscape of RSC-WCC, as can be seen in the following chart. ![Overall RSC-WCC Architecture](https://raw.githubusercontent.com/kvutien/Top-Level/master/common/images/20200717%20RSC-WCC%20Overall%20Architecture.png)

A sample set of watcher helper tools have been already developed in Google Earth Engine (GEE). They are already available in GEE open Git code repository and is described here [in this GitHub](https://github.com/kvutien/Top-Level/tree/master/WCC). it is composed of:
* _McGyver_: a web app to visualise the instant chlorophyll activity of plants and the water content of the leaves. It also visualises "anomalies", the differences of the current value with the average of the past 20 years;
* _Laureline_: a web app to chart over one year the instant chlorophyll activity of plants and the water content of the leaves. It also charts "anomalies". The charts show the one-year time series of each parameter as well as the upper and lower bounds that contains 80% of that parameter over the past 20 years;
* _Dredd_: a web app to visualise 2 complex indexes. They are composite and less directly linked with measurements although they represent better the physical reality. One composite parameter is the fAPAR (fraction of Absorbed Photosynthetically Active Radiation). The other is the Leaf Area Index. This web app also visualises "anomalies";
* _Valerian_: a web app to do the same as Laureline does, but for the fAPAR and the LAI;
* _Bonsai_: a web app to visualise the Surface Soil Moisture (SSM) and the SubSurface Soil Moisture (SuSM). These parameters are more remote from the vegetation health. Actually studies have shown that the health of vegetation is most correlated with the soil moisture of 30 to 40  days before. Hence the web app have exotic names.
* _Kakemono_: a web app to do the same as Laureline does, but for the SSM and the SuSM.

Technically speaking, this evolution of IBISA is based on a [microservice architecture](https://en.wikipedia.org/wiki/Microservices). Each of the sample web app is such a microservice. A microservice architecture allows external developers to develop easily additional watcher helper tools and risk-sharing applications without being tied to any previous internal choices.

More in [README2.md](https://github.com/kvutien/Top-Level/blob/master/README2.md)

