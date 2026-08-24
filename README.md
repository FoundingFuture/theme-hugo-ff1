# FoundingFuture I

A Hugo theme for a site with a lot to say and one screen to say it on.

Topics nest as deep as the content directory does, and the menu follows
without a line of configuration. Each topic carries a colour that means the
same thing wherever it appears. Rows that open are set in small capitals, so
the lettering says which way is deeper. Two small scripts run, both of them
for finding things, and the pages work without either.

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
without JavaScript follows. The narrowing is a script; the tag pages are not.

**One thing will stop it working silently.** If your site's config lists
`taxonomy` or `term` in `disableKinds`, the tag pages are never built and
nothing reports it. Remove them:

```toml
disableKinds = ["rss", "sitemap"]   # not "taxonomy", not "term"
```

## Finding things

A site with a lot of pieces has one real problem, which is getting a reader
to the one they want. Six things address it, and none of them needs
configuring.

**Search.** Give a page `layout: search` in its front matter and it becomes
one. The index is built at build time and written out as its own file, so
the page stays small and nothing is fetched until the reader opens it.
Titles and tags outrank body text, and several words narrow rather than
widen.

```yaml
---
title: "Search"
layout: search
---
```

**Near this.** Under each piece, up to four others that share its tags,
ranked by how much they share. Tune it with a `[related]` block in your
config, or leave it, because the theme ships one.

**Previous and next.** Reading straight through a topic, rather than going
back to the list each time.

**On this page.** A piece with three headings or more folds out its own
contents. Fewer than three is not a shape worth showing.

**A link to every heading.** Hover a heading and a `#` appears, so any part
of a long piece can be sent to someone.

**Everything further down.** A topic lists its own pieces, then the pieces
in its subtopics beneath them, each labelled with where it came from. A
reader on a topic page sees the whole topic, not just its top layer.

Sitemaps and feeds are Hugo's, and the theme leaves them switched on. If
your config lists `sitemap` or `rss` in `disableKinds`, they are not built.

## The line at the foot

One line, at the foot of the viewport, carrying your site's name, its
tagline and its domains. A short page still puts it on the screen's last
line.

Replace it by writing your own at `layouts/partials/footer.html`. Hugo
uses yours instead, with nothing to configure. Crediting Hugo and this
theme is one thing you might put there:

```html
<footer class="foot">
  <span>This website was generated using
    <a href="https://gohugo.io/">Hugo</a> and the
    <a href="{{ site.Params.themeURL }}">FoundingFuture&nbsp;I</a> theme.</span>
</footer>
```

The theme does not ship that line itself. Attribution you cannot remove
is not a courtesy, and the licence does not ask for one.

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

