// Search over a JSON index Hugo wrote at build time. No library, no network
// beyond the one index fetch, and no work at all until the reader types.
(function () {
  var main  = document.querySelector('main[data-index]');
  var box   = document.getElementById('q');
  var hits  = document.getElementById('hits');
  var tally = document.getElementById('tally');
  if (!main || !box || !hits || !tally) return;

  var all = [], total = 0, ready = false;

  fetch(main.dataset.index)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      all = data;
      total = data.length;
      ready = true;
      if (box.value) run();          // typed while the index was still loading
    })
    .catch(function () {
      tally.textContent = 'The index did not load.';
    });

  // A term is worth more in a title than in the body, so a piece about the
  // word outranks a piece that merely mentions it. Tags count as titles,
  // because a tag is a deliberate label rather than incidental prose.
  function score(page, terms) {
    var t = page.t.toLowerCase(),
        s = (page.s || '').toLowerCase(),
        d = (page.d || '').toLowerCase(),
        b = page.b.toLowerCase(),
        g = (page.g || []).join(' ').toLowerCase(),
        n = 0;
    for (var i = 0; i < terms.length; i++) {
      var q = terms[i], one = 0;
      if (t.indexOf(q) === 0) one += 12;      // starts the title
      else if (t.indexOf(q) > -1) one += 8;
      if (g.indexOf(q) > -1) one += 6;
      if (s.indexOf(q) > -1) one += 3;
      if (d.indexOf(q) > -1) one += 2;
      if (b.indexOf(q) > -1) one += 1;
      if (!one) return 0;                     // every term must appear
      n += one;
    }
    return n;
  }

  function row(page) {
    var a = document.createElement('a');
    a.className = 'row';
    a.href = page.u;
    var d = document.createElement('span');
    d.className = 'd';
    d.textContent = page.n;
    a.appendChild(d);
    var t = document.createElement('span');
    t.className = 't';
    t.textContent = page.t;
    if (page.s) {
      var em = document.createElement('em');
      em.textContent = page.s;
      t.appendChild(em);
    }
    a.appendChild(t);
    return a;
  }

  function run() {
    var terms = box.value.toLowerCase().split(/\s+/).filter(Boolean);
    hits.textContent = '';

    if (!terms.length) {
      tally.textContent = total + ' pieces';
      return;
    }
    if (!ready) {
      tally.textContent = 'Loading the index…';
      return;
    }

    var found = [];
    for (var i = 0; i < all.length; i++) {
      var n = score(all[i], terms);
      if (n) found.push([n, all[i]]);
    }
    found.sort(function (a, b) { return b[0] - a[0]; });

    var frag = document.createDocumentFragment();
    for (var j = 0; j < found.length; j++) frag.appendChild(row(found[j][1]));
    hits.appendChild(frag);

    tally.textContent = found.length === 0 ? 'Nothing matches that.'
                      : found.length === 1 ? '1 piece'
                      : found.length + ' pieces';
  }

  box.addEventListener('input', run);

  // A query in the URL, so a search can be linked to.
  var q = new URLSearchParams(location.search).get('q');
  if (q) { box.value = q; run(); }
})();
