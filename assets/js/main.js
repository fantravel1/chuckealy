/* ==========================================================================
   CHUCKEALY.COM — Main JavaScript
   Mobile nav, scroll animations, counters, language switcher, particles
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- DOM Ready ---------- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNav();
    initMobileNav();
    initScrollAnimations();
    initCounters();
    initParticles();
    initLangSwitcher();
    initScrollToTop();
  }

  /* ---------- Navigation Scroll Effect ---------- */
  function initNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var scrolled = false;

    function onScroll() {
      var shouldAdd = window.scrollY > 50;
      if (shouldAdd !== scrolled) {
        scrolled = shouldAdd;
        nav.classList.toggle('scrolled', scrolled);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile Navigation ---------- */
  function initMobileNav() {
    var toggle = document.querySelector('.nav__toggle');
    var mobileNav = document.querySelector('.mobile-nav');
    if (!toggle || !mobileNav) return;

    var isOpen = false;

    toggle.addEventListener('click', function () {
      isOpen = !isOpen;
      toggle.classList.toggle('active', isOpen);
      mobileNav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    var links = mobileNav.querySelectorAll('.mobile-nav__link');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        isOpen = false;
        toggle.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) {
        isOpen = false;
        toggle.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- Scroll Animations (Intersection Observer) ---------- */
  function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger-children');
    if (!animatedElements.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: show all
      animatedElements.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Animated Counters ---------- */
  function initCounters() {
    var counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(function (el) {
        el.textContent = el.getAttribute('data-counter');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function animateCounter(el) {
    var target = el.getAttribute('data-counter');
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 2000;
    var startTime = null;

    // Parse numeric value
    var numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
    var hasDecimal = target.indexOf('.') !== -1;
    var decimalPlaces = hasDecimal ? target.split('.')[1].length : 0;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * numericTarget;

      if (hasDecimal) {
        el.textContent = prefix + current.toFixed(decimalPlaces) + suffix;
      } else {
        el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  /* ---------- Hero Particles ---------- */
  function initParticles() {
    var container = document.querySelector('.hero__particles');
    if (!container) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var count = window.innerWidth < 768 ? 15 : 30;

    for (var i = 0; i < count; i++) {
      var particle = document.createElement('div');
      particle.classList.add('hero__particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (6 + Math.random() * 6) + 's';
      particle.style.width = (1 + Math.random() * 2) + 'px';
      particle.style.height = particle.style.width;
      container.appendChild(particle);
    }
  }

  /* ---------- Language Switcher ---------- */
  function initLangSwitcher() {
    var btn = document.querySelector('.nav__lang-btn');
    var dropdown = document.querySelector('.nav__lang-dropdown');
    if (!btn || !dropdown) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    document.addEventListener('click', function () {
      dropdown.classList.remove('open');
    });

    dropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  /* ---------- Scroll to Top ---------- */
  function initScrollToTop() {
    var btn = document.querySelector('.scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
