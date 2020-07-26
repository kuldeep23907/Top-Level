# RSC-WCC Project Description
This document is a work-in-progress draft. It describes the overall architecture of an open mutual crop risk-sharing project using blockchain, Earth Observation and Actuarial Risk Modelling. It is based on the same philosophy as IBISA (https://ibisa.network/), but RSC-WCC is a collaborative project while IBISA is a classical monolithic structure. In RSC-WCC, IBISA would be a simple collaborative participant as any other guests and an external user of RSC-WCC data. The components are (see drawings below):

1. [RSC (Risk-Sharing Community)](https://github.com/kvutien/Top-Level/tree/master/RSC): a blockchain-based risk-sharing community, storing information on farmers, geographical locations of  the plots of field, onboarding date, (group membership, to be confirmed);
2. [WCC (Watcher Collaborative Community)](https://github.com/kvutien/Top-Level/tree/master/WCC): a blockchain-based vegetation loss assessment community, storing information on location of the centre of group, date of (monthly) assessment, watcher assessing, percentage of loss.

The 2 blockchains are interoperable via Cosmos or PolkaDot. In the future, other loss assessment blockchains can join the community and their data may be used by other risk-sharing communities. The two communities RSC and WCC are open source. Any watcher can develop and contribute a watching helper tool to the WCC community. Any enabler can develop its own application to read the RSC blockchain and connect to its own customer database. The enabler is free to record of contributions and the loss compensation calculation using a classical database or using another blockchain. A sample set of watcher helper tools developed in Google Earth Engine (GEE) are already available in GEE open Git code repository.

## Executive Summary
### What is the pain? what is the solution?
The need and the opportunities are huge since there are more than 500 M smallholder farmers who don't have access to crop insurance. See [IFAD report 2013](https://www.ifad.org/documents/38714170/40706188/Smallholders+can+feed+the+world_e.pdf/460ca6c2-7621-40d8-9f79-a56f6f8fa75e). The situation has worsened since 2013 but today in 2021 the planets are aligned to create a cost-effective solution:
* Smallholder farmers communities need to share risks and have done so for centuries, at village level;
* With the Climate Change, the risk protection must be extended to a much larger scale, typically using insurance. Unfortunately, existing insurances have too high operations costs because they use business process practices of the 19th century, although digitalized for the 21st century. The brokering part is being handled by mobile technologies, but it covers only a minor part of the high administrative costs;
* To lower assessment costs, insurers started using parametric approaches using Earth Observation data, but the existing algorithms are either multi-factorial and expensive or use a single factor and give disappointing results on the field;
* Earth Observation data is available for free, Google Earth Engine is available for free research and non-commercial uses and the layperson can have access to powerful and easy-to-use tools;
* Blockchain-based libraries exist in open source to support reputation-based crowdsourcing and record risk-sharing loss.

The solution proposed by IBISA (_Inclusive Blockchain Insurance using Space Assets_) is to use the blockchain to share the risks and use human collective intelligence (crowd-watching) instead of machine algorithms to assess crop damages. This approach reduces drastically the costs for a potentially equal accuracy. However, because the landscape it starts from was empty, IBISA had to implement the whole value chain to convince existing actors, resulting in an immediately usable but monolithic architecture. 
### The long-term vision
The following fully decentralised approach using a double blockchain RSC-WCC is too far from the current practices and therefore has to be implemented gradually, in the shadow of IBISA, although it has a stronger growth potential. IBISA has its place in the global landscape of RSC-WCC, as can be seen in the following chart.. ![Overall RSC-WCC Architecture](https://raw.githubusercontent.com/kvutien/Top-Level/master/common/images/20200717%20RSC-WCC%20Overall%20Architecture.png)

Technically speaking, this evolution of IBISA is based on a [microservice architecture](https://en.wikipedia.org/wiki/Microservices). A microservice architecture allows external developers to develop additional watcher helper tools  and risk-sharing applications without being tied to any previous internal choices.

More in [README2.md](https://github.com/kvutien/Top-Level/blob/master/README2.md)

