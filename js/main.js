/* ============================================
   LUMIÈRE — main.js
   ============================================ */

// ---- Scroll Reveal ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger sibling reveals
        const siblings = entry.target.parentElement?.querySelectorAll('.reveal');
        const idx = siblings ? [...siblings].indexOf(entry.target) : 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Nav scroll shrink ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- Mobile hamburger ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav__links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- Newsletter form ----
function handleSubscribe(e) {
  e.preventDefault();
  const thanks = document.getElementById('newsletter-thanks');
  if (thanks) {
    e.target.style.display = 'none';
    thanks.style.display = 'block';
  }
}

// ---- Contact form ----
function handleContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const success = document.getElementById('form-success');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    e.target.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
    btn.textContent = 'Send Message';
    btn.disabled = false;
    if (success) success.style.display = 'block';
  }, 900);
}

// ---- FAQ accordion ----
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-q.open').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.style.maxHeight = '0';
  });

  if (!isOpen) {
    btn.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}
