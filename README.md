# FoundingFuture I

A Hugo theme for a site with a lot to say and one screen to say it on.

Topics nest as deep as the content directory does, and the menu follows
without a line of configuration. Each topic carries a colour that means the
same thing wherever it appears. Rows that open are set in small capitals, so
the lettering says which way is deeper. Nothing here runs a script.

## What it expects

- Hugo 0.146 or newer, extended not required
- Sections under `content/topics/`, at any depth
- `params.tagline` for the line beside the wordmark

## Making it yours

The theme ships a plain wordmark. Put your own at
`layouts/partials/wordmark.html` in your site and Hugo will use it instead.
Nothing else needs overriding to look like your own.

## Licence

MIT for the theme. The typefaces travel under the SIL Open Font License, and
their licences ship beside them in `static/fonts/`.
