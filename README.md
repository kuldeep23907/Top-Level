# RSC-WCC Overall Architecture
This document is a work-in-progress draft. It describes the overall blockchain architecture of an open mutual risk-sharing system of which IBISA would be a simple external user. The components are (see drawings below):

1. RSC (Ris-Sharing Community): one blockchain-based risk-sharing community, storing information on farmers, geographical locations of  the plots of field, onboarding date, group membership  (to be confirmed);
2. WCC (Watcher Collaborative Community): One blockchain-based vegetation loss assessment community, storing monthly information on location of the centre of group, date of assessment, watcher assessing, percentage of loss.

The 2 blockchains are interoperable via Cosmos or PolkaDot. In the future, other loss assessment blockchains can join the community and their data may be used by other risk-sharing communities. The two communities RSC and WCC are open source. Any watcher can contribute a watching helper tool. Any enabler can develop its own application to read the blockchain and connect to its own customer database. The enabler is free to keep the record of contributions and the loss compensation calculation in a classical database or in another blockchain. A sample set of watcher helper tools developed in Google Earth Engine (GEE) are already available in GEE Git.

# Executive Summary
## What is the pain? what is the solution?
The need and the opportunities are huge since there are more than 500 M smallholder farmers who don't have access to crop insurance already in 2013 and the situation has worsened since then:
* Smallholder farmers communities need to share risks and have done so for centuries, at village level;
* With the Climate Change, the risk protection must be extended to a much larger scale, typically using insurance. Unfortunately, existing insurances have too high operations costs because they use business process practices of the 19th century, although digitalized for the 21st century. The brokering part is being handled by mobile technologies, but it covers only a minor part of the high administrative costs;
* To lower assessment costs, insurers started using parametric approaches using Earth Observation data, but the existing algorithms are either multi-factorial and expensive or use a single factor and give disappointing results on the field;
* Earth Observation data is available for free, Google Earth Engine is available for free research and non-commercial uses and the layperson can have access to powerful and easy to use tools;
* Blockchain-based libraries exist in open source to support reputation-based crowdsourcing and record risk-sharing loss.

The solution proposed by IBISA (_Inclusive Blockchain Insurance using Space Assets_) is to use the blockchain to share the risks and use human collective intelligence (crowd-watching) instead of machine algorithms to assess crop damages. This approach reduces drastically the costs for a potentially equal accuracy. However, because the landscape it starts from was empty, IBISA had to implement the whole value chain to convince existing actors, resulting in an immediately usable but monolithic architecture. 
## The long-term vision
The fully decentralised approach using a double blockchain RSC-WCC is too far from the current practices and has to be implemented gradually, in the shadow of IBISA, although it has a stronger growth potential. IBISA has its place in the landscape of RSC-WCC, as can be seen in the following chart.. ![Overall RSC-WCC Architecture](https://raw.githubusercontent.com/kvutien/Top-Level/master/common/images/20200717%20RSC-WCC%20Overall%20Architecture.png)

Technically speaking, this evolution of IBISA is based on a [microservice architecture] (https://en.wikipedia.org/wiki/Microservices). A microservice architecture allows external developers to develop additional watcher helper tools  and risk-sharing applications without being tied to any internal choices.

On the RSC side
* IBISA is a commercial company, providing a platform service to do mutual crop risk sharing;
* any enabler can choose to make its own application or use IBISA platform;
* same for classical insurers and re-insurers, adding their own risk modelling and risk management processes
* same for classical  Financial Service Providers, using the transparent data for credit scoring the farmers
* same for government agencies, to develop their own incentive programs
* same for international donor institutions etc., etc.

IBISA could offer services to the above to take advantage of IBISA's familiarity with the RSC blockchain and WCC blockchain.
