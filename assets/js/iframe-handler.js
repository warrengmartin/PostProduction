/**
 * Advanced Video Portfolio System
 * 
 * This script automatically transforms plain iframes into an interactive video gallery,
 * organized by sections based on markdown headings.
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('Advanced Video Portfolio System initializing...');
  
  // Make sure the editor intro is visible and properly styled
  ensureEditorIntroIsFormatted();
  
  // Process sections (headings followed by iframes)
  processSections();
});

function ensureEditorIntroIsFormatted() {
  const intro = document.querySelector('.editor-intro');
  if (intro) {
    // Make sure the intro is visible and properly styled
    intro.style.display = 'block';
    intro.style.margin = '80px auto 60px';
    intro.style.maxWidth = '800px';
    intro.style.textAlign = 'center';
    
    // Ensure the title has the animation
    const title = intro.querySelector('.editor-title');
    if (title) {
      title.style.background = 'linear-gradient(to right, #e6b800, #ffcc00, #ffffff, #ffcc00, #e6b800)';
      title.style.webkitBackgroundClip = 'text';
      title.style.backgroundClip = 'text';
      title.style.webkitTextFillColor = 'transparent';
      title.style.animation = 'shine 3s linear infinite';
      title.style.textShadow = '0 0 10px rgba(255, 204, 0, 0.7)';
      title.style.fontSize = '3rem';
    }
    
    console.log("Editor intro formatting ensured");
  } else {
    console.warn("Editor intro not found");
  }
}

function processSections() {
  // Get all h1 elements - these are our section headings
  const headings = document.querySelectorAll('h1');
  
  headings.forEach(heading => {
    // Create section title element that matches our styling
    const sectionTitle = document.createElement('h2');
    sectionTitle.className = 'section-title';
    sectionTitle.textContent = heading.textContent;
    
    // Create gallery container for this section
    const gallery = document.createElement('div');
    gallery.className = 'video-gallery';
    
    // Find all iframe elements after this heading until the next heading
    let currentElement = heading.nextElementSibling;
    const iframes = [];
    
    // Collect all iframes until the next heading
    while (currentElement && currentElement.tagName !== 'H1') {
      if (currentElement.tagName === 'IFRAME') {
        iframes.push(currentElement);
      }
      currentElement = currentElement.nextElementSibling;
    }
    
    // Process each iframe into a video item
    iframes.forEach(iframe => {
      const videoItem = createVideoItemFromIframe(iframe);
      gallery.appendChild(videoItem);
    });
    
    // Replace the heading with our section title
    heading.parentNode.replaceChild(sectionTitle, heading);
    
    // Insert the gallery after the section title
    if (sectionTitle.nextElementSibling) {
      sectionTitle.parentNode.insertBefore(gallery, sectionTitle.nextElementSibling);
    } else {
      sectionTitle.parentNode.appendChild(gallery);
    }
    
    // Remove the original iframes since they're now part of gallery
    iframes.forEach(iframe => {
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    });
    
    console.log(`Processed section: ${sectionTitle.textContent} with ${iframes.length} videos`);
  });
  
  // Add click handlers to all video items
  addClickHandlers();
}

function createVideoItemFromIframe(iframe) {
  const videoItem = document.createElement('div');
  videoItem.className = 'video-item';
  
  // Get source and other attributes from the iframe
  const src = iframe.src;
  videoItem.setAttribute('data-video-src', src);
  
  const title = iframe.getAttribute('title') || 'Video';
  
  // Create container for video thumbnail
  const container = document.createElement('div');
  container.className = 'video-container';
  
  // Determine the video platform and create appropriate thumbnail
  if (src.includes('youtube.com/embed/')) {
    // YouTube video - extract ID and create thumbnail
    const videoId = src.split('/embed/')[1].split('?')[0];
    const thumbnail = document.createElement('img');
    thumbnail.className = 'video-thumbnail';
    thumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    thumbnail.alt = title;
    thumbnail.onerror = function() {
      this.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    };
    container.appendChild(thumbnail);
  } 
  else if (src.includes('screenpal.com')) {
    // Screenpal video
    container.classList.add('screenpal-container');
    const screenpalThumb = document.createElement('div');
    screenpalThumb.className = 'screenpal-thumbnail';
    const playIndicator = document.createElement('div');
    playIndicator.className = 'play-indicator';
    screenpalThumb.appendChild(playIndicator);
    container.appendChild(screenpalThumb);
  } 
  else {
    // Generic video - create placeholder
    const genericThumb = document.createElement('div');
    genericThumb.className = 'generic-thumbnail';
    genericThumb.textContent = '▶';
    container.appendChild(genericThumb);
  }
  
  videoItem.appendChild(container);
  
  // Add title element
  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  videoItem.appendChild(titleElement);
  
  // Add default description
  const description = document.createElement('p');
  description.textContent = 'Click to play this video';
  videoItem.appendChild(description);
  
  return videoItem;
}

function addClickHandlers() {
  const modal = document.getElementById('video-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const closeBtn = document.querySelector('.close-modal');
  
  if (!modal || !modalIframe || !closeBtn) {
    console.error('Modal elements not found');
    return;
  }
  
  // Add click handler to all video items
  document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', function() {
      const videoSrc = this.getAttribute('data-video-src');
      if (videoSrc) {
        console.log('Opening video in modal:', videoSrc);
        modalIframe.src = videoSrc;
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close button handler
  closeBtn.addEventListener('click', function() {
    closeModal();
  });
  
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
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
      modalIframe.src = '';
    }, 300);
    document.body.style.overflow = 'auto';
  }
}
