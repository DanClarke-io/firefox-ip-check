# Firefox Remote IP checker
This project uses PHP's `gethostbyname()` to show end users the IP address of their current web page.

## Usage
1. Install extension from [Firefox Add-ons site](https://addons.mozilla.org/en-US/firefox/addon/ip-check/), or download the [latest release](https://addons.mozilla.org/firefox/downloads/latest/584596/addon-584596-latest.xpi) and drag and drop the xpi file on Firefox
2. Browse to any webpage on the internet, and click the new "IP" button the top right
3. Enjoy!

## Installation
To manually build the extension bundle (.xpi) from the source you need to install the [Firefox Add-on SDK](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation). Then execute the command `cfx xpi` from the add-on’s directory:

	cfx xpi

This command will produce a file named `ip-check.xpi`. You can simply drag and drop it on Firefox to install the Add-on.

## Copyright

Copyright © 2015 Dan Clarke of [OverByThere](http://overbythere.co.uk). Free use of this software is granted under the terms of the [MPL License 2.0](https://www.mozilla.org/MPL/2.0/).

### Thanks to...
Thanks to [Mark Goodwin](https://github.com/mozmark), for getting me involved in Mozilla, and Firefox over the past few years.

Also, thanks to [asciidoctor](https://github.com/asciidoctor/asciidoctor-firefox-addon/blob/master/README.adoc) for the use of their readme as a template for ours.