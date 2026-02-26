/* ============================================
   LUMIÈRE — shop.js
   ============================================ */

// ---- Category Filters ----
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.shop-grid .card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);

      // Re-trigger reveal animation
      if (match) {
        card.classList.remove('visible');
        setTimeout(() => card.classList.add('visible'), 50);
      }
    });
  });
});

// ---- Cart Toast ----
let toastTimer;

function addToCart(name, price) {
  const toast = document.getElementById('cart-toast');
  const msg = document.getElementById('cart-toast-msg');

  if (!toast) return;

  msg.textContent = `✓ "${name}" added — $${price}`;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}
