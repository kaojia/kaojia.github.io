/* ============================================
   Jenny Kao — Personal Website Scripts
   ============================================ */

// ---------- NAVBAR SCROLL EFFECT ----------
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---------- HERO PARALLAX MOUSE TRACKING ----------
(function initHeroParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const layers = hero.querySelectorAll('[data-speed]');
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;
  const lerp = 0.08; // smoothing factor — lower = smoother

  function onMouseMove(e) {
    const rect = hero.getBoundingClientRect();
    // Normalize to -1 … +1 from center
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  }

  function onMouseLeave() {
    // Ease back to center
    targetX = 0;
    targetY = 0;
  }

  function animate() {
    // Lerp toward target
    currentX += (targetX - currentX) * lerp;
    currentY += (targetY - currentY) * lerp;

    layers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-speed')) || 0.03;
      const maxPx = 60; // max pixel displacement
      const dx = currentX * speed * maxPx * 20;
      const dy = currentY * speed * maxPx * 20;
      layer.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    rafId = requestAnimationFrame(animate);
  }

  hero.addEventListener('mousemove', onMouseMove);
  hero.addEventListener('mouseleave', onMouseLeave);

  // Also support touch on mobile
  hero.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      onMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
    }
  }, { passive: true });

  hero.addEventListener('touchend', onMouseLeave);

  // Start animation loop
  rafId = requestAnimationFrame(animate);

  // Cleanup on page hide (optional perf)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    } else if (!document.hidden && !rafId) {
      rafId = requestAnimationFrame(animate);
    }
  });
})();

// ---------- MOBILE NAV TOGGLE ----------
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  // Animate hamburger
  const spans = navToggle.querySelectorAll('span');
  if (navMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile menu on link click
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// ---------- ACTIVE NAV LINK ----------
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  const scrollY = window.scrollY + 200;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-menu a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ---------- SCROLL ANIMATIONS ----------
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.section-label, .section-title, .section-subtitle, ' +
    '.about-text, .btn-outline, .stat-card, ' +
    '.project-card, .exp-card, .skill-item, ' +
    '.quote-text, .quote-author, ' +
    '.contact-left, .contact-right, ' +
    '.news-mini-card'
  );

  elements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

// ---------- COUNTER ANIMATION ----------
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'));
          const duration = 1500;
          const start = performance.now();

          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased);
            if (progress < 1) {
              requestAnimationFrame(update);
            }
          }

          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(c => observer.observe(c));
}

// ---------- FORM HANDLER ----------
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Message Sent! ✓';
  btn.style.background = '#10b981';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}

// ---------- SMOOTH SCROLL FOR ANCHOR LINKS ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  animateCounters();
  updateActiveNav();

  // Language toggle button
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }

  // CRM country tab switching
  const crmTabs = document.getElementById('crmTabs');
  if (crmTabs) {
    crmTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.crm-tab');
      if (!tab) return;
      // Update active tab
      crmTabs.querySelectorAll('.crm-tab').forEach(t => t.classList.remove('crm-tab--active'));
      tab.classList.add('crm-tab--active');
      // Filter rows
      const country = tab.getAttribute('data-country');
      document.querySelectorAll('.crm-row').forEach(row => {
        const countries = row.getAttribute('data-country') || '';
        row.style.display = countries.includes(country) ? '' : 'none';
      });
    });
  }
});
