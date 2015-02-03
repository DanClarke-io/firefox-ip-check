var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
console.log('active: ' + tabs.activeTab.url);
function myIP() {

    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://a.mby.me/ipcheck/?site=",false);
    xmlhttp.send();

    hostipInfo = xmlhttp.responseText.split("\n");

    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }

    return false;
}
var button = buttons.ActionButton({
	id: "mozilla-link",
	label: "Visit Mozilla Test"
	onClick: handleClick
});

function handleClick(state) {
	console.log('test');
	tabs.open("https://www.mozilla.org/");
}