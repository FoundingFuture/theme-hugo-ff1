---
title: "A clock on film"
kind: "video"
description: "What an escapement looks like at speed, and what it costs to show you."
date: 2026-08-24
tags: [precision]
---

An escapement is easier to watch than to describe. This is the theme's
`embed` shortcode, which is a picture and a play button until you press it.

{{< embed at="youtube" id="aqz-KE-bpKQ" title="Big Buck Bunny, the Blender Foundation's open film" >}}

Nothing above came from YouTube. The poster was fetched once when this site
was built and is served from this domain, so the page costs a page's worth
of requests. Press play and the player loads, from
`youtube-nocookie.com`, and only then.

With scripting off the poster is a plain link to the original, which is what
you wanted anyway if the player was not going to run.

```
{{</* embed at="youtube" id="aqz-KE-bpKQ" title="…" */>}}
{{</* embed at="soundcloud" id="https://soundcloud.com/user/track" */>}}
```

SoundCloud works the same way. Its poster and title come from the track's
oEmbed record at build time.
