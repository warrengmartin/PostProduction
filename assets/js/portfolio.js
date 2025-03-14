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
  
  if (!modal || !modalIframe || !closeBtn) {
    console.error('Modal elements not found in the DOM');
    return;
  }
  
  console.log('Modal elements found and initialized');
  
  // Click event for video items
  document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', function() {
      console.log('Video item clicked');
      const videoSrc = this.getAttribute('data-video-src');
      if (videoSrc) {
        console.log('Loading video:', videoSrc);
        // Set the iframe source to the video URL
        modalIframe.src = videoSrc;
        
        // Force display property before adding show class for animation
        modal.style.display = 'flex';
        
        // Wait a tiny bit for display to take effect before animating
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
        
        // Prevent scrolling on the body
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close the modal
  closeBtn.addEventListener('click', function() {
    console.log('Close button clicked');
    closeModal();
  });
  
  // Close on click outside content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      console.log('Clicked outside modal content');
      closeModal();
    }
  });
  
  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      console.log('ESC key pressed');
      closeModal();
    }
  });
  
  function closeModal() {
    console.log('Closing modal');
    // Hide the modal - first remove the class
    modal.classList.remove('show');
    
    // Then after animation, set display to none and clear source
    setTimeout(() => {
      modal.style.display = 'none';
      modalIframe.src = '';
      console.log('Modal hidden and iframe source cleared');
    }, 300);
    
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

// Add a small initialization check on page load outside DOMContentLoaded
window.addEventListener('load', function() {
  console.log('Page fully loaded');
  const modal = document.getElementById('video-modal');
  if (modal) {
    console.log('Modal element exists in DOM after full page load');
    // Force initial state
    modal.style.display = 'none';
    modal.classList.remove('show');
  }
});
