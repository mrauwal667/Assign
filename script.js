// ============================================
//   AUWAL SULAIMAN ZAKARIYYA — PORTFOLIO JS
// ============================================

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

// Add active style via JS
const styleActive = document.createElement('style');
styleActive.textContent = `.nav-links a.active { color: var(--gold) !important; }`;
document.head.appendChild(styleActive);

// Animate skill bars on scroll
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.fill').forEach(fill => {
      
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-page').forEach(el => skillObserver.observe(el));

// Pause skill bar animations initially
document.querySelectorAll('.fill').forEach(fill => {
  fill.style.animationPlayState = 'paused';
});

// Contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('form-success').style.display = 'block';
    btn.textContent = 'Send Message ✉';
    btn.disabled = false;
    e.target.reset();
  }, 1200);
}

// Scroll reveal for cards
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

const revealEls = document.querySelectorAll(
  '.project-card, .cert-card, .exp-card, .blog-card, .timeline-item, .skill-category'
);

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// Navbar scroll shadow
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
