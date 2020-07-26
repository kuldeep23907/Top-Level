# RSC-WCC Project Organisation
This document is a work-in-progress draft. It complements [README.md](https://github.com/kvutien/Top-Level/blob/master/README.md) and describes the overall architecture of an open mutual crop risk-sharing project using blockchain, Earth Observation and Actuarial Risk Modelling.

The project is composed of 2 distinct sub-projects. Each of them is in a distinct Github folder, plus one folder for the blockchain interoperability between the 2 (either Cosmos or PolkaDot).
* the Risk Sharing Community (RSC) project;
* the Watcher Collaborative Community (WCC) project.

RSC-WCC being open source and collaborative, agreed contributors are free to add more sub-projects after coordination with the developer community.

## Roles in the RSC (Risk Sharing Community)
On the RSC side
* the RSC blockchain contains one record per farmer with the public key of the farmer, the public keys of the plots of field of this farmer (most usually one plot of field per farmer but can be several);
* the RSC blockchain contains one record per plot of field with the public key of the owner, GPS coordinates, the date of ownership, the loss assessment with the date of assessment, the watcher key and the percentage of loss;
* the data crowdsourced by the community may be retrieved and **used by anybody**. IBISA is just one of these "anybody" users;

User applications using  the RSC blockchain
* IBISA is a commercial company, providing a platform service to do mutual crop risk sharing;
* any enabler can choose to make its own application or use IBISA platform;
* same for classical insurers and re-insurers, adding their own risk modelling and risk management processes;
* same for classical  Financial Service Providers, using the transparent data for credit scoring the farmers based on the frequency of their losses and of their contributions to the common pot;
* same for government agencies, to develop their own incentive programs  for best agricultural practices and gender diversity;
* same for international donor institutions etc., etc. for example this crowdsourced data for the purpose of the ESA GDA (Global Development Assistance) program: deforestation watching, infrastructure monitoring (bridges), industrial environment survey, disaster analysis (cyclones, floods) … and for crop damage assessment.

IBISA could also offer consulting services to the above to take advantage of IBISA's familiarity with the RSC blockchain and WCC blockchain.

In the long-term future, additional risk-sharing and community watching may be added covering many kinds of calamity: road infrastructure watching, flood watching, natural calamities watching, drought warning etc.

## Roles in the WCC (Watcher Collaborative Community)
On the WCC side, the principles that support this WCC community are:
* the tools are available open source for free use. A community of developers is encouraged;
* all watchers have their own free Google Earth Engine account and use it for a non-commercial use, that is to do crowd-watching;
* they contribute crowd-watching results to a WCC open blockchain database;
*	the results can be used for many purposes: crop protection, deforestation monitoring, natural disaster watching, infrastructure surveillance (cf. case of [the Morandi bridge collapse in Genoa](https://www.mdpi.com/2072-4292/11/12/1403/htm), agriculture practices encouragement etc. Each purpose has its own transparent "watcher reputation engine" adapted to the purpose and located on the same blockchain. When using the crowd-watching crop data, IBISA will contribute its version of "watchers reputation engine";
* the watching tools may be developed independently use any source of satellite data: GEE, Sinergise, etc.

## Additional readings
See ["Additional readings"](https://github.com/kvutien/Top-Level/blob/master/WCC/Additional%20readings.md) for more, on the Earth Observation sub-project. The blockchain part is work-in-progress.
