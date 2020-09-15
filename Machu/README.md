# Presentation

This folder is a work-in-progress specification of the final project of Vu Tien Khang for the ConsenSys Ethereum Programming Bootcamp. Other Bootcamp participants are welcome using it to inspire their own Final project.

The project is a Tech4Good project. It is called _Machu-Picchu_. Its purpose is to support a decentralised risk sharing of crop risks among smallholder farmers worldwide. The challenge is to reduce drastically the administrative costs to convince smallholder farmers and breeders to join the community. Today September 2020, IBISA the predecessor of _Machu-Picchu_ is serving 310 farmers in Tamil Nadu, India, and is pre-registering 3000 up to 10'000 semi-nomadic breeders in Niger.

_Machu_ is the Risk Sharing component. _Picchu_ is the EO-based Collaborative Damage Assessment component. A _Machu-Picchu_ "member" is a farmer or a breeder who shares the crop risks with other members, in a decentralised manner. This folder contains the _Machu_ sub-project.

## What is the pain? what is the solution?
See [https://github.com/Machu-Pichu/Top-Level/blob/master/README/1-README.md](https://github.com/Machu-Pichu/Top-Level/blob/master/README/1-README.md)

A public service like _Machu-Picchu_ may bring a return on investment (RoI) to the civil society similar to **Route 66** for the American Far-West: between 100 thousand times to one million time the initial community investment.

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

# The technical contributions of blockchain
## The blockchains
Let's keep in mind that the purpose of _Machu-Picchu_ (and of IBISA) is to reduce drastically the operating costs of crop risk-sharing and by this, to protect the revenues of smallholder farmers and breeders against weather risks. This is achieved using Earth Observation and blockchain.

Today, _Machu-Picchu_ blockchain programmers can test their code by using as examples of concrete (and anonymous) data of [300 paying farmers in India](https://github.com/Machu-Pichu/Top-Level/blob/master/20200908%20Localised%20Tamil%20Nadu%20farmers.csv.txt) and [3600 pre-registered breeders in Niger](https://github.com/Machu-Pichu/Top-Level/blob/master/20200908%20Localised%20Niger%20Breeders.csv.txt). This data is available in Github.

In final, we see _Machu-Picchu_ as an ecosystem composed with several interoperable blockchains:
*	The main blockchain is _Machu_, that contains members of the risk-sharing community. This is the one that will be implemented in priority in my Final Project.
*	The secondary blockchain is _Picchu_, managing the crowd-watching using Earth Observation. This project is too complicated for my current level of proficiency. I'll tackle it after the Bootcamp, and if some students feels like addressing it now, it would be wonderful.
*	The third level blockchain is the ERM of an enabler. This one is very ambitious. As of today, DHAN Foundation, who supports the smallholder farmers in Tamil Nadu, manages the contributions and the payouts using **paper notebooks** and **paper envelopes of cash**. Their process is well proven and would be an immediately useful blockchain project. It has to interoperate with _Machu_ either via Cosmos or PolkaDot, or via a Chainlink oracle. This is the challenging part. This subject contains also a lot of potential side projects to handle incentives, to interface with Mobile money, to produce reporting tools that measures social impacts etc.

## Potential Bootcamp Final Projects
Here is a list of challenges that a blockchain programmer may want to address, to contribute to _Machu-Picchu_:
*	MVP of the _Machu_ blockchain (basics): setting, modifying and querying the locations, simulating the interface with the other blockchains (damage assessment received from _Picchu_, the contribution and payment from and to the IBISA ERM);
*	Reputation and incentive management of the _Picchu_ blockchain (DeFi);
*	ERC-20 fungible reputation token management on the _Picchu_ blockchain (minting, burning, DEX);
*	ERC-720 non-fungible token management of the culture fields on the _Machu_ blockchain (minting, burning);
*	ERC-20 fungible token management of the mutual risk sharing contribution and compensation on the _Machu_ blockchain;
*	Cosmos or PolkaDot interoperability bridge between _Machu_ and _Picchu_;
*	Mobile payment for the members to contribute and receive compensation;
*	Blockchain explorer of _Machu_ to report impact to donor institution, to analyse credit rating of members;
*	etc.
