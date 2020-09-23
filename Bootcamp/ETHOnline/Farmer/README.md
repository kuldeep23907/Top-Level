# User Story - "Member" (Contribution) dApp
## Long-Term "Member" User Story
A Member in _Machu-Picchu_ is either a farmer, a breeder or anyone who is directly depending on the health of a crop and needs to share this kind of risk. A Member is represented by an Ethereum EOA (Externally Owned Account) that itself has a Smart Contract holding Member-specific data. The data can be blockchain data or a hash to a file/record in IPFS. 

The Member owns this personal data in the sense of GDPR's "data controller". The Member can invalidate all or part of it or rewrite it. If a service (like health, education, gender equality, child protection, good agricultural practices etc.) needs a data, it may ask the Member to add the information in this set of personal data.

## Hackathon "Member" User Story
### Data Model
In the Hackathon, a Member is represented by the following data:
* total of the Member contributions to the common pot since the Member is registered
* day of registration of the Member, to calculate the average contribution effort, the merit
* GPS coordinates of the centre of the field to be monitored.

In the Hackathon, there will be 4 Members who are "bootstrapped" from the 310 paying farmers in Tamil Nadu. See [Member](https://github.com/Machu-Pichu/Top-Level/tree/master/Bootcamp/ETHOnline#specs-of-the-simplistic-dapp).

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
The other data are displayed but not editable.

There is a field to enter the contribution, in ETH (we'll do the token version if we have time)

### Calculation of Merit
The Merit of a Member is the running monthly average contribution of the Member to the pot.
