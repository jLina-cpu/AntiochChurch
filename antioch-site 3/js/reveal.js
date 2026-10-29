/**
 * reveal.js — Scroll-triggered fade-in animations
 *
 * Any element with class .reveal starts invisible (defined in CSS).
 * When it enters the viewport, this script adds .visible,
 * which triggers the CSS transition (opacity + translate → none).
 *
 * Direction modifiers (also set in CSS):
 *   .from-left  — slides in from the left
 *   .from-right — slides in from the right
 *   (default)   — slides up from below
 *
 * Uses IntersectionObserver for performance —
 * no scroll event listeners, no layout thrashing.
 */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add .visible to trigger CSS animation
        entry.target.classList.add('visible');

        // Stop observing once animated — it only needs to run once
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.10,            // trigger when 10% of element is visible
    rootMargin: '0px 0px -40px 0px'  // 40px early trigger from bottom
  }
);

// Observe every element that wants to animate in
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
