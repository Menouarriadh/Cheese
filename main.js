/* ============================================
   CHEESEBURGER BY AB - SHARED SCRIPTS
   Professional Multi-Page Website
   ============================================ */

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const navLinks = document.getElementById('navLinks');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  if (navLinks && menuBtn && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10,10,10,0.98)';
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
    } else {
      navbar.style.background = 'rgba(10,10,10,0.95)';
      navbar.style.boxShadow = 'none';
    }
  }
});

// Intersection Observer for fade-in animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
});

// Phone call function
function callNumber(phone) {
  window.location.href = 'tel:' + phone.replace(/\s/g, '');
}

// Open map function
function openMap(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Gallery lightbox (safe DOM manipulation - NO innerHTML)
function openLightbox(src, title) {
  const lightbox = document.createElement('div');
  lightbox.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.95); z-index: 9999;
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; padding: 2rem; cursor: pointer;
  `;

  const img = document.createElement('img');
  img.src = src;
  img.alt = title || 'Gallery image';
  img.style.cssText = 'max-width: 90%; max-height: 80vh; border-radius: 12px; border: 2px solid #FFD700;';

  const titleEl = document.createElement('p');
  titleEl.textContent = title || '';
  titleEl.style.cssText = "color: #FFD700; font-family: 'Fredoka One', cursive; margin-top: 1rem; font-size: 1.2rem;";

  const hint = document.createElement('p');
  hint.textContent = 'Click anywhere to close';
  hint.style.cssText = 'color: #666; font-size: 0.85rem; margin-top: 0.5rem;';

  lightbox.appendChild(img);
  lightbox.appendChild(titleEl);
  lightbox.appendChild(hint);

  lightbox.addEventListener('click', () => lightbox.remove());
  document.body.appendChild(lightbox);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Active nav link highlighting based on current page
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href').replace('.html', '').replace('./', '');
    if (linkPage === currentPage || (currentPage === 'index' && linkPage === 'index')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Prevent form submission (no backend)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will contact you soon.');
      form.reset();
    });
  });
});

// Console security message
console.log('%c Cheeseburger by AB ', 'background: #FFD700; color: #0A0A0A; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c This website is protected. Unauthorized access is prohibited.', 'color: #FF1A1A; font-size: 14px;');
