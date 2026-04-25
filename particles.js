/* ============================================
   Hero Particle System
   — Particles gather toward mouse, scatter on leave
   — Connected by faint lines when close
   ============================================ */

(function () {
  const canvas = document.getElementById('heroParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // ---------- CONFIG ----------
  const PARTICLE_COUNT = 120;
  const CONNECT_DIST = 140;       // max distance to draw lines between particles
  const MOUSE_RADIUS = 250;       // attraction radius around cursor
  const ATTRACT_STRENGTH = 0.035; // how strongly particles are pulled toward mouse
  const RETURN_STRENGTH = 0.008;  // how strongly particles drift back to origin
  const FRICTION = 0.96;          // velocity damping
  const BASE_DRIFT = 0.15;        // gentle ambient drift speed
  const COLORS = [
    { r: 59, g: 130, b: 246 },   // blue
    { r: 139, g: 92, b: 246 },   // purple
    { r: 6, g: 182, b: 212 },    // cyan
    { r: 16, g: 185, b: 129 },   // green
    { r: 244, g: 63, b: 94 },    // rose
  ];

  let width, height, dpr;
  let particles = [];
  let mouse = { x: -9999, y: -9999, active: false };
  let rafId = null;

  // ---------- RESIZE ----------
  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // ---------- PARTICLE ----------
  function createParticle() {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const x = Math.random() * width;
    const y = Math.random() * height;
    return {
      x: x,
      y: y,
      originX: x,
      originY: y,
      vx: (Math.random() - 0.5) * BASE_DRIFT,
      vy: (Math.random() - 0.5) * BASE_DRIFT,
      radius: Math.random() * 2 + 1,
      color: color,
      alpha: Math.random() * 0.5 + 0.3,
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  // ---------- UPDATE ----------
  function update() {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      if (mouse.active) {
        // Distance to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          // Attract toward mouse — stronger when closer
          const force = (1 - dist / MOUSE_RADIUS) * ATTRACT_STRENGTH;
          p.vx += dx * force;
          p.vy += dy * force;
        }
      } else {
        // Return to origin
        const dx = p.originX - p.x;
        const dy = p.originY - p.y;
        p.vx += dx * RETURN_STRENGTH;
        p.vy += dy * RETURN_STRENGTH;
      }

      // Add gentle ambient drift
      p.vx += (Math.random() - 0.5) * BASE_DRIFT * 0.1;
      p.vy += (Math.random() - 0.5) * BASE_DRIFT * 0.1;

      // Apply friction
      p.vx *= FRICTION;
      p.vy *= FRICTION;

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Soft boundary — bounce back gently
      if (p.x < -20) p.vx += 0.3;
      if (p.x > width + 20) p.vx -= 0.3;
      if (p.y < -20) p.vy += 0.3;
      if (p.y > height + 20) p.vy -= 0.3;
    }
  }

  // ---------- DRAW ----------
  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECT_DIST) {
          const opacity = (1 - dist / CONNECT_DIST) * 0.15;
          // Blend colors of the two particles
          const cr = Math.round((a.color.r + b.color.r) / 2);
          const cg = Math.round((a.color.g + b.color.g) / 2);
          const cb = Math.round((a.color.b + b.color.b) / 2);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const { r, g, b } = p.color;

      // Glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha * 0.15})`;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha})`;
      ctx.fill();
    }
  }

  // ---------- LOOP ----------
  function loop() {
    update();
    draw();
    rafId = requestAnimationFrame(loop);
  }

  // ---------- EVENTS ----------
  const hero = document.getElementById('hero');

  function onMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  }

  function onMouseLeave() {
    mouse.active = false;
  }

  hero.addEventListener('mousemove', onMouseMove);
  hero.addEventListener('mouseleave', onMouseLeave);

  // Touch support
  hero.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.active = true;
    }
  }, { passive: true });
  hero.addEventListener('touchend', onMouseLeave);

  // Resize
  window.addEventListener('resize', () => {
    resize();
    // Re-scatter origins
    particles.forEach(p => {
      p.originX = Math.random() * width;
      p.originY = Math.random() * height;
    });
  });

  // Visibility
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    } else if (!document.hidden && !rafId) {
      rafId = requestAnimationFrame(loop);
    }
  });

  // ---------- INIT ----------
  resize();
  initParticles();
  rafId = requestAnimationFrame(loop);
})();
