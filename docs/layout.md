# How the frame is put together

One grid, `.frame`, holds the whole page. Two columns on a wide screen,
the navigation and everything else. Below 60rem the two collapse into one
masthead and a stack, and below 34rem the masthead stacks as well.

## display:contents, and the trap in it

`.side` and `.body` group the page into columns. Below 60rem both are set
to `display:contents`, which removes their own boxes and promotes their
children to be grid items of `.frame` directly.

That is what makes the narrow layout possible. The menu's button can sit in
the masthead while the panel it opens spans the full width, which one
element could never do, because a single grid item cannot be in two places.

The trap is that it promotes **everything** those wrappers held. Any child
without a column of its own auto-places into the first one, which is the
narrow column the wordmark sits in. The result looks like a styling fault
rather than a placement one, so it is worth knowing the shape of it.

Three things have landed there so far:

- the panel the menu opens, which appeared inside the second column and
  stretched the wordmark's cell to match its height
- the home page's sections, which had no `main` around them and were each
  a grid item, squeezed into 13rem
- the footer, which sits beside `main` rather than inside it, and rendered
  as a small block in the corner

**So: anything added to `baseof.html` at the top level needs a
`grid-column` in both narrow blocks.** There is no default that is right.

## Do not size a column with auto

`main` spans both columns. A spanning grid item hands part of its
max-content to every track it covers, so an `auto` track grows with the
width of everything on the page rather than with its own contents. The
wordmark's column resolved to 750px of a 959px window that way.

It is `minmax(0,13rem)`, which holds the 11rem the wordmark caps at.

## The panel that opens over the content

The menu's panel is `position:absolute` with `left` and `right` set and no
`top`. With `top` left alone it keeps the vertical position it would have
had in flow, so nothing has to know how tall the masthead is, which
changes when the tagline rewraps.

Its width matches the button's rather than the page's, and the button's
bottom corners square while it is open, so the two read as one piece
folding out rather than as a second section appearing.

## Related

`docs/memory/details-accordion-animation.md` in the site repository covers
the menu's own mechanics: animating a `details` element in both engines,
the parity that colours each level, and why exclusivity is scoped to a
parent rather than a level.
