Self-hosted webfont. Nothing is fetched from Google at page load, so no
visitor IP reaches a third party.

  instrument-sans-latin.woff2  Instrument Sans (variable: wght 400-500)
                               SIL Open Font License 1.1
                               https://github.com/Instrument/instrument-sans

                                      SIL Open Font License 1.1
                                      https://github.com/IBM/plex

These nine feed the "Deeper than the universe" card, replacing its Google
Fonts request. Same latin subset the card's own markup already uses.

The display face, Asimovian, is not here. The wordmark and icon ship as
outlines in logo.svg and icon.svg, so no display font loads at runtime.
Asimovian lives in ../../assets/fonts/ as a build input for
scripts/build-logo.py.
