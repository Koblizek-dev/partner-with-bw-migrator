/**
 * Partner microsite — dynamic & interactive (RULE.md compliant).
 * Menu toggle, scroll header, active nav, reveal animations, form feedback.
 * Page load animation, slower reveals, enhanced interactivity.
 */
(function () {
  'use strict';

  var nav = document.getElementById('main-nav');
  var toggle = document.querySelector('.menu-toggle');
  var header = document.querySelector('.site-header');

  // ---------- Page load: trigger hero stagger animation ----------
  function triggerPageLoad() {
    requestAnimationFrame(function () {
      document.body.classList.add('page-loaded');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', triggerPageLoad);
  } else {
    triggerPageLoad();
  }

  // ---------- Mobile menu ----------
  if (nav && toggle) {
    function openMenu() {
      nav.classList.add('is-open');
      toggle.classList.add('is-active');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
    }

    function closeMenu() {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }

    toggle.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) closeMenu();
      else openMenu();
    });

    var closeBtn = nav.querySelector('.nav-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // ---------- Scroll: header shadow ----------
  if (header) {
    function onScroll() {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- Active nav link based on scroll position ----------
  var navLinks = document.querySelectorAll('.nav a[href^="#"]');
  var sections = document.querySelectorAll('section[id]');

  function setActiveNav() {
    var scrollY = window.scrollY;
    var innerHeight = window.innerHeight;
    var threshold = innerHeight * 0.35;

    var currentId = null;
    sections.forEach(function (section) {
      var top = section.getBoundingClientRect().top + scrollY;
      var height = section.offsetHeight;
      if (scrollY >= top - threshold && scrollY < top + height - threshold) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === '#') return;
      var id = href.slice(1);
      if (id === currentId) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  }

  if (navLinks.length && sections.length) {
    window.addEventListener('scroll', setActiveNav, { passive: true });
    setActiveNav();
  }

  // ---------- Reveal on scroll (Intersection Observer) ----------
  var revealSelectors = [
    '.benefit-card',
    '.way-card',
    '.reality-box',
    '.reality-card',
    '.reality-involve',
    '.incentive-box',
    '.capacity-card',
    '.feature-card',
    '.two-col-content',
    '.hero-content',
    '.hero-visual',
    '.incentive-callout',
    '.section-title',
    '.section-divider-inner'
  ];

  var revealElements = [];
  revealSelectors.forEach(function (sel) {
    try {
      var elms = document.querySelectorAll(sel);
      elms.forEach(function (el) {
        if (!el.classList.contains('reveal-in-view')) {
          el.classList.add('reveal-in-view');
          revealElements.push(el);
        }
      });
    } catch (e) {}
  });

  if (revealElements.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.06 }
    );
    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

})();
