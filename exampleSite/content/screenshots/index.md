---
title: "Screenshots"
date: 2026-08-01
description: "The theme carrying real content, photographed as it stands."
params:
  kind: "pictures"
---

Every picture below is this site. Click one to see it full size.

{{< gallery >}}
front.png  | The front page, two topics open
depth.png  | Three levels down, the tree open beside it
piece.png  | One piece: contents, headings, previous and next
search.png | Search part way through a query
tags.png   | Tags after one click, dead ends gone
narrow.png | At 430 pixels, the rail folded into a bar
{{< /gallery >}}

That is the `gallery` shortcode. Put the pictures in the page's own folder
beside its `index.md` and name them one per line.

```
{{</* gallery */>}}
front.png | The front page
depth.png | Three levels down
{{</* /gallery */>}}
```

Hugo cuts the thumbnails and the full-size copies, both as WebP. Clicking a
thumbnail sets the fragment and CSS shows the picture: no script, back
closes it, and the link to any one picture can be sent to somebody.
