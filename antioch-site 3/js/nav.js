/**
 * nav.js — Shared navigation behaviour
 *
 * Responsibilities:
 *   1. Add .scrolled to <nav> after 60px of scroll
 *      (switches from transparent to frosted-glass)
 *   2. Toggle mobile menu open/close
 *   3. Mark the current page link as .active
 *   4. Language toggle (switches .lang-en on <body>)
 *
 * This file is loaded by every page. It expects the HTML
 * to already contain the nav and mobile-menu markup
 * (injected by nav-template.js or written in each page).
 */


/* ── 1. SCROLL BEHAVIOUR ──────────────────────────────────── */

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  // Add .scrolled once user scrolls past 60px
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true }); // passive improves scroll performance


/* ── 2. MOBILE MENU ───────────────────────────────────────── */

const mobileMenu = document.getElementById('mobileMenu');

function toggleMenu() {
  mobileMenu.classList.toggle('open');
}

// Close mobile menu when a link inside it is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});


/* ── 3. ACTIVE NAV LINK ──────────────────────────────────── */

// Mark whichever nav link matches the current URL as active
const currentPath = window.location.pathname;

document.querySelectorAll('.nav-links a').forEach(link => {
  // Normalise both paths (strip trailing slashes, handle index)
  const linkPath = new URL(link.href).pathname;

  if (
    linkPath === currentPath ||
    // Homepage: both /index.html and / match
    (currentPath === '/' && linkPath === '/index.html') ||
    (currentPath === '/index.html' && linkPath === '/')
  ) {
    link.classList.add('active');
  }
});


/* ── 4. LANGUAGE TOGGLE ──────────────────────────────────── */

let currentLang = localStorage.getItem('antioch-lang') || 'zh';
const langBtn   = document.getElementById('langBtn');

/**
 * Apply the saved language on page load.
 * Adds .lang-en to <body> when English is selected —
 * the CSS uses this class to show/hide [data-en] / [data-zh] spans.
 */
function applyLang(lang) {
  const isEn = lang === 'en';
  document.body.classList.toggle('lang-en', isEn);
  document.documentElement.lang = isEn ? 'en' : 'zh-TW';
  if (langBtn) langBtn.textContent = isEn ? '中文' : 'EN';
  currentLang = lang;
}

/** Called by the EN/中文 button in the HTML */
function toggleLang() {
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  localStorage.setItem('antioch-lang', newLang); // remember across pages
  applyLang(newLang);
}

// Apply on load so language persists when navigating between pages
applyLang(currentLang);
