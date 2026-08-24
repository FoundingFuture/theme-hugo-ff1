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

## Tags

Tag a piece in its front matter and the theme does the rest.

```yaml
tags: [materials, precision, temperature]
```

`/tags/` lists every tag. Pick one and the pieces narrow; pick another and
they narrow again. A tag that appears in none of what is left drops away,
which is what makes the next click obvious. The selection is in the URL, so
a narrowed view can be sent to someone.

Every tag is also a real page at `/tags/<tag>/`, and that is what a browser
without JavaScript follows. The narrowing is the only script in the theme.

**One thing will stop it working silently.** If your site's config lists
`taxonomy` or `term` in `disableKinds`, the tag pages are never built and
nothing reports it. Remove them:

```toml
disableKinds = ["rss", "sitemap"]   # not "taxonomy", not "term"
```

## Making it yours

The theme ships a plain wordmark. Put your own at
`layouts/partials/wordmark.html` in your site and Hugo will use it instead.
Nothing else needs overriding to look like your own.

## Licence

MIT for the theme. The typefaces travel under the SIL Open Font License, and
their licences ship beside them in `static/fonts/`.

## Working on the theme

`docs/layout.md` explains how the frame is put together, and the two things
that have caught every layout fault so far: `display:contents` promoting
every child to a grid item, and an `auto` column growing with a spanning
item rather than with its own contents.

Read it before adding anything to `baseof.html`.

