(function () {
  var KEY = 'ff-theme';
  var themes = { day: 'light', night: 'dark', system: 'system' };

  function getStored() {
    try {
      return localStorage.getItem(KEY) || 'system';
    } catch (e) {
      return 'system';
    }
  }

  function setStored(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {}
  }

  function isDark() {
    var t = getStored();
    if (t === 'night') return true;
    if (t === 'day') return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function apply() {
    document.documentElement.classList.toggle('dark', isDark());
  }

  function setTheme(theme) {
    setStored(theme);
    apply();
    document.dispatchEvent(new CustomEvent('themechange', { detail: theme }));
  }

  // Init on load
  apply();
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (getStored() === 'system') apply();
    });
  }

  window.ffTheme = { setTheme: setTheme, getTheme: getStored };
})();
