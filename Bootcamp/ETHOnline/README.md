# Overview of the Hackathon
This sub-repo stores the project _Machu-Picchu_ limited to the hackathon "ETHOnline 2020".
## Organisation
Here is the work plan I'd propose for the ETHOnline hackathon:
* _Principle_: use the blockchain to make a distributed crop risk sharing tool, that answers the need of more than 500M farmers worldwide, need that is not satisfied until now;
* _Use Earth Observation and blockchain_ to reduce drastically the costs, which existing insurance could not do for the past 40 years;
* _Reuse my EO web app_ using Earth Observation data, as McGyver-Hack (https://ibisa.users.earthengine.app/view/mcgyver-h);
* _Model the whole workflow_ of farmers contributing to the decentralised pot, watchers assessing the loss, calculation of the compensation, plus an account explorer;
* _Always have something that can be shown_ at the end of every week.

## Work Plan
![Work Plan](https://github.com/Machu-Pichu/Top-Level/blob/master/Bootcamp/ETHOnline/20200922%20Hackathon-workplan.png)
* _week 0_: I've already hacked the special [Earth Observation McGyver for the hackathon](https://ibisa.users.earthengine.app/view/mcgyver-h), with 4 farmers only; organise the github sub-repo inside Machu-Picchu; prepare the presentation video. I'm beta tester of mmhmm (https://www.youtube.com/watch?v=c8KhKBLoSMk);
* _week 1_: we hack a simplistic dApp, split it into 3 dApps to ease work of 2 sub-teams, composed of a  primary developer and 2 backups; we deploy already the backend on a testnet and the frontend on IPFS [(see here: https://www.youtube.com/watch?v=ADoRVVOSpI8)](https://www.youtube.com/watch?v=ADoRVVOSpI8) to get ready;
* _week 2_: we sync and integrate every weekend, we keep the result on testnet and IPFS (I volunteer for that...);
* _week 3_: no more development, we fine-tune the presentation video and we debug.

After the hackathon, of if we go fast enough in the hackathon, we could also
* change the ETH by a ERC-20 fungible token to represent the contributions and the pay-outs;
* replace the farmers by "groups" of farmers, which is closer to the actual process. The fields of groups are assessed as a whole, which avoids the "moral hazard" where someone does sloppy agriculture because the solidarity will cover their bad practices;
* start using IPFS to store voluminous and slow changing data.

## Specs of the simplistic dApp
In the simplistic dApp, we start with the 10 defults accounts created by Ganache. We associate 4 of them with 4 farmers out of 310 from Tamil Nadu. We associate the 5th with the common pot. We use ETH for transactions to simplify coding. We associate 3 more with 3 watchers. We keep the last 2 as spares.

The coordinates of the 4 farmers are  (random draw)
* _GPS lon-lat_: Kongampatti (78.44255E  10.098403N)
* _GPS lon-lat_: Eranampatti (77.2866674E 9.8735079N)
* _GPS lon-lat_: (Saralaipatti CRC (78.287029E  10.416399N)
* _GPS lon-lat_: Combai (77.3265196E  9.8114495N)

These coordinates are used to fill a dedicated McGyver Earth Observation web app that will be used for the demo by watchers. [DONE](https://ibisa.users.earthengine.app/view/mcgyver-h)

# [Overall User Story](https://github.com/Machu-Pichu/Top-Level/blob/master/Bootcamp/ETHOnline/README-2.md)


# [User Story and Architecture of the "Farmer" (Contribution) dApp](https://github.com/Machu-Pichu/Top-Level/blob/master/Bootcamp/ETHOnline/Farmer/README.md)


# [User story and architecture of the "Watcher" (Assessment) dApp](https://github.com/Machu-Pichu/Top-Level/blob/master/Bootcamp/ETHOnline/Watcher/README.md)
...

## User story and architecture of the "Enabler" dApp
This one is the Compensation Calculation and Payout as well as Account Explorer dApp
