### Install instructions

If not done so already, [install yarn here](https://yarnpkg.com/en/docs/install#debian-stable).

`git clone git@github.com:oipwg/oip-ddx-light.git`

`cd oip-ddx-light`

`yarn install`

##### Run

`yarn dev`

### Important Config Settings!

Set your privateKey (wif) `config.js` at the root level of the project folder to send tips and see balance.

You can optionally set the url of the OIPdaemon the web app will target in the `config.js` at the root
of the project.

The daemon must be oip5 compatible otherwise it will throw errors or you will not receive any records
or templates back. Our hosted endpoint can be found at https://api.oip.io/oip

To use the template filter, add the template name `(tmpl_XXXXXXXX)` you want this app to target. The template operator
config can be set to either **AND** or **OR**. This specifies whether you want the filter to get
each filter or any one of them.

Comments in config.js for each variable.

###ALSO IMPORTANT (PLEASE READ)
This app has been developed really quickly and misses a lot of user-friendly features and is in beta. It's core purpose is
to be functional. For error checking, please refer to the console in the browser inspector.

Currently in the Publisher tab you can only publish RECORD TEMPLATES>>>BUT>>>If you click 'templates' in
the explorer tab, you will see a list of 'template cards'. Each card has two buttons on the bottom of it. Bottom left
is a fork for extending that template. If you click this it will open up a template publisher that allows you
to publish a template that EXTENDS the clicked template. If you click the cloud upload icon you will open up a publisher modal
that allows you to publish a record USING the specified template.

NOTE: In the top right corner of each template card
is a clickable icon that allows you to select multiple templates. As soon as at least one is pressed, you will see two
buttons appear at the button right of the screen. These buttons allow you to publish a template that extends
all templates selected or allows you to publish a record using the fields from all specified templates.

When you publish a template or a record CHECK THE CONSOLE LOGS for success and error messages. If successful, you will
receive back a txid. If error, it will leave a stack trace with hopefully some error messages that probably only I or Bitspill could debug
at the moment.

Last note: to see an updated list of templates/record, REFRESH. It currently only pulls records/templates on startup or
on search.
