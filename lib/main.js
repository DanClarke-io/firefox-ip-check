var { ToggleButton } = require('sdk/ui/button/toggle');
var base64 = require("sdk/base64");
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var button = ToggleButton({ id: "obt-show-ip", label: "Show IP", onChange: handleChange, icon: {"16": "./icon-16.png", "32": "./icon-32.png", "64": "./icon-64.png"} });
var panel = panels.Panel({ onHide: handleHide });

if (!Date.now) { Date.now = function() { return new Date().getTime(); } }
tabs.on('ready', function(tab) { handleChange(button.state('window')); });

function handleHide() { button.state('window', {checked: false }); }
function handleChange(state) {
	if(tabs.activeTab.url.indexOf('#from-ip-check')==-1) {
		var finalURL = "http://a.mby.me/ipcheck/?site="+base64.encode(tabs.activeTab.url)+'&time='+Math.round(+new Date()/1000)+'&version='+self.version;
		if (state.checked) {
			panel.contentURL = self.data.url(finalURL);
			panel.show({ position: button });
		}
	}
}