# Presentation

This folder is a work-in-progress specification of the final project of Vu Tien Khang for the ConsenSys Ethereum Programming Bootcamp. Other Bootcamp participants are welcome using it to inspire their own Final project.

The project is a Tech4Good project. It is called _Machu-Picchu_. Its purpose is to support a decentralised risk sharing of crop risks among smallholder farmers worldwide. The challenge is to reduce drastically the administrative costs to convince smallholder farmers and breeders to join the community. Today September 2020, IBISA the predecessor of _Machu-Picchu_ is serving 310 farmers in Tamil Nadu, India, and is pre-registering 3000 up to 10'000 semi-nomadic breeders in Niger.

_Machu_ is the Risk Sharing component. _Picchu_ is the EO-based Collaborative Damage Assessment component. A _Machu-Picchu_ "member" is a farmer or a breeder who shares the crop risks with other members, in a decentralised manner. This folder contains the _Machu_ sub-project.

## What is the pain? what is the solution?
See [https://github.com/Machu-Pichu/Top-Level/blob/master/README/1-README.md](https://github.com/Machu-Pichu/Top-Level/blob/master/README/1-README.md)

## The flow of transactions
![](https://github.com/Machu-Pichu/Top-Level/blob/master/common/images/20200914%20Machu-Picchu%20Transactions.png)
The _Machu_ Risk Sharing community is managed by a blockchain. Its transactions record:
* the coordinates of the plot of field cultivated by a farmer (non-fungible token)
* the frequent (but trickle) contribution of a farmer (fungible token)
* the infrequent (relatively big) damage compensation to a farmer (fungible token)

The _Picchu_ crowd-watching community is managed by a distinct blockchain, but can be the same in a prototype or an MVP. Later on, the 2 blockchains will interoperate via an equivalent of Cosmos or PolkaDot. Its transaction record:
* the balance of a watcher's reputation token (fungible token)
* the history of damage assessments of a watcher

The users of the _Machu_ data can be:
* mutual risk sharing organisation among farmers, using their own ERM (Enterprise Resource Management) with a centralised database or a decentralise blockchain
* insurers and study organisms who are interested by historical data of _Machu_
* governmental or insternational organisations whose purposes is to help farmers
* surveillance authorities

# The stories
## Risk Sharing story
The story of a _Machu_ risk sharing member is the following:
*	Each member contributes as regularly and as often as possible to the common pot on the blockchain;
*	The monthly average of contribution of a member determines the compensation to be received in case of crop loss (property of _Machu_ blockchain);
*	The compensation equals the monthly average contribution times the average duration between losses observed by all members of the community (property of actuarial calculation). The idea is that the luckiest (suffers less damage than usual) helps the less lucky (suffers damage earlier than usual);
*	If a member stops contributing (for health or other unfortunate reason), the protection still continues but the average contribution becomes gradually lower and so is the compensation;
*	The assessment of damages is done by crowd-watching using free Earth Observation data.

This practice is already how rural communities do risk sharing since the dawn of time. An example of several villages participating to the _Machu_ community can be seen from the [sample McGyver web app](https://ibisa.users.earthengine.app/view/mcgyver3). In this satellite image overlaid on Google Maps, the members with fields from the villages in red will receive compensation directly from the other members, without any insurer as middleman.

## Damage assessment by satellite story
The story of a _Picchu_ crowd-sourced damage assessment member is the following:
*	Each _Picchu_ member (a "watcher") does a blockchain transaction to a known public address of a contract to signal that he/she is ready to receive 10 locations (from true _Machu_ members, anywhere in the world) to assess;
*	He/she uses the free crowd-watching tools available and do transactions to register the assessment for each village;
*	All assessments of all watchers are tallied, weighted by each watcher's reputation, to produce an evaluation of the damage of the month of each village ("wisdom of the crowd"). This is done by an auditable smart contract;
*	Each watcher reputation score is calculated and updated;
*	The result is available to _Machu_ via an inter-blockchain protocol to calculate damage compensations.

This story has been running, mostly manually, since IBISA was deployed on the field in June 2019.

On the _Picchu_ side, the principles that support this community are:
*	the data crowdsourced by the community is a public service that may be retrieved and used by anybody;
*	the tools are available open source for free use. IBISA and _Machu-Picchu_ currently are the only ones who implement and support the _Picchu_ community, but a community of developers is encouraged;
*	all watchers have their own free Google Earth Engine account and use it for a non-commercial use, that is to do crowd-watching;
*	they contribute crowd-watching results to _Picchu_'s open blockchain database;
*	the results can be used for many purposes: crop protection, deforestation monitoring, natural disaster watching, infrastructure surveillance , agriculture practices encouragement etc. Each purpose has its own transparent "watcher reputation engine" adapted to the purpose and located on the same blockchain;
*	the watching tools may be developed independently use any source of satellite data: GEE, Sinergise, etc.
