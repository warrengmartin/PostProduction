document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll animation for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fade-in animations on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, {threshold: 0.1});
  
  document.querySelectorAll('.video-item').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
  });
  
  // Modal functionality
  const modal = document.getElementById('video-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const closeBtn = document.querySelector('.close-modal');
  
  // Click event for video items
  document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', function() {
      const videoSrc = this.getAttribute('data-video-src');
      if (videoSrc) {
        // Set the iframe source to the video URL
        modalIframe.src = videoSrc;
        
        // Show the modal
        modal.classList.add('show');
        
        // Prevent scrolling on the body
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close the modal
  closeBtn.addEventListener('click', closeModal);
  
  // Close on click outside content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
  
  function closeModal() {
    // Hide the modal
    modal.classList.remove('show');
    
    // Stop video playback by clearing the iframe source
    setTimeout(() => {
      modalIframe.src = '';
    }, 300); // Wait for animation
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  }

  // Initialize any Screenpal players if they need special handling
  function initScreenpalPlayers() {
    if (typeof window.ScreenPal !== 'undefined' && window.ScreenPal.initPlayers) {
      window.ScreenPal.initPlayers();
    }
  }
  
  // Call after a small delay to ensure script has loaded
  setTimeout(initScreenpalPlayers, 500);
});
