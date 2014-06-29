# Everything Titanium using the <abbr title="Command Line Interface">CLI</abbr>

These are the slides of the [TiConf](http://ticonf.org/) Amsterdam 2014 about using CLI tools in the Titanium world.

## starting the presentation

install dependancies:

    $ npm install

run the command:

    $ node index.js

Do not run it on a public server. Do not type crap in the in-slides embedded terminals - all the commands are streamed to the term backend and executed on the host using your `user`.

## Generating a PDF

Generating a PDF can be achieved using Google Chrome (Print / Destination = "Save as PDF"). The generated PDF must be shrinked if too large - use [OSX Quartz filters for downsampling the embedded images](http://meyerweb.com/eric/thoughts/2010/02/25/better-pdf-file-size-reduction-in-os-x/).

A sample generated document is [available at Speakerdeck](https://speakerdeck.com/xavierlacot/monitor-your-app-a-complete-panel-of-titanium-monitoring-solutions).

## Credits and acknowledgements

The slides are based on [shwr.me](http://shwr.me), a html, CSS and javascript based presentation engine, and also use [term.js](https://github.com/chjj/term.js/) to embed term access directly within the slides. Both shwr and term.js have been slightly modified to behave respectfully eachother (keystrokes captures, etc.). Syntax highlight is done through [prismjs](http://prismjs.com).

Images: Xavier Lacot (license [Creative Common Attribution-NonCommercial-ShareAlike 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/)).
Gif animations: [http://giphy.com](http://giphy.com)
