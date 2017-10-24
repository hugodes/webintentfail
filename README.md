## How to reproduce the error:

Launch the app (on anrdoid)

Launch the file explorer and use the share button to open the file in the "WebIntent" app.

The console will read:

````
vendor.js:57857 Native: tried calling WebIntent.getIntent, but the WebIntent plugin is not installed.

vendor.js:57857 Native: tried calling WebIntent.onIntent, but the WebIntent plugin is not installed.
(anonymous) @ VM150:1
vendor.js:57863 Install the WebIntent plugin: 'ionic cordova plugin add com-darryncampbell-cordova-plugin-intent'
main.js:195 t {__zone_symbol__state: false, __zone_symbol__value: "plugin_not_installed"}
main.js:196 {error: "plugin_not_installed"}
````
