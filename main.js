// BookmarQ site — scroll reveal + hero particles.
document.addEventListener('DOMContentLoaded', () => {
  // Reveal-on-scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Hero particles
  const p = document.querySelector('.particles');
  if (p) {
    for (let i = 0; i < 32; i++) {
      const d = document.createElement('span');
      d.className = 'particle';
      const size = 3 + Math.random() * 7;
      d.style.width = d.style.height = size + 'px';
      d.style.left = Math.random() * 100 + '%';
      d.style.top = 60 + Math.random() * 40 + '%';
      d.style.animationDuration = 6 + Math.random() * 8 + 's';
      d.style.animationDelay = -Math.random() * 10 + 's';
      p.appendChild(d);
    }
  }

  // Subtle parallax on the book scene as the mouse moves
  const scene = document.querySelector('.book-scene');
  if (scene) {
    scene.addEventListener('mousemove', (ev) => {
      const r = scene.getBoundingClientRect();
      const dx = (ev.clientX - r.left - r.width / 2) / r.width;
      const dy = (ev.clientY - r.top - r.height / 2) / r.height;
      scene.style.transform = `rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg)`;
    });
    scene.addEventListener('mouseleave', () => { scene.style.transform = ''; });
  }
});
