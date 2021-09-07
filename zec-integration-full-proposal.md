# Zcash + Open Index Protocol Integration
**In addition to private finances, to live freely we need public & private spaces online protected by code rather than terms of service.** 

# Applicant background
Hi, we’re Amy & Devon James. We had the idea for using a blockchain to index metadata with file and value transfer addresses to facilitate completely decentralized media distrubution in 2014 and built the first implementation with Ryan Taylor (Web Developer, formally at ECC & Livestreamer for Zcash Foundation). We released the first decentralized client in Spring 2015 and quickly learned no one really cared about information censorship online yet. We also saw that the project was being pigeon-holed as a “decentralized YouTube” rather than an index of everything, so we shifted focus to other use-cases that would show the specification is for all kinds of data, with an initial focus on public data. In 2016 we changed the name of the project from “The Decentralized Library of Alexandria” to “Open Index Protocol” (OIP) on the advice of Sir Tim Berners-Lee after our presentation at the Decentralized Web Summit. Bitspill is a co-founder of Alexandria Labs, the Lead Protocol Developer and has been working with us since 2017.

We’ve worked with large and small companies as well as government and academic institutions on data ranging from scientific records, to influencer content, to property records, to news. Here is a [list of project highlights & links to apps and demos.](https://docs.google.com/document/d/1UEYtFvRbArr7rF-DgrrhyNnKz-Vpbn-N5VwoLUt-KVM/edit)

Also, this exciting news just came out -  [NYC property records will be published to OIP](https://www.coindesk.com/policy/2021/08/05/new-york-city-to-explore-blockchain-for-preventing-deed-fraud-in-land-sales/), building on [our work with Wyoming & Overstock subsidiary Medici Land Governance.](https://www.coindesk.com/markets/2018/12/21/wyoming-county-moves-to-put-land-records-on-blockchain/)

# Description of Problem or Opportunity
There are not decentralized public and private spaces on the web. 

Information access and communication on the web is dominated by siloed, centralized spaces like YouTube, Reddit & Twitter where it is common practice to censor information, demonetize creators, and prevent people from communicating both privately and publicly. 

To solve this, private finances & private spaces need to be interoperable with public transactions and a public space. 
The ZOMG white paper says “the time to take back our freedom is now” - we agree. When we began working on an uncensorable pubic index in 2014, no one thought that censorship or demonetization would become a serious problem. 

Now censorship is a frequent topic of YouTube videos as well as main stream media segments, the US government has been discussing changes to section 230, OnlyFans flipflopped on their terms because of payment processor pressure, and apps like Rumble, BitChute, Signal & Telegram prove users want privacy & freedom. While these new platforms profess to offer freedom, it isn’t baked into the technical design so they are still vulnerable. If a new platform gets big enough or experiences some kind of controversy, they will likely face pressure from payment processors, server hosts, CDNs or domain registrars.

# Proposed Solution
To live freely, we need to be able to speak, share and transact in both private and public. Private finances & private spaces need to be interoperable with public transactions and a public space.

We propose to add interoperability with Zcash to Open Index Protocol (OIP) - initially for private payments to unlock indexed information, and ultimately to create private indexing of information using the Zcash encrypted memo field. In Phase 1 of our work, we'll also build a Zcash branded Youtube-style web app we've been calling "Ztube."

OIP is an open source specification for a fully decentralized worldwide index and file library for data publishing, file distribution and facilitating direct payments. Here are some demos of other projects using it:

* [Property records - Medici demo](https://www.youtube.com/watch?v=EA8Qshjqs_E)
* [Influencer content - Streambed demo](https://www.youtube.com/watch?v=60sYPGWol5c)
* [News - Al Bawaba demo](https://www.youtube.com/watch?v=imnOPo588rM)
* [Scientific Records - Caltech demo](https://www.youtube.com/watch?v=6kzAk79w7PI)
* [Music with Purchases - Alexandria Proof of Concept](https://www.youtube.com/watch?v=ri68oXYjVkI)
* [Publisher module with support for many media types - Alexandria Proof of Concept](https://www.youtube.com/watch?v=RZv7OmSvaNA)

We propose to begin by 1) integrating Zcash shielded payments for content unlocks, 2) creating a Zcash branded YouTube-like content viewing & publishing web app that uses Zcash to unlock content, and 3) integrating ZEC into OIP's DEX to streamline the user experience. 

The web app will be open source and documented so it can be forked and reskinned by anyone to make their own web app. The documentaries, videos and other media commissioned by ZOMG could be distributed via this platform, the creators could fork it to make their own distribution platform, or they could do both. 

Further, most web apps have some kind of content distribution aspect, so even if it is not their primary purpose, components of what we build could be used by them as well. For example, while Zcash can facilitate the payments side of an ecommerce site, product photos and pricing could be indexed in OIP. Additionally, many NFTs depend on the web to store GIFs and JPEGs, OIP can decentralize the storage of these assets as well.

*We broke the work into 2 phases, our thinking is that the work to integrate private payments will give us experience working with Zcash so that we are prepared to do the more difficult work of building private indexing as a second effort.*

**Phase 1:**
By the end of this project, a YouTube-like platform (we’ve been calling it Ztube as a working title, but would love community ideas) will be released with the following minimum feature list:

- Grid & list view of videos, sorted by release-date or popularity
- Content creator pages, with their bio and all of their videos
- Ability to publish videos and set terms under which they can be viewed, with options of unrestricted public distribution, paid subscribers-only*, paid vod.
- Creators can provide their own thumbnails and descriptive meta data 
- Creators will be able to verify themselves on other social media platforms so their followers can be assured of the authenticity of their content

*We have heard private assets on Zcash will be released soon ("Shielded Assets") and would like to implement this option for content unlocks as well (we already support public NFTs on RVN). This is not an official part of our proposal at this time as we will need to see the relase and learn more about it before we can evaluate the work involved.
 
Additionally, we’ll create 4 videos, released as part of our [What Kind of Internet Do You Want? series](https://www.youtube.com/playlist?list=PLmgfR0C8e5zmA1L_CJVi_CzSKCB0yd0r3):

-  2 videos detailing our experience working with Zcash 
(see [Web Monetization series](https://youtu.be/RVCGVitPdvs) for example)
- 1 interview video with someone from the Zcash community 
(see [interviews with Stefan Thomas, BostWiki, Bailey Reutzel, Dr. Robert Epstein & Michael Casey](https://www.youtube.com/playlist?list=PLmgfR0C8e5zmA1L_CJVi_CzSKCB0yd0r3) for examples 
- 1 video about our experience with the ZOMG process 
(See [video about our work with Grant for the Web](https://youtu.be/9_b-31014XY) for example) 

**Phase 2:** To be discussed after Phase 1 - please see technical approach section for details about using Zcash shielded payments encrypted memo field to extend OIP’s capabilities to private groups. 

# Solution Format 
We’ll deliver open source code and documentation to run “Ztube” on a web server, including:

- “Ztube”, a Zcash branded YouTube style web application, written in html, css & js, using react & redux with a MongoDB User Database.
- OIP daemon & ElasticSearch DB
- PIN QT full node & explorer
- Zcashd full node & Zcash explorer

The four videos will be released via:

- [YouTube](https://www.youtube.com/channel/UCwR-u1AGVYre-vBYskIklrg), [Instagram](https://www.instagram.com/amyofalexandria/) & Ztube (others TBD).
- Promoted on social media
- We will also give ZOMG mp4 files of the videos under a Creative Commons license **"Attribution: CC BY"**.

# Technical approach
OIP is a layer two specification for how to index information in a fully decentralized way. It uses the Public Index Network (formerly Florincoin) to store public metadata, initially used BitTorrent & currently uses IPFS for file storage & distribution, and uses BTC, RVN & PIN for payments.

Architecturally, OIP separates protocol layer logic from application layer logic by providing get/post/await API endpoints for interacting with index data scraped from the blockchain by the OIP daemon (written in Go) and stored in a local ElasticSearch database, and allowing applications to differentiate their own experience functionality using the open source reference libraries contained in DDX (Decentralized Database of ‘X’). DDX was built using react and redux and has a MongoDB user database. It currently has a very bare bones interface, but it's been used to make demo platforms for viewing video content, web comics, news articles, scientists and organizations. 

Many OIP records include entirely public data, with no limits on who has access to view them, but some include commercial terms under which the content must be unlocked before a user can access its media. OIP and DDX currently support three kinds of content unlocks 1) sending a direct cryptocurrency payment of a minimum amount, 2) proving that you hold a designated token on the Ravencoin network, or 3) sending a streaming payment via the Web Monetization Standard on Interledger. 

OIP requires a publishing fee to be paid for a record to be valid. The fee goes to the miner of the block in which the record is confirmed. The fee helps to support the health and defense of the blockchain upon which the index data depends. For non-commercial records, the fee is equal to the minimum tx fee required for the transaction to be mined. For commercial records, the fee is equal to the price of the content. For example, if a video costs $0.25, the publishing fee would also be $0.25, and if a music album is $9.99, so is the publishing fee.  

￼![](https://raw.githubusercontent.com/oipwg/oip-ddx-light/master/ZcashIntegrationOIPPlatformDataFlow.jpg)

**Phase 1:***We propose to add both transparent & shielded Zcash payments to unlock content to the OIP daemon, build a Zcash branded web app (Ztube) for content distribution & publishing with private payments, and build upon [Zcash’s past work with ZEC-BTC atomic swaps](https://news.bitcoin.com/engineers-demonstrate-zcashbitcoin-atomic-swaps/) to integrate ZEC into a PIN-based DEX so that ZEC token holders can publish content to the public index and avoid additional KYC/AML hurdles involved in joining another exchange.*


**OIP Record Unlocks using ZEC - enables platforms to unlock record content, giving users the option to send payments both privately & publicly.**
	
* Research the mechanics of the Zcash blockchain and available open source wallet and block explorer implementations. We’ve heard that the memo field of Zcash was inspired by the metadata field of the Public Index Network blockchain (formerly Florincoin), so we expect that much of our experience will carry over, but mastering the specifics of shielded transactions will require some new learning.
* Identify the best method for allowing a hosted platform to have limited access to the data within the shielded transaction to confirm that the correct payment amount was sent so that users do not need to run their own daemon. 
* Add both transparent & shielded Zcash payments to unlock content to the OIP daemon so the record unlock endpoint can check for Zcash transactions (see diagram above for where it fits in).

**Build Ztube, a Zcash branded YouTube-style content distribution application with full ZEC payments support, both transparent & shielded payments. Initial release will be for content consumption only, without publishing functionality.**

* Create new implementation of DDX & improve interface design, we intend to brand it for the Zcash community but are open to other ideas.
* Skin as an attractive and modern YouTube-like client for fully decentralized content distribution.
* Simplify content publishing UX.

**Add publishing functionality to Ztube**

* Develop interface for publishing with fields for video content, thumbnail, metadata, and distribution terms.
* Users can authenticate their content by connecting their publisher address to pre-existing social media accounts.

**Morphie DEX integration, add support for publishing fee payments made via ZEC.**

* We’re developing an open source DEX we call Morphie so that holders of other tokens can easily trade them to get PIN tokens for publishing. Initially it will go one way only, from other tokens to PIN tokens, to be used to pay publishing fees. It has no dependencies on centralized services, it will conduct the atomic trade at the protocol level and price each trade at the protocol level.
* Start with existing XCAT implementations and ZECs experimental work in this area and code a ZEC-PIN trading pair. As a fork of BTC, PIN already has the scripting functionality (time-locks & hash-locks) necessary. For this specific type of trade, we’ll use the metadata field in PIN transactions to let the PIN holder set their offer price, and then ZEC holders will have the choice to take/close any currently available offer.
* Morphie DEX is intended to be used alongside a hosted DDX content distribution platform with a built in content publishing interface (like Ztube). DEX functionality will be integrated into the publishing interface so that end users who want to publish content can easily use their existing Zcash balance for publishing fees without having to go to another site.


********************************************************************************************************************************************************
**Phase 2:** *To be discussed upon completion of Phase 1*

**Use Zcash shielded payments encrypted memo field to extend OIP’s capabilities into private groups.**

Enabling applications to read from both the public index data in PIN as well as the private index data in ZEC limited to applications/users who have cryptographic access to it - ie, the permissions aren’t controlled by settings, but by access to decryption keys. 

Many of the applications developed on OIP have some information which must not be made public (for example: personal identifying information connected to property records, or collaborative scientific research not yet ready for public release), and so far they’ve had to rely on centralized solutions to handle them - this work would let them decentralize both sets of data.

Using Zcashs encrypted memo field to create private spaces for information and content distribution with OIP opens the door to all kinds of applications. Historically, pornography leads the way with new technology and the recent drama with OnlyFans flipflopping on their terms of service shows the industry will be looking for new solutions and this functionality would meet their needs. It would also support more mainstream applications like a private and decentralized version of Google Docs or Google Sheets. 


# How big of a problem would it be to not solve this problem? 
Centralization and censorship on the web threatens privacy, information freedom, and freedom of speech. Online freedom is at stake and losing freedom online could threaten our ability to live freely in our real lives as well.

# Execution risks
We don’t have prior experience working with Zcash, so there could be unknowns in implementing shielded payments for content unlocks that cause delays. We’ve allocated time for research, and will draw on the experience of advisor Ryan Taylor as needed.


#Unintended Consequences 
Public content distribution and private payments could be used by criminals to attempt to distribute illegal content like underage pornography or pirated materials. However, evidence of these crimes will be available to prosecute them because the index is public and indelible. 

As horrifying as these threats can be, it’s important to remember these issues have been a concern with all new distribution technology, since the introduction of the printing press.

#Evaluation plan
- Each milestone has objective metrics for testing software development success and includes one video release.
  
	- 1: Project start
	- 2: Records can be unlocked using a shielded or transparent ZEC payment at the API level. Can be verified by anyone holding enough ZEC to send a required payment to unlock a record and reveal its encrypted content. Release first video.
	- 3. Records can be unlocked using a shielded or transparent ZEC payment via the Ztube interface. Can be verified by anyone holding enough ZEC to send a required payment to unlock a record and reveal its encrypted content. Release second video.
	- 4. PIN holders can publish video content via the Ztube interface. Can be verified by following the process to upload and describe the content and pay the publishing fee using PIN tokens. Release third video.
	- 5. ZEC holders can publish video content via the Ztube interface. Can be verified by following the process to upload and describe the content and pay the publishing fee using ZEC tokens. Release fourth video. 
	
- Once Ztube is in use, we can track:
    - Number of monthly active users
    - Amount of monthly payments to ZTube content creators


# Schedule and Milestones

**Milestone 1:** *Project start*

* Hire new developer, setup SOPs and remote workflow (~2 weeks)
* Research into open source wallet and block explorer implementations for Zcash (~2 weeks)
* Implement Zcash wallet functions into OIP’s Hierarchical-Deterministic Multi Wallet (~3 weeks)
* Develop & Publish a new OIP record template that defines terms for Zcash shielded payment unlocks (1-2 weeks)
* Add Zcash shielded payments to record unlock endpoint functionality (~3 weeks)

**Milestone 2 ( ~12 weeks into project):** *OIP Records can be unlocked using a shielded payment at the API level. This will be able to be verified by anyone holding enough ZEC to send a required payment to unlock a record and reveal its encrypted content. Release first video.*

* Implement a simple interface to allow users to send Zcash shielded payments for a locked record (~2 weeks)
* Design & implement a modern YouTube-style interface for our open source reference client, DDX (~6 weeks)

**Milestone 3 ( ~20 weeks into project):** *Release a Zcash branded modern YouTube-style platform for censorship-free media distribution. We’ll host this application on the web during the grant period so that anyone can verify its functionality, and the code will be available on GitHub for anyone who wishes to review or audit it. Release second video.*

* Design & implement a publishing side to the application, with resumable file uploads and a simple drop-zone based interface (~8 weeks)

**Milestone 4 ( ~28 weeks into project):** *Update platform with publishing functionality. Our hosted application will be updated with this functionality and anyone will be able to verify this by following the simple process to upload and describe a piece of content and pay its publishing fee using PIN tokens from a built in wallet. Release third video.*

* Develop & Publish a new OIP record template for PIN token trade open offers (1-2 weeks)
* Using the XCAT approach, implement a function for instantly swapping ZEC for available PIN tokens into OIP’s HDMW (~6 weeks)
* Design & implement an additional tab for the content publishing process, where users can trade for the PIN tokens required for their publishing fees using the ZEC already in their wallet or by sending to an address presented on screen with a QR code (~5 weeks)

**Milestone 5 ( ~41 weeks into project):** *Users can publish content to OIP and pay their publishing fees using the ZEC they already hold. Using the same hosted application, anyone will be able to verify this functionality by following the process to publish a piece of content and paying for its publishing fee using a ZEC shielded payment. When the record then shows up in the platform’s content list within the next few minutes, the user will then be able to inspect it to see the actual encoded data in the PIN blockchain, as well as the publishing fee attached to it, to confirm personally that it lives in a decentralized public index which cannot be censored. Release fourth video and publish all four videos to Ztube.*


# Budget 

We budget $46,584 per month for 9.5 months. This is based on 3 developers at an average of $11,219 per month, a part-time sysadmin at $500 per month, a video creator & project manager at $4000 per month, part-time production contractor at $2000 per month, a Zcash advisor at $200 per month, and 10% overhead. Our budget for each milestone is:

* Milestone 1: $129,526
* Milestone 2: $86,351
* Milestone 3: $86,351
* Milestone 4: $86,351
* Milestone 5: $53,969

The project total budget is: $442,548
