document.addEventListener('DOMContentLoaded', function() {
  // Video hover effect - play on hover
  const videoItems = document.querySelectorAll('.video-item');
  
  videoItems.forEach(item => {
    const iframe = item.querySelector('iframe');
    const videoSrc = iframe.src;
    
    // Store original src without autoplay
    item.addEventListener('mouseenter', () => {
      // Add autoplay parameter when hovering
      if (videoSrc.includes('youtube')) {
        iframe.src = videoSrc + (videoSrc.includes('?') ? '&autoplay=1' : '?autoplay=1');
      }
    });
    
    item.addEventListener('mouseleave', () => {
      // Reset to original src
      iframe.src = videoSrc;
    });
  });
  
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
});
