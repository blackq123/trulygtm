// trulygtm.com — small bits of interactivity

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Scroll reveal — pop elements in as they enter view
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && revealEls.length) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.animation = `pop-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.06}s both`;
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => obs.observe(el));
}

// Form: prevent default, show success
document.querySelectorAll('form[data-form]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submit = form.querySelector('button[type="submit"]');
    if (submit) {
      const orig = submit.innerHTML;
      submit.innerHTML = '✓ Got it — we\'ll be in touch';
      submit.style.background = 'var(--quaternary)';
      submit.style.color = 'var(--fg)';
      setTimeout(() => {
        submit.innerHTML = orig;
        submit.style.background = '';
        submit.style.color = '';
        form.reset();
      }, 3500);
    }
  });
});
