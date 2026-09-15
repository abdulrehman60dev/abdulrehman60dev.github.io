/* ===================================================================
   Abdul Rehman — Portfolio  ·  vanilla JS
   Theme toggle (localStorage) · mobile menu · scroll reveal · nav shadow
=================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---- Theme ---------------------------------------------------- */
  var STORAGE_KEY = 'ar-theme';
  var toggle = document.getElementById('themeToggle');

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function currentIsDark() {
    var t = root.getAttribute('data-theme');
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return systemPrefersDark();
  }
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  // Load saved preference (fail-safe if storage is blocked)
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') applyTheme(saved);
  } catch (e) { /* ignore */ }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentIsDark() ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
    });
  }

  /* ---- Mobile menu ---------------------------------------------- */
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('is-open');
    mobileMenu.hidden = true;
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }
  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.hidden = false;
    // allow the element to render before animating class (keeps it simple: no anim needed)
    mobileMenu.classList.add('is-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      if (mobileMenu && mobileMenu.classList.contains('is-open')) closeMenu();
      else openMenu();
    });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }
  // Close mobile menu if resized up to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 820) closeMenu();
  });

  /* ---- Nav shadow on scroll ------------------------------------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 8) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Scroll reveal -------------------------------------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: just show everything
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Footer year ---------------------------------------------- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
