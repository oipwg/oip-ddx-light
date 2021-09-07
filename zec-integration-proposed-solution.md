# Proposed Solution
To live freely, we need to be able to speak, share and transact in both private and public. We propose to add interoperability with Zcash to the Open Index Protocol specification. 

Open Index Protocol is a layer two specification for how to index information in a fully decentralized way. It currently uses the Public Index Network (formerly Florincoin) to store public metadata, initially used BitTorrent & currently uses IPFS for file storage and distribution, and uses BTC, RVN & PIN for payments. Here are some demos of other projects that have used it:

* [Property records - Medici demo](https://www.youtube.com/watch?v=EA8Qshjqs_E)
* [Influencer content - Streambed demo](https://www.youtube.com/watch?v=60sYPGWol5c)
* [News - Al Bawaba demo](https://www.youtube.com/watch?v=imnOPo588rM)
* [Scientific Records - Caltech demo](https://www.youtube.com/watch?v=6kzAk79w7PI)
* [Music with Purchases - Alexandria Proof of Concept](https://www.youtube.com/watch?v=ri68oXYjVkI)
* [Publisher module with support for many media types - Alexandria Proof of Concept](https://www.youtube.com/watch?v=RZv7OmSvaNA)

We would like to integrate Zcash with OIP — initially for private payments to unlock indexed information, and ultimately to create private indexing of information using the Zcash encrypted memo field. We broke the work into 2 phases, our thinking is that the work to integrate private payments will give us experience working with Zcash so that we are prepared to do the more difficult work of building private indexing as a second effort. 

We propose to begin by integrating Zcash shielded payments for content unlocks, creating a Zcash branded YouTube-like content viewing & publishing web app that uses Zcash to unlock content, and integrating ZEC into OIP's DEX to streamline the user experience. The web app will be open source and documented so it can be forked and reskinned by anyone to make their own web app. The documentaries, videos and other media that have been commissioned by ZOMG could be distributed via this platform, the creators could fork it to make their own distribution platform, or they could do both. 

Further, most web apps have some kind of content distribution aspect, so even if it is not their primary purpose, components of what we build could be used by them as well. For example, while Zcash can facilitate the payments side of an ecommerce site, product photos and pricing could be indexed in OIP. Additionally, many NFTs depend on the web to store GIFs and JPEGs, OIP can decentralize the storage of these assets as well.



**Phase 1:**
By the end of this project, a YouTube-like platform (we’ve been calling it Ztube as a working title, but would love community ideas) will be released with the following minimum feature list:

- Grid & list view of videos, sorted by release-date or popularity
- Content creator pages, with their bio and all of their videos
- Ability to publish videos and set terms under which they can be viewed, with options of unrestricted public distribution, paid subscribers-only*, paid vod.
- Creators can provide their own thumbnails and descriptive meta data 
- Creators will be able to verify themselves on other social media platforms so their followers can be assured of the authenticity of their content

*We have heard private assets on Zcash will be released soon ("Shielded Assets") and would like to implement this option for content unlocks as well (we already support public NFTs on RVN). This is not an official part of our proposal at this time as we will need to see the relase and learn more about it before we can evaluate the work involved.
 
Additionally, we’ll create 4 videos, released as part of our [What Kind of Internet Do You Want? series] (https://www.youtube.com/channel/UCwR-u1AGVYre-vBYskIklrg):

-  2 videos detailing our experience working with Zcash 
(see [Web Monetization series](https://youtu.be/RVCGVitPdvs) for example)
- 1 interview video with someone from the Zcash community 
(see [interviews with Stefan Thomas, BostWiki, Bailey Reutzel, Dr. Robert Epstein & Michael Casey](https://www.youtube.com/channel/UCwR-u1AGVYre-vBYskIklrg/videos) for examples 
- 1 video about our experience with the ZOMG process 
(See [video about our work with Grant for the Web](https://youtu.be/9_b-31014XY) for example) 

**Phase 2:** To be discussed after phase 1, please see technical approach section for details about using Zcash shielded payments encrypted memo field to extend OIP’s capabilities to private groups. 

