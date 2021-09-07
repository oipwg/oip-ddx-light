# Technical approach
OIP stores public index data in the metadata field of transactions in the Public Index Network (formerly Florincoin) blockchain and currently uses IPFS for file storage and distribution and Bitcoin, RVN & PIN for payments. 

Architecturally, OIP separates protocol layer logic from application layer logic by providing get/post/await API endpoints for interacting with index data scraped from the blockchain by the OIP daemon (written in Go) and stored in a local ElasticSearch database, and allowing applications to differentiate their own experience functionality using the open source reference libraries contained in DDX (Decentralized Database of ‘X’). DDX was built using react and redux and has a MongoDB user database. It currently has a very bare bones interface, but it's been used to make demo platforms for viewing video content, web comics, news articles, scientists and organizations. 

Many OIP records include entirely public data, with no limits on who has access to view them, but some include commercial terms under which the content must be unlocked before a user can access its media. OIP and DDX currently support three kinds of content unlocks 1) sending a direct cryptocurrency payment of a minimum amount, 2) proving that you hold a designated token on the Ravencoin network, or 3) sending a streaming payment via the Web Monetization Standard on Interledger. 

OIP requires a publishing fee to be paid for a record to be valid. The fee goes to the miner of the block in which the record is confirmed. The fee helps to support the health and defense of the blockchain upon which the index data depends. For non-commercial records, the fee is equal to the minimum tx fee required for the transaction to be mined. For commercial records, the fee is equal to the price of the content. For example, if a video costs $0.25, the publishing fee would also be $0.25, and if a music album is $9.99, so is the publishing fee. 

For this project, we propose to 1) add both transparent & shielded Zcash payments to unlock content to the OIP daemon 2) build a Zcash branded web app (Ztube) for content distribution with private payments, and 3) build upon [Zcash’s past work with ZEC-BTC atomic swaps](https://news.bitcoin.com/engineers-demonstrate-zcashbitcoin-atomic-swaps/) to integrate ZEC into a PIN-based DEX so that ZEC token holders can publish content to the public index and avoid additional KYC/AML hurdles involved in joining another exchange. 

![](https://raw.githubusercontent.com/oipwg/oip-ddx-light/master/ZcashIntegrationOIPPlatformDataFlow.jpg)
**Phase 1:**

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
