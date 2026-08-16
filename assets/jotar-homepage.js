/* ==========================================================================
   JOTAR FOOTWEAR - HOMEPAGE INTERACTIVITY JS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Best Sellers Carousel Controls
  const carouselArrows = document.querySelectorAll('.jotar-carousel-arrow');
  carouselArrows.forEach(function (arrow) {
    arrow.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const track = document.getElementById(targetId);
      if (!track) return;
      const isNext = this.classList.contains('jotar-carousel-arrow--next');
      const card = track.querySelector('.jotar-best-card');
      const scrollAmount = card ? (card.offsetWidth + 16) * 2 : 360;
      
      track.scrollBy({
        left: isNext ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    });
  });

  // 2. Wishlist Heart Button Interactive Toggle
  const wishlistButtons = document.querySelectorAll('.jotar-product-card__wishlist');
  wishlistButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle('is-active');
      const svg = this.querySelector('svg');
      if (this.classList.contains('is-active')) {
        this.style.color = '#e53935';
      } else {
        this.style.color = '';
      }
    });
  });

  // 3. Hero Slider Dots
  const heroDots = document.querySelectorAll('.jotar-hero__dot');
  heroDots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      heroDots.forEach(function (d) { d.classList.remove('is-active'); });
      this.classList.add('is-active');
    });
  });

  // 4. Color Swatches interaction on Product Cards
  const swatchDots = document.querySelectorAll('.jotar-swatch-dot');
  swatchDots.forEach(function (dot) {
    dot.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const parent = this.closest('.jotar-product-card__swatches');
      if (parent) {
        parent.querySelectorAll('.jotar-swatch-dot').forEach(function (d) {
          d.style.transform = 'scale(1)';
          d.style.borderColor = 'rgba(0,0,0,0.15)';
        });
        this.style.transform = 'scale(1.25)';
        this.style.borderColor = '#111';
      }
    });
  });
});
