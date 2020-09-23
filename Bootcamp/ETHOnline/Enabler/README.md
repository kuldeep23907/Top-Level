# User Story - "Enabler" (Contribution) dApp
## Long-Term "Enabler" User Story
This dApp is a catch-all dApp: it covers both the roles of an "Enabler", typically an NGO who helps the famers, and a Supervision Authority, who wants only an Account Explorer to make sure that the risk-sharing process works as advertised. 

An Enabler in _Machu-Picchu_ is any entity that interacts with the Members to help them. It can be an NGO (Non Governmental Organisation), a MFI (Micro-Finance Institute), a cooperative, a government development agency, a vendor of inputs (seeds, fertizers) or an international food company who buys the crop. Most often, the Enabler has its own ERM (Enterprise Resource Management) software. The latter can be centralised or can be itself based on the blockchain.

In the reality (outside of of _Machu-Picchu_), the Enabler is backed in final by a re-insurer. The reason is that the mechanism of mutual risk-sharing is a cost-effective way to protect Members from small risks that happen often. However for significant calamities that happen rarely, a mutual is not well fit to address such problems and, on the contrary, an insurer excels at this exercise. In the Bible, Genesis 41, the history of [the Pharaoh and the 7 fat cows](http://web.mit.edu/jywang/www/cef/Bible/NIV/NIV_Bible/GEN+41.html)  illustrates very well the role of an isurer in case of major catastrophy.

The dApp has at minimum a calculation of the damage compensation to be transferred to each farmer, and an account explorer to show that the calculated compensation has been transferred indeed.

The Enabler owns this personal data in the sense of GDPR's "data controller". The Enabler can invalidate all or part of it or rewrite it. If a service (like health, education, gender equality, child protection, good agricultural practices etc.) needs a data, it may ask the Member to add the information in this set of personal data.

## Hackathon "Enabler" User Story
### Data Model
In the Hackathon, a Enabler is represented by the following data:
* _TBD_

### Functional Model
_(to be refined)_
* when all Watchers have committed, a singleton Smart Contract is triggered and calculates the average damage assessment for each Member (in the true _Machu-Picchu_, this is done for each group of farmers instead of for single farmers)
* the average damage assessment of a Member (resp. group) is a weighted sum of all Watchers assessments, weighted by the stakes and the reputations.
* the compensation for a Member is a function of the loss, the individual "merit" and the "reputation" of the chief of village
* the common pot is triggered to transfer the amount to the account of the Member
* the Account Explorer shows the history of balance of each Member.

## [Back to the Hackathon root README](https://github.com/Machu-Pichu/Top-Level/blob/master/Bootcamp/ETHOnline/README.md)
