// Swap a poster for the real player, once, when somebody asks for it.
// Without this the poster is a link to the original, which still works.
(function () {
  document.querySelectorAll('.embed[data-src]').forEach(function (box) {
    var cover = box.querySelector('.cover');
    if (!cover) return;
    cover.addEventListener('click', function (e) {
      e.preventDefault();
      var f = document.createElement('iframe');
      f.src = box.dataset.src;
      f.title = box.dataset.title || 'Embedded player';
      f.loading = 'lazy';
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.setAttribute('allowfullscreen', '');
      f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      box.textContent = '';
      box.appendChild(f);
      box.classList.add('playing');
    });
  });
})();
