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
      let videoSrc = this.getAttribute('data-video-src');
      
      if (videoSrc) {
        // Handle different YouTube URL formats
        if (videoSrc.includes('youtu.be/')) {
          // Convert youtu.be links to embed format
          const videoId = videoSrc.split('youtu.be/')[1].split('?')[0];
          videoSrc = `https://www.youtube.com/embed/${videoId}`;
        } else if (videoSrc.includes('youtube.com/watch')) {
          // Convert watch links to embed format
          const urlParams = new URLSearchParams(videoSrc.split('?')[1]);
          const videoId = urlParams.get('v');
          videoSrc = `https://www.youtube.com/embed/${videoId}`;
        }
        
        // Ensure we add any URL parameters that were in the original embed code
        if (this.hasAttribute('data-params')) {
          videoSrc += (videoSrc.includes('?') ? '&' : '?') + this.getAttribute('data-params');
        }
        
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

// Add utility function to extract YouTube video IDs and generate thumbnails
function createYouTubeItems() {
  const iframes = document.querySelectorAll('iframe[src*="youtube.com/embed/"]');
  
  iframes.forEach(iframe => {
    // Only process iframes that aren't already part of the system
    if (iframe.closest('.video-item') || iframe.id === 'modal-iframe') return;
    
    // Extract the video ID and parameters
    const src = iframe.src;
    const videoId = src.split('/embed/')[1].split('?')[0];
    const params = src.includes('?') ? src.split('?')[1] : '';
    
    // Create the video item structure
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.setAttribute('data-video-src', src);
    if (params) videoItem.setAttribute('data-params', params);
    
    const container = document.createElement('div');
    container.className = 'video-container';
    
    const thumbnail = document.createElement('img');
    thumbnail.className = 'video-thumbnail';
    thumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    thumbnail.alt = 'Video Thumbnail';
    thumbnail.onerror = function() {
      // Fallback to medium quality if HD isn't available
      this.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    };
    
    container.appendChild(thumbnail);
    videoItem.appendChild(container);
    
    // Add title and description placeholders
    const title = document.createElement('h3');
    title.textContent = 'YouTube Video';
    
    const desc = document.createElement('p');
    desc.textContent = 'Click to play this video';
    
    videoItem.appendChild(title);
    videoItem.appendChild(desc);
    
    // Replace the iframe with the new structure
    iframe.parentNode.replaceChild(videoItem, iframe);
  });
  
  // Reinitialize click handlers
  document.querySelectorAll('.video-item').forEach(item => {
    if (!item.hasAttribute('data-initialized')) {
      item.setAttribute('data-initialized', 'true');
      item.addEventListener('click', openVideoModal);
    }
  });
}

function openVideoModal() {
  const videoSrc = this.getAttribute('data-video-src');
  const modal = document.getElementById('video-modal');
  const modalIframe = document.getElementById('modal-iframe');
  
  if (videoSrc && modal && modalIframe) {
    modalIframe.src = videoSrc;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
  }
}

// Run the function when the page loads and after any dynamic content changes
window.addEventListener('load', createYouTubeItems);
