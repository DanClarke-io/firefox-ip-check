var { ToggleButton } = require('sdk/ui/button/toggle');
var base64 = require("sdk/base64");
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var button = ToggleButton({ id: "obt-show-ip", label: "Show IP", onChange: handleChange, icon: {"16": "./icon-16.png", "32": "./icon-32.png", "64": "./icon-64.png"} });
var panel = panels.Panel({ onHide: handleHide });
const {Cc,Ci} = require("chrome");

if (!Date.now) { Date.now = function() { return new Date().getTime(); } }
tabs.on('ready', function(tab) { handleChange(button.state('window')); });

function getLocation(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    }
}

function handleHide() { button.state('window', {checked: false }); }
function handleChange(state) {

	var intDNS = getLocation(tabs.activeTab.url);
	var cls = Cc['@mozilla.org/network/dns-service;1'];
	var iface = Ci.nsIDNSService;
	var dns = cls.getService(iface); //dns object

	var nsrecord = dns.resolve(intDNS.hostname, true); //resolve hostname
	var localDNS = nsrecord.getNextAddrAsString(); //here you are
	console.log(localDNS);


	if(tabs.activeTab.url.indexOf('#from-ip-check')==-1) {
		var finalURL = "http://a.mby.me/ipcheck/?site="+base64.encode(tabs.activeTab.url)+'&time='+Math.round(+new Date()/1000)+'&ip='+localDNS+'&version='+self.version;
		console.log(finalURL)
		if (state.checked) {
			panel.contentURL = self.data.url(finalURL);
			panel.show({ position: button });
		}
	}
}