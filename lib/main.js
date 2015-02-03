var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var base64 = require("sdk/base64");
var button = ToggleButton({
	id: "mozilla-link",
	label: "Show IP",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
	onChange: handleChange
});
if (!Date.now) { Date.now = function() { return new Date().getTime(); } }
var panel = panels.Panel({
  onHide: handleHide
});

function handleChange(state) {
    console.log(tabs.activeTab.url);
    console.log(base64.encode(tabs.activeTab.url));
    console.log(Math.round(+new Date()/1000));
    var finalURL = "http://a.mby.me/ipcheck/?site="+base64.encode(tabs.activeTab.url)+'&time='+Math.round(+new Date()/1000);
    console.log(finalURL);
    if (state.checked) {
        panel.contentURL = self.data.url(finalURL);
        panel.show({
            position: button
        });
    }
}

function handleHide() {
  button.state('window', {checked: false});
}