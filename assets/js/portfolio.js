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
  
  // Add click handlers to video overlays
  document.querySelectorAll('.video-overlay').forEach(overlay => {
    overlay.addEventListener('click', function() {
      // Get the related iframe
      const iframe = this.parentNode.querySelector('iframe');
      const src = iframe.src;
      
      // Trigger YouTube play by adding autoplay parameter
      if (src.includes('youtube.com')) {
        iframe.src = src + (src.includes('?') ? '&autoplay=1' : '?autoplay=1');
        
        // Hide the overlay after clicking
        this.style.display = 'none';
      }
    });
  });
});
