---
title: FoundingFuture I
---

{{< lead >}}A Hugo theme for a site with a lot to say. The menu is your content tree, the search runs without a server, and nothing on the page comes from anywhere but your own domain.{{< /lead >}}

{{< columns >}}
Set `theme` and build. Nothing here asks you to rename a folder or fill in a
parameter first. The menu on the left is `site.Home.Sections`, so whatever
directories you already have become the navigation, at whatever depth they
go. Add one tomorrow and it appears by itself.

A folder holding `_index.md` is a section and shows up. A folder holding
`index.md` is a page, and the files beside it are its downloads. That is
Hugo's own distinction, not one this theme invented, and it is the whole of
what you need to know to control the menu.

{{< pull >}}Rows that open are set in small capitals, so the lettering says which way is deeper.{{< /pull >}}

#### Built to be read, not skimmed

Type is set for a lot of text on one screen. Rows are dense, the line
measure is short enough to track, and the topic colours mean the same thing
on every page they appear.

The small capitals are drawn rather than scaled. A browser asked to fake
them shrinks the capitals and leaves the stroke weight behind, which is why
a faked label looks uneven. This one holds one weight from end to end.
{{< /columns >}}

{{< items >}}
Search | no server | An index built at compile time, fetched once, ranked by title and tag before body text
Tags | narrowing | Pick one, then another; tags that match nothing left drop away, and the selection lives in the URL
Near this | related | Under each piece, the ones sharing its tags, ranked by how much they share
On this page | contents | A piece with three headings or more folds out its own shape
Further down | recursive | A topic lists its subtopics' pieces too, so its page shows the whole topic
Previous and next | reading | Straight through a topic, rather than back to the list each time
Every heading | anchored | Hover one and take its link, so a long piece can be sent by the paragraph
Every word | i18n | Ship your own en.toml and Hugo merges it over the theme's, one key at a time
Six faces | self-hosted | Served from your domain. No CDN, no third-party request, nothing to consent to
No framework | plain CSS | Two small scripts, both for finding things. Every page works without them
{{< /items >}}
