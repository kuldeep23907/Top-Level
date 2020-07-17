# RSC-WCC Project Description
This document is a work-in-progress draft. It describes the overall architecture of an open mutual crop risk-sharing project using blockchain, Earth Observation and Actuarial Risk Modelling. It is based on the same philosophy as IBISA (https://ibisa.network/), but here IBISA would be a simple external user. The components are (see drawings below):

1. RSC (Risk-Sharing Community): a blockchain-based risk-sharing community, storing information on farmers, geographical locations of  the plots of field, onboarding date, group membership  (to be confirmed);
2. WCC (Watcher Collaborative Community): a blockchain-based vegetation loss assessment community, storing information on location of the centre of group, date of (monthly) assessment, watcher assessing, percentage of loss.

The 2 blockchains are interoperable via Cosmos or PolkaDot. In the future, other loss assessment blockchains can join the community and their data may be used by other risk-sharing communities. The two communities RSC and WCC are open source. Any watcher can develop and contribute a watching helper tool to the community. Any enabler can develop its own application to read the blockchain and connect to its own customer database. The enabler is free to record of contributions and the loss compensation calculation using a classical database or using another blockchain. A sample set of watcher helper tools developed in Google Earth Engine (GEE) are already available in GEE open Git code repository.

## Executive Summary
### What is the pain? what is the solution?
The need and the opportunities are huge since there are more than 500 M smallholder farmers who don't have access to crop insurance. See IFAD report 2013. The situation has worsened since then:
* Smallholder farmers communities need to share risks and have done so for centuries, at village level;
* With the Climate Change, the risk protection must be extended to a much larger scale, typically using insurance. Unfortunately, existing insurances have too high operations costs because they use business process practices of the 19th century, although digitalized for the 21st century. The brokering part is being handled by mobile technologies, but it covers only a minor part of the high administrative costs;
* To lower assessment costs, insurers started using parametric approaches using Earth Observation data, but the existing algorithms are either multi-factorial and expensive or use a single factor and give disappointing results on the field;
* Earth Observation data is available for free, Google Earth Engine is available for free research and non-commercial uses and the layperson can have access to powerful and easy to use tools;
* Blockchain-based libraries exist in open source to support reputation-based crowdsourcing and record risk-sharing loss.

The solution proposed by IBISA (_Inclusive Blockchain Insurance using Space Assets_) is to use the blockchain to share the risks and use human collective intelligence (crowd-watching) instead of machine algorithms to assess crop damages. This approach reduces drastically the costs for a potentially equal accuracy. However, because the landscape it starts from was empty, IBISA had to implement the whole value chain to convince existing actors, resulting in an immediately usable but monolithic architecture. 
### The long-term vision
The following fully decentralised approach using a double blockchain RSC-WCC is too far from the current practices and therefore has to be implemented gradually, in the shadow of IBISA, although it has a stronger growth potential. IBISA has its place in the global landscape of RSC-WCC, as can be seen in the following chart.. ![Overall RSC-WCC Architecture](https://raw.githubusercontent.com/kvutien/Top-Level/master/common/images/20200717%20RSC-WCC%20Overall%20Architecture.png)

Technically speaking, this evolution of IBISA is based on a [microservice architecture] (https://en.wikipedia.org/wiki/Microservices). A microservice architecture allows external developers to develop additional watcher helper tools  and risk-sharing applications without being tied to any previous internal choices.

## Organisation of the project
The project is composed of 2 distinct projects. Each of them is in a distinct Github folder, plus one folder for the blockchain interoperability between the 2 (either Cosmos or PolkaDot).
* the Risk Sharing (RSC) project;
* the Watcher Community WCC) project.

### Roles in the RSC
On the RSC side
* the RSC blockchain contains one record per farmer with the public key of the farmer, the public keys of the plots of field of this farmer (most usually one per farmer but can be  several);
* the RSC blockchain contains one record per plot of field with the public key of the owner, GPS coordinates, the date of ownership, the loss assessment with the date of assessemnt, the watcher key and the percentage of loss;
* the data crowdsourced by the community may be retrieved and **used by anybody**. IBISA is just one of these "anybody" users;

User applications using  the RSC blockchain
* IBISA is a commercial company, providing a platform service to do mutual crop risk sharing;
* any enabler can choose to make its own application or use IBISA platform;
* same for classical insurers and re-insurers, adding their own risk modelling and risk management processes;
* same for classical  Financial Service Providers, using the transparent data for credit scoring the farmers based on the frequency of their losses and of their contributions to the common pot;
* same for government agencies, to develop their own incentive programs  for best agricultural practices and gender diversity;
* same for international donor institutions etc., etc. for example this crowdsourced data for the purpose of the ESA GDA (Global Development Assistance) program: deforestation watching, infrastructure monitoring (bridges), industrial environment survey, disaster analysis (cyclones, floods) … and for crop damage assessment.

IBISA could offer consulting services to the above to take advantage of IBISA's familiarity with the RSC blockchain and WCC blockchain.

In the long-term future, additional risk-sharing and community watching may be added covering many kinds of calamity: road infrastructure watching, flood watching, natural calamities watching, drought warning etc.

### Roles in the WCC
On the WCC side, the principles that support this WCC community are:
* the tools are available open source for free use. A community of developers is encouraged;
* all watchers have their own free Google Earth Engine account and use it for a non-commercial use, that is to do crowd-watching;
* they contribute crowd-watching results to a WCC open blockchain database;
*	the results can be used for many purposes: crop protection, deforestation monitoring, natural disaster watching, infrastructure surveillance (cf. case of the Morandi bridge collapse in Genoa, https://www.mdpi.com/2072-4292/11/12/1403/htm), agriculture practices encouragement etc. Each purpose has its own transparent "watcher reputation engine" adapted to the purpose and located on the same blockchain. When using the crowd-watching crop data, IBISA will contribute its version of "watchers reputation engine";
* the watching tools may be developed independently use any source of satellite data: GEE, Sinergise, etc.

## Additional readings
See "Additional readings" for more, on the Earth Observation sub-project. The blockchain part is work-in-progress.
