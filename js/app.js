/* ==========================================================================
   TOTAL FITNESS STUDIO (TFS) - MAIN APPLICATION CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle-btn');
  const navLinks = document.getElementById('nav-links-menu');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      document.body.classList.toggle('mobile-menu-open');
    });

    // Close when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('mobile-menu-open');
      });
    });
  }

  // 3. Theme Mood Switcher with LocalStorage Persistence
  const themeDots = document.querySelectorAll('.theme-dot');
  const savedTheme = localStorage.getItem('tfs-theme');
  if (savedTheme && savedTheme !== 'volt') {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeDots.forEach(d => {
      d.classList.toggle('active', d.getAttribute('data-theme') === savedTheme);
    });
  }

  themeDots.forEach(dot => {
    dot.addEventListener('click', () => {
      themeDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const selectedTheme = dot.getAttribute('data-theme');
      if (selectedTheme === 'volt') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('tfs-theme', 'volt');
      } else {
        document.documentElement.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('tfs-theme', selectedTheme);
      }
      if (window.showToast) {
        window.showToast(`🎨 Studio Lighting switched to ${selectedTheme.toUpperCase()}`);
      }
    });
  });

  // 4. Interactive Goal Recommender Data
  const GOAL_DATA = {
    fatloss: {
      title: 'TFS Rapid Metabolic Shred & Toning',
      desc: 'Engineered for sustained caloric expenditure, cardiovascular stamina, and fat loss through structured interval training and nutrition.',
      frequency: '5 - 6 Days / Week',
      duration: '45 - 50 Min Sessions',
      coach: 'Master Sakthi & Team TFS',
      nutrition: 'Caloric Deficit with High Protein Nutrition Guide',
      img: 'assets/images/gmap_gym_2.webp'
    },
    muscle: {
      title: 'TFS Hypertrophy & Biomechanical Iron',
      desc: 'Targeted progressive overload using commercial plate-loaded machines, cable biomechanics, and specialized muscle group splits.',
      frequency: '5 Days / Week',
      duration: '60 Min Sessions',
      coach: 'Master Sakthivel (Champion Bodybuilder)',
      nutrition: 'Clean Surplus & Tailored Diet Protocols',
      img: 'assets/images/gmap_gym_1.webp'
    },
    strength: {
      title: 'Power & Olympic Strength Stations',
      desc: 'Master the compound lifts (Squat, Bench Press, Deadlift) on competition width benches and reinforced safety rigs.',
      frequency: '4 - 5 Days / Week',
      duration: '60 - 75 Min Sessions',
      coach: 'Master Sakthi',
      nutrition: 'Energy Fueling & Joint Support Protocols',
      img: 'assets/images/gmap_gym_4.webp'
    },
    endurance: {
      title: 'Aerobic Stamina & Cardio Deck',
      desc: 'High-speed motorized treadmills, elliptical cross-trainers, and heart-rate guided cardiovascular conditioning.',
      frequency: '4 - 5 Days / Week',
      duration: '45 Min High Rhythm',
      coach: 'Senior Certified Trainers',
      nutrition: 'Electrolyte Hydration & Clean Carbs',
      img: 'assets/images/gmap_gym_20.webp'
    },
    mobility: {
      title: 'Core Alignment & Women Dedicated Batches',
      desc: 'Focused on posture correction, lower back decompression, pelvic strength, and gentle tone in comfortable private batches.',
      frequency: '4 - 5 Days / Week',
      duration: '50 Min Guided Flow',
      coach: 'Master Sakthi & Certified Female Staff',
      nutrition: 'Nutritional Balance & Healthy Habit Coaching',
      img: 'assets/images/gmap_gym_10.webp'
    }
  };

  const goalPills = document.querySelectorAll('.goal-pill');
  const goalTitleEl = document.getElementById('rec-goal-title');
  const goalDescEl = document.getElementById('rec-goal-desc');
  const goalFreqEl = document.getElementById('rec-goal-frequency');
  const goalDurEl = document.getElementById('rec-goal-duration');
  const goalCoachEl = document.getElementById('rec-goal-coach');
  const goalNutrEl = document.getElementById('rec-goal-nutrition');
  const goalImgEl = document.getElementById('rec-goal-img');

  goalPills.forEach(pill => {
    pill.addEventListener('click', () => {
      goalPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const goalKey = pill.getAttribute('data-goal');
      const data = GOAL_DATA[goalKey];
      if (data && goalTitleEl) {
        goalTitleEl.textContent = data.title;
        goalDescEl.textContent = data.desc;
        goalFreqEl.textContent = data.frequency;
        goalDurEl.textContent = data.duration;
        goalCoachEl.textContent = data.coach;
        goalNutrEl.textContent = data.nutrition;
        if (goalImgEl) goalImgEl.src = data.img;
      }
    });
  });

  // 5. Programs Filter
  const programFilterBtns = document.querySelectorAll('.programs-filter .filter-btn');
  const programCards = document.querySelectorAll('.program-card');

  programFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      programFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      programCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5b. Google Maps Portfolio Category Filter
  const portfolioFilterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  portfolioFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      portfolioFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      portfolioCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Pricing Interval Toggle
  const pricingToggle = document.getElementById('pricing-billing-switch');
  const toggleMonthly = document.getElementById('toggle-monthly');
  const toggleAnnual = document.getElementById('toggle-annual');
  const priceAmounts = document.querySelectorAll('.plan-amount');
  const pricePeriods = document.querySelectorAll('.plan-period');

  const PRICING_DATA = {
    monthly: [
      { amount: '1,499', period: '/ month' },
      { amount: '2,499', period: '/ month' },
      { amount: '5,999', period: '/ month' }
    ],
    annual: [
      { amount: '974', period: '/ mo (Save 35%)' },
      { amount: '1,624', period: '/ mo (Save 35%)' },
      { amount: '3,899', period: '/ mo (Save 35%)' }
    ]
  };

  let currentPricing = 'monthly';

  function updatePricing() {
    const data = PRICING_DATA[currentPricing];
    priceAmounts.forEach((el, index) => {
      if (data[index]) {
        el.textContent = data[index].amount;
      }
    });
    pricePeriods.forEach((el, index) => {
      if (data[index]) {
        el.textContent = data[index].period;
      }
    });

    if (currentPricing === 'annual') {
      pricingToggle.classList.add('checked');
      toggleAnnual.classList.add('active');
      toggleMonthly.classList.remove('active');
    } else {
      pricingToggle.classList.remove('checked');
      toggleMonthly.classList.add('active');
      toggleAnnual.classList.remove('active');
    }
  }

  if (pricingToggle) {
    pricingToggle.addEventListener('click', () => {
      currentPricing = currentPricing === 'monthly' ? 'annual' : 'monthly';
      updatePricing();
      if (window.showToast) {
        window.showToast(currentPricing === 'annual' ? '🔥 35% Annual Discount Applied!' : 'Monthly Billing Selected');
      }
    });
  }

  if (toggleMonthly) {
    toggleMonthly.addEventListener('click', () => {
      currentPricing = 'monthly';
      updatePricing();
    });
  }

  if (toggleAnnual) {
    toggleAnnual.addEventListener('click', () => {
      currentPricing = 'annual';
      updatePricing();
    });
  }

  // 7. FAQ Accordion (Accessible & Keyboard friendly)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        const btn = i.querySelector('.faq-question');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 8. Contact Form
  const contactForm = document.getElementById('tfs-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      if (window.showToast) {
        window.showToast(`✅ Thank you ${name}! Our head coach will call you within 15 minutes.`);
      }
      contactForm.reset();
    });
  }

  // 9. Newsletter Form
  const newsletterForm = document.getElementById('tfs-newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      if (window.showToast) {
        window.showToast(`📩 Subscribed ${email} to weekly fitness & nutrition science!`);
      }
      newsletterForm.reset();
    });
  }

  // 10. Scroll Reveal Animation via IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 11. Nav ScrollSpy, Reading Progress Bar & Back-to-Top Ring
  const sections = document.querySelectorAll('header[id], section[id]');
  const navLinksAll = document.querySelectorAll('.nav-link');
  const readingBar = document.getElementById('scroll-reading-bar');
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const progressCircle = document.getElementById('scroll-progress-circle');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollPos / docHeight) * 100 : 0;

    // Real-time Reading Progress Bar
    if (readingBar) {
      readingBar.style.width = `${scrollPercent}%`;
    }

    // Scroll Progress Circle on Back-To-Top button
    if (progressCircle) {
      const circumference = 125.6;
      const offset = circumference - (scrollPercent / 100) * circumference;
      progressCircle.style.strokeDashoffset = offset;
    }

    // Back to Top button visibility
    if (backToTopBtn) {
      if (scrollPos > 380) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active Section Detection (ScrollSpy)
    let currentSectionId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Back to Top Smooth Scroll
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 12. Interactive Dynamic Card Lighting & Micro-Tilt
  const interactiveCards = document.querySelectorAll('.portfolio-card, .program-card, .pricing-card, .transformation-card');
  interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
