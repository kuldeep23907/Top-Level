# User Story - "Member" (Contribution) dApp
## Long-Term "Member" User Story
A Member in _Machu-Picchu_ is either a farmer, a breeder or anyone who is directly depending on the health of a crop and needs to share this kind of risk. A Member is represented by an Ethereum EOA (Externally Owned Account) that itself has a Smart Contract holding Member-specific data. The data can be blockchain data or a hash to a file/record in IPFS.

To enhance solidarity and reduce "moral hazard", the loss of a Member is assessed for a group instead of individually. The damage compensation is calculated as function of the group loss, modulated by the individual "merit" of the Member, and modulated with a bonus based on the Watcher preputation of the chief of village of the Member.

The Member owns this personal data in the sense of GDPR's "data controller". The Member can invalidate all or part of it or rewrite it. If a service (like health, education, gender equality, child protection, good agricultural practices etc.) needs a data, it may ask the Member to add the information in this set of personal data.

### Data Model
In the Long-Term, a Member is represented by the following data:
* total of the Member contributions to the common pot since the Member is registered
* day of registration of the Member, to calculate the average contribution effort, the merit
* GPS coordinates of the centre of the field to be monitored
* 160 bit account number of the related group (used to do group damage assessment by the Watchers).
* 160 bit account number of the related village (used to calculate the damage compensation).

## Hackathon "Member" User Story
### Data Model
In the Hackathon, a Member is represented by the following data:
* total of the Member contributions to the common pot since the Member is registered
* day of registration of the Member, to calculate the average contribution effort, the merit
* GPS coordinates of the centre of the field to be monitored
* there is no group in the hackathon
* 160 bit account number of the related village (used to calculte the damage compensation)

In the Hackathon, there will be 4 Members who are "bootstrapped" from the 310 paying farmers in Tamil Nadu. See [Member](https://github.com/Machu-Pichu/Top-Level/tree/master/Bootcamp/ETHOnline#specs-of-the-simplistic-dapp). Each farmer will have a "merit" based on a fake history of past contributions (like the memories of the "replicants" in _Blade Runner_)

The common risk-sharing pot is also bootstrapped with a value that is consistent with the fake history of the Members.

### Functional Model
The JavaScript form will show a list of members. Selecting a member will show the GPS coordinates.
* are the lat-long editable?
* do you feel like showing a Google Maps API call to show the location? like this?
```html
<html>
<head>
<title>example embedded map</title>
</heac>
<body>
<!-- Kongampatti, Tamil Nadu (10.098403, 78.44255) -->
<iframe src="https://maps.google.com/maps?q=10.098403, 78.44255&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>
</body>
</html>
```
The other data are displayed but should not be editable.

There is a field to enter the contribution of the month, in ETH (we'll do the token version if we have time). The date of contribution is not relevant since what is important is what is available in the common pot to support the unlucky Members, and how much each Member have contributed.

### Calculation of Merit
The Merit of a Member is the running monthly average contribution of the Member to the pot. [See example here](https://github.com/Machu-Pichu/Top-Level/blob/master/Bootcamp/ETHOnline/Farmer/20200923%20Example%20Merit.xlsx).

_Suggestion: maybe the average should be limited to a sliding window, so that the merit decays in time. The law of decay will be defined later, after the hackathon, and after discussion with the true field actors._

## [Back to the Hackathon root README](https://github.com/Machu-Pichu/Top-Level/blob/master/Bootcamp/ETHOnline/README.md)
