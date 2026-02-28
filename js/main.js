// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.main-nav-mobile');
  if (!toggle || !mobileNav) return;
  toggle.addEventListener('click', function () {
    var willOpen = mobileNav.classList.toggle('hidden') === false;
    toggle.setAttribute('aria-expanded', String(willOpen));
    mobileNav.setAttribute('aria-hidden', String(!willOpen));
    toggle.textContent = willOpen ? '✕' : '☰';
  });
})();

// Theme buttons: click + highlight active
(function () {
  document.querySelectorAll('.theme-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var t = this.getAttribute('data-theme');
      if (window.ffTheme) window.ffTheme.setTheme(t);
    });
  });
})();

// Theme buttons: highlight active
(function () {
  function highlightActive() {
    var current = (window.ffTheme && window.ffTheme.getTheme()) || 'system';
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-theme') === current;
      btn.classList.toggle('active', isActive);
      btn.classList.toggle('bg-amber-500', isActive);
      btn.classList.toggle('text-white', isActive);
      btn.classList.toggle('dark:bg-amber-500', isActive);
      btn.classList.toggle('dark:text-gray-900', isActive);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightActive);
  } else {
    highlightActive();
  }
  document.addEventListener('themechange', highlightActive);
})();
