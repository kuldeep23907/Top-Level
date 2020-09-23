# User Story - "Watcher" (Assessment) dApp
## Long-Term "Watcher" User Story
A Watcher in _Machu-Picchu_ is anyone who participates to the crowdsourced assessment of the vegetation health of a location. Loss Assessment is done by "group" of fields forming an area of interest instead of being done individually per farmer. The reasons of this grouping are:
1. Weather conditions of closely neighbouring fields are very correlated
2. Assessing several farmers at a same time leverages the work of a Watcher.
3. Assessing several farmers together enhances the spirit of solidarity and reduces the "moral" risk of bad practice when being insured: a "bad" farmer surrounded by well performing neighbours will not be compensated even if his/her field is not well cultivated.

In Tamil Nadu, the area to be assessed is 2 km wide covering up to several hundred fields. In Niger, the area is 5 km wide. The "reputation" of a watcher depends on the long-tem accuracy and on the regularity of the job done. Maintaining the reputation without any central authority is a topic for DeFi (Decentralised Finance).

In _Machu-Picchu_ a Watcher can be a chief of village or an independent Watcher. If the Watcher is a chief of village, the reputation of this watcher is taken into account as a bonus to calculate the damage compensation to the related village.

A Watcher needs to stake a certain amount of tokens in order to perform a loss assessment on a location. At the end of the month, all assessments are merged and a common result is decided on. The stakes are then refunded, plus or minus an amount depending on the performance of the Watcher. The closer (resp. farther) is the assessment from the result of the whole community, the higher the reputation tokens earned (resp. lost).

Like the Member, the Watcher owns this personal data in the sense of GDPR's "data controller". The Watcher can invalidate all or part of it or rewrite it.

### Data Model
In the Long-term, a Watcher is represented by the following personal data:
* number of reputation token owned
* number of reputation tokens staked for the month
* 160 bits account number of the related village (chief of village) or nil

For each assessment the following data is kept for a Watcher
* Month of assessment
* GPS coordinates of a location
* Percentage of damage as assessed by the Watcher
* Number of staked reputation tokens for this location
* Percentage of damage as assessed by the whole community

## Hackathon "Watcher" User Story
### Data Model
In the Hackathon, the reputation token is at first the ETH, and will be done with a token if time permits. A Watcher is represented by the following personal data:
* number of ETH owned
* number of ETH staked for the month

In the Hackathon, for each assessment the same data as above is kept for a Watcher. A location has only one farmer instead of several.

### Functional Model
The JavaScript form will show a list of members. Selecting a member will show the GPS coordinates (not modifiable) and the damage assessment (to be filled). The names and locations are identical to the ones already in the satellite Earth Observation display app McGiver.

The Watcher may select a month of assessment. Then it is possible enter the damage assessments all for the same month and store them temporarily. It is possible to review and compare all assessments. Then the Watcher can commit.

_Question: can the Watcher commit the assessment is there is still one location not assessed?_ I'd say yes.

In the Hackathon, when all watchers have committed their assessments, the campaign of the month is considered "closed" and the calculation of damage compensation may start.

## [Back to the Hackathon root README](https://github.com/Machu-Pichu/Top-Level/blob/master/Bootcamp/ETHOnline/README.md)
