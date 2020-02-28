# Big Zillow Map

Ironically, this Real Estate website doesn't seem to care about the real estate of their page layout... so I built a **`Firefox WebExtension`** to fix it. :smile:

## What it does

It adds a button to hide the side bar and top nav bar. This **doubles** the size of the map area!

## How does it work?

- it injects a content script declaratively using manifest.json
- it adds a button to the DOM to run the function

When called:

- it selects elements to hide
- it removes those nodes from the DOM
- it resizes the map content

## Install it here!

- https://addons.mozilla.org/en-US/firefox/addon/big-map-zillow/
