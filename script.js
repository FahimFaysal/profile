/* ============================================
   script.js — Portfolio interactions
   ============================================ */

(function () {
  'use strict';

  /* ── Theme toggle ── */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon   = themeToggle.querySelector('.theme-icon');
  const stored      = localStorage.getItem('theme');

  function applyTheme(theme) {
    document.body.classList.toggle('light', theme === 'light');
    themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
  }
  applyTheme(stored || 'dark');

  themeToggle.addEventListener('click', () => {
    const next = document.body.classList.contains('light') ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });

  /* ── Navbar scroll effect ── */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* ── Mobile hamburger ── */
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksEl.classList.toggle('open');
  });

  // Close on nav-link click
  navLinksEl.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinksEl.classList.remove('open');
    });
  });

  /* ── Typed text animation ── */
  const phrases = [
    'Principal Software Engineer',
    'Software Architect',
    'Engineering Leader',
    'Full-Stack Developer',
    'Cloud & DevOps Enthusiast',
  ];
  const typedEl = document.getElementById('typedText');
  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  let pausing   = false;

  function type() {
    if (pausing) return;
    const current = phrases[phraseIdx];

    if (deleting) {
      charIdx--;
      typedEl.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        pausing = true;
        setTimeout(() => { pausing = false; tick(); }, 400);
      } else {
        tick(60);
      }
    } else {
      charIdx++;
      typedEl.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        pausing = true;
        setTimeout(() => {
          pausing = false;
          deleting = true;
          tick(80);
        }, 2000);
      } else {
        tick(charIdx === 1 ? 300 : 80);
      }
    }
  }

  function tick(delay = 80) {
    setTimeout(type, delay);
  }

  tick(600);

  /* ── Scroll-reveal (custom AOS) ── */
  const animatedEls = document.querySelectorAll('[data-aos]');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        // Stagger siblings in the same parent grid
        const siblings = Array.from(entry.target.parentElement.children).filter(
          (c) => c.hasAttribute('data-aos')
        );
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('aos-visible');
        }, idx * 80);
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  animatedEls.forEach((el) => revealObserver.observe(el));

  /* ── Footer year ── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Contact form (client-side validation, Formspree-ready) ── */
  const form       = document.getElementById('contactForm');
  const statusEl   = document.getElementById('formStatus');
  const submitBtn  = document.getElementById('submitBtn');

  const validators = {
    firstName : (v) => v.trim().length >= 2 || 'First name is required.',
    lastName  : (v) => v.trim().length >= 2 || 'Last name is required.',
    email     : (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please enter a valid email.',
    subject   : (v) => v.trim().length >= 3 || 'Subject is too short.',
    message   : (v) => v.trim().length >= 20 || 'Message must be at least 20 characters.',
  };

  function validateField(name, value) {
    const result = validators[name] ? validators[name](value) : true;
    return result === true ? null : result;
  }

  form.querySelectorAll('input, textarea').forEach((el) => {
    el.addEventListener('blur', () => {
      const err = validateField(el.name, el.value);
      el.classList.toggle('error', !!err);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = '';
    statusEl.className = 'form-status';

    // Validate all fields
    let hasError = false;
    const data = {};
    form.querySelectorAll('input, textarea').forEach((el) => {
      const err = validateField(el.name, el.value);
      el.classList.toggle('error', !!err);
      if (err) { hasError = true; }
      data[el.name] = el.value;
    });

    if (hasError) {
      statusEl.textContent = 'Please fix the errors above.';
      statusEl.className = 'form-status error';
      return;
    }

    // Swap to a real Formspree endpoint: action="https://formspree.io/f/YOUR_ID"
    const endpoint = form.action && form.action !== window.location.href
      ? form.action
      : null;

    if (!endpoint) {
      // Demo mode — simulate success
      submitBtn.disabled = true;
      submitBtn.querySelector('span').textContent = 'Sending…';
      await new Promise((r) => setTimeout(r, 1200));
      statusEl.textContent = '✅ Message sent! (Demo mode — add your Formspree endpoint to activate.)';
      statusEl.className = 'form-status success';
      form.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = 'Send Message';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending…';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        statusEl.textContent = "✅ Message sent! I'll get back to you soon.";
        statusEl.className = 'form-status success';
        form.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch {
      statusEl.textContent = '❌ Something went wrong. Please try again or email directly.';
      statusEl.className = 'form-status error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = 'Send Message';
    }
  });

})();
