/* ==========================================================
   Portfolio scripts - Kirti Vishvakarma
   1 Theme toggle | 2 Mobile menu | 3 Active link | 4 Reveal
   5 Back to top | 6 Footer year | 7 Safety checks
   No libraries. Works on GitHub Pages without a build step.
   ========================================================== */

(function () {
  'use strict';

  // Tells the CSS that JavaScript is running (so reveal animations are only used when they can finish)
  document.documentElement.classList.add('js');

  var root = document.documentElement;

  /* ---------- 1. THEME TOGGLE ----------
     The first theme is set by a small script in <head> (saved choice, else system preference). */
  var themeBtn = document.getElementById('theme-toggle');

  function updateThemeLabel() {
    var isDark = root.getAttribute('data-theme') === 'dark';
    themeBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  if (themeBtn) {
    updateThemeLabel();
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: ignore */ }
      updateThemeLabel();
    });
  }

  /* ---------- 2. MOBILE MENU ---------- */
  var menuBtn = document.getElementById('menu-toggle');
  var navLinks = document.getElementById('nav-links');

  function setMenu(open) {
    navLinks.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      setMenu(!navLinks.classList.contains('open'));
    });
    // Close the menu after a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });
    // Close with the Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        setMenu(false);
        menuBtn.focus();
      }
    });
  }

  /* ---------- 3. ACTIVE LINK WHILE SCROLLING ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var links = document.querySelectorAll('.nav-links a');

  function setActive(id) {
    links.forEach(function (a) {
      var match = a.getAttribute('href') === '#' + id;
      a.classList.toggle('active', match);
      if (match) { a.setAttribute('aria-current', 'true'); } else { a.removeAttribute('aria-current'); }
    });
  }

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { setActive(entry.target.id); }
      });
    }, { rootMargin: '-45% 0px -50% 0px' }); // the section crossing the middle of the screen is "active"
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 4. SCROLL REVEAL (cards only) ---------- */
  var revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (el) { revealer.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- 5. BACK TO TOP BUTTON ---------- */
  var toTop = document.getElementById('to-top');

  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 6. FOOTER YEAR ---------- */
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }

  /* ---------- 7. SAFETY CHECKS ----------
     a) Remove any link that is still a placeholder (empty, "#", or contains [BRACKETS]),
        so the page never shows a dead button.
     b) If an image file is missing, show a neutral box instead of a broken-image icon. */
  document.querySelectorAll('.project-links a, .cert a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').trim();
    if (href === '' || href === '#' || href.indexOf('[') !== -1) { a.remove(); }
  });
  document.querySelectorAll('.project-links').forEach(function (box) {
    if (!box.children.length) { box.remove(); }
  });

  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () { img.style.visibility = 'hidden'; });
  });
})();
