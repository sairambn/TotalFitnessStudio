/* ==========================================================================
   TOTAL FITNESS STUDIO (TFS) - MODAL SYSTEMS, DIGITAL PASS & TOASTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const trialModal = document.getElementById('trial-modal');
  const trialForm = document.getElementById('trial-pass-form');
  const digitalPassView = document.getElementById('digital-pass-view');
  const trialTriggers = document.querySelectorAll('.open-trial-modal');
  const closeButtons = document.querySelectorAll('.modal-close, .modal-backdrop-close');

  const galleryModal = document.getElementById('gallery-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-full-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  // Open Trial Modal
  trialTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(trialModal);
      if (digitalPassView) digitalPassView.style.display = 'none';
      if (trialForm) trialForm.style.display = 'block';
    });
  });

  // Global helper for opening booking modal from schedule or programs
  window.openBookingModal = function(options = {}) {
    const modalTitle = document.getElementById('booking-modal-title');
    const modalSubtitle = document.getElementById('booking-modal-subtitle');
    const hiddenField = document.getElementById('booking-class-detail');

    if (modalTitle && options.title) modalTitle.textContent = options.title;
    if (modalSubtitle && options.subtitle) modalSubtitle.textContent = options.subtitle;
    if (hiddenField && options.details) hiddenField.value = options.details;

    if (digitalPassView) digitalPassView.style.display = 'none';
    if (trialForm) trialForm.style.display = 'block';
    openModal(trialModal);
  };

  // Close Modals
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
    document.body.style.overflow = '';
  }

  // Handle Trial Pass Submission
  if (trialForm) {
    trialForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('trial-name').value || 'Fitness Enthusiast';
      const phone = document.getElementById('trial-phone').value || '+91 98765 43210';
      const branch = document.getElementById('trial-branch')?.value || 'Hasthinapuram Chromepet Hub (Above Axis Bank)';
      const goal = document.getElementById('trial-goal').value || 'General Fitness & Recomp';

      // Generate a realistic random pass code
      const passCode = 'TFS-' + Math.floor(100000 + Math.random() * 900000);
      const validUntil = new Date();
      validUntil.setDate(validUntil.getDate() + 7);
      const validDateStr = validUntil.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      // Populate Digital Pass
      document.getElementById('pass-holder-name').textContent = name;
      document.getElementById('pass-number').textContent = passCode;
      document.getElementById('pass-expiry').textContent = validDateStr;
      document.getElementById('pass-branch').textContent = branch;
      document.getElementById('pass-goal').textContent = goal;

      // Switch views
      trialForm.style.display = 'none';
      if (digitalPassView) {
        digitalPassView.style.display = 'block';
      }

      showToast(`🎉 Congratulations ${name}! Your 7-Day TFS Pass is ready!`);
    });
  }

  // Gallery & Google Maps Portfolio Lightbox with Full Carousel Navigation
  const galleryItems = Array.from(document.querySelectorAll('.portfolio-card'));
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const counterEl = document.getElementById('lightbox-counter');
  let currentGalleryIndex = 0;

  function updateLightboxPhoto(index) {
    if (galleryItems.length === 0) return;
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentGalleryIndex = index;

    const item = galleryItems[currentGalleryIndex];
    const img = item.querySelector('img');
    const title = item.querySelector('.portfolio-title, h3, h4')?.textContent || 'Total Fitness Studio';
    const desc = item.querySelector('.portfolio-desc, p')?.textContent || 'Google Maps Verified Facility Photo';
    const badge = item.querySelector('.gmap-badge-bar span')?.textContent || 'Chromepet Studio Equipment';

    if (lightboxImg && img) {
      lightboxImg.style.opacity = '0.3';
      lightboxImg.src = img.src;
      setTimeout(() => {
        lightboxImg.style.transition = 'opacity 0.25s ease';
        lightboxImg.style.opacity = '1';
      }, 50);
    }

    if (lightboxCaption) {
      lightboxCaption.innerHTML = `<strong>${title}</strong> — ${desc} <span style="display:block; font-size: 0.8rem; color: var(--neon-volt); margin-top: 4px;">📍 ${badge} • Google Maps Verified</span>`;
    }

    if (counterEl) {
      counterEl.textContent = `Photo ${currentGalleryIndex + 1} of ${galleryItems.length}`;
    }
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentGalleryIndex = index;
      updateLightboxPhoto(currentGalleryIndex);
      openModal(galleryModal);
    });
  });

  // Enable lightbox click on all Transformation Cards and Before/After photos
  document.querySelectorAll('.transformation-card, .ba-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicking a button or link inside
      if (e.target.closest('button, a')) return;
      const cardImg = card.querySelector('img');
      if (!cardImg) return;
      const imgSrc = cardImg.getAttribute('src');
      const targetIndex = galleryItems.findIndex(item => {
        const pImg = item.querySelector('img');
        return pImg && pImg.getAttribute('src') === imgSrc;
      });
      if (targetIndex !== -1) {
        currentGalleryIndex = targetIndex;
        updateLightboxPhoto(currentGalleryIndex);
        openModal(galleryModal);
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightboxPhoto(currentGalleryIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightboxPhoto(currentGalleryIndex + 1);
    });
  }

  // Keyboard Navigation for Gallery Lightbox
  document.addEventListener('keydown', (e) => {
    if (!galleryModal || !galleryModal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') {
      updateLightboxPhoto(currentGalleryIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateLightboxPhoto(currentGalleryIndex + 1);
    }
  });

  // Global Toast Notification System
  window.showToast = function(message, duration = 4000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="font-size: 1.2rem;">⚡</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  };
});
