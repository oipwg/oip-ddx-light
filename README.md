### Install instructions

If not done so already, [install yarn here](https://yarnpkg.com/en/docs/install#debian-stable).

`git clone git@github.com:oipwg/oip-ddx-light.git`

`cd oip-ddx-light`

`yarn install`

##### These next two steps are temporary until branch gets merged into master
`yarn remove js-oip`

`yarn add oipwg/js-oip#oip5-apis`

##### Run

`yarn dev`


### Important!!
You need to set the url of the OIPdaemon the web app will target in the `config.json` at the root
of the project.

The daemon must be oip5 compatible otherwise it will throw errors or you will not receive any records
or templates back.

### Config
Currently the config allows you to set the URL of the OIPdaemon and a template filter. 
To use the template filter, add the template identifiers you want this app to target. The template operator
config can be set to either **AND** or **OR**. This specifies whether you want the filter to get 
each filter or any one of them.

