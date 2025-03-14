/**
 * Enhanced Video Manager
 * 
 * This script makes it easy to add videos to your portfolio by:
 * 1. Processing special HTML comments with embedded iframes
 * 2. Converting them to the site's video gallery format
 * 3. Supporting automatic thumbnail generation
 * 4. Organizing videos into appropriate sections
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('Enhanced Video Manager initialized');
  
  // Process the special comments containing videos
  processVideoComments();
  
  // Process any direct YouTube iframes
  processYouTubeIframes();
  
  // Watch for any dynamically added content
  observeDOMChanges();
});

function processVideoComments() {
  // Get all comment nodes in the document
  const allNodes = document.createNodeIterator(
    document.documentElement, 
    NodeFilter.SHOW_COMMENT
  );
  
  let currentNode;
  const videoComments = [];
  
  // Find all VIDEO comments
  while (currentNode = allNodes.nextNode()) {
    const commentText = currentNode.nodeValue.trim();
    
    if (commentText.startsWith('VIDEO:')) {
      // Extract section name
      const sectionName = commentText.split('VIDEO:')[1].trim().split('\n')[0].toLowerCase();
      
      // Find the iframe in the comment
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = commentText.substring(commentText.indexOf('<iframe'));
      const iframe = tempDiv.querySelector('iframe');
      
      // Get video details if available
      const detailsDiv = tempDiv.querySelector('.video-details');
      
      if (iframe) {
        videoComments.push({
          commentNode: currentNode,
          section: sectionName,
          iframe: iframe.outerHTML,
          details: detailsDiv ? detailsDiv.innerHTML : null
        });
      }
    }
  }
  
  // Process all found videos
  videoComments.forEach(video => {
    const section = document.querySelector(`.video-gallery[data-section="${video.section.toLowerCase()}"]`);
    
    if (section) {
      // Create temporary container for the iframe
      const container = document.createElement('div');
      container.innerHTML = video.iframe;
      const iframe = container.querySelector('iframe');
      
      if (!iframe) return;
      
      // Extract necessary information
      let videoSrc = iframe.src;
      const videoTitle = iframe.getAttribute('title') || 'Video';
      let thumbnailUrl = '';
      let videoId = '';
      
      // Extract video ID for YouTube videos
      if (videoSrc.includes('youtube.com/embed/')) {
        videoId = videoSrc.split('/embed/')[1].split('?')[0];
        thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }
      
      // Create the video item with our gallery structure
      const videoItem = document.createElement('div');
      videoItem.className = 'video-item';
      videoItem.setAttribute('data-video-src', videoSrc);
      
      const videoContainer = document.createElement('div');
      videoContainer.className = 'video-container';
      
      if (thumbnailUrl) {
        // For YouTube videos, use the thumbnail
        const thumbnail = document.createElement('img');
        thumbnail.className = 'video-thumbnail';
        thumbnail.src = thumbnailUrl;
        thumbnail.alt = videoTitle;
        thumbnail.onerror = function() {
          // Fallback to medium quality if HD isn't available
          this.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
        };
        
        videoContainer.appendChild(thumbnail);
      } else if (videoSrc.includes('screenpal.com')) {
        // For Screenpal, create placeholder thumbnail
        videoContainer.classList.add('screenpal-container');
        const screenpalThumb = document.createElement('div');
        screenpalThumb.className = 'screenpal-thumbnail';
        const playIndicator = document.createElement('div');
        playIndicator.className = 'play-indicator';
        screenpalThumb.appendChild(playIndicator);
        videoContainer.appendChild(screenpalThumb);
      } else {
        // For other videos, create a generic thumbnail
        const genericThumb = document.createElement('div');
        genericThumb.className = 'generic-thumbnail';
        genericThumb.textContent = '▶';
        videoContainer.appendChild(genericThumb);
      }
      
      videoItem.appendChild(videoContainer);
      
      // Add title and description if available
      if (video.details) {
        const detailsDiv = document.createElement('div');
        detailsDiv.innerHTML = video.details;
        const title = detailsDiv.querySelector('h3');
        const desc = detailsDiv.querySelector('p');
        
        if (title) videoItem.appendChild(title);
        if (desc) videoItem.appendChild(desc);
      } else {
        // Add default title based on iframe title
        const title = document.createElement('h3');
        title.textContent = videoTitle;
        videoItem.appendChild(title);
        
        // Add default description
        const desc = document.createElement('p');
        desc.textContent = 'Click to view video';
        videoItem.appendChild(desc);
      }
      
      // Add it to the section
      section.appendChild(videoItem);
    }
  });
}

// Process any direct YouTube iframes that might be on the page
function processYouTubeIframes() {
  // Find all YouTube iframes that aren't inside a video-item already
  const iframes = document.querySelectorAll('iframe[src*="youtube.com/embed/"]:not(.video-item iframe):not(#modal-iframe)');
  
  iframes.forEach(iframe => {
    if (iframe.closest('.video-item') || iframe.hasAttribute('data-processed')) {
      return;
    }
    
    iframe.setAttribute('data-processed', 'true');
    
    // Find which section this iframe belongs to
    const section = iframe.closest('.video-gallery');
    
    if (!section) return;
    
    // Extract video ID and parameters
    const src = iframe.src;
    let videoId = '';
    
    if (src.includes('/embed/')) {
      videoId = src.split('/embed/')[1].split('?')[0];
    } else if (src.includes('youtu.be/')) {
      videoId = src.split('youtu.be/')[1].split('?')[0];
    } else if (src.includes('v=')) {
      const urlParams = new URLSearchParams(src.split('?')[1]);
      videoId = urlParams.get('v');
    }
    
    if (!videoId) return;
    
    // Create the video item structure
    const videoItem = createVideoItem(src, videoId, iframe.getAttribute('title'));
    
    // Replace the iframe with our enhanced element
    iframe.parentNode.replaceChild(videoItem, iframe);
  });
  
  // Add click handlers to any new video items
  addVideoItemClickHandlers();
}

function createVideoItem(src, videoId, title) {
  const videoItem = document.createElement('div');
  videoItem.className = 'video-item';
  videoItem.setAttribute('data-video-src', src);
  
  const container = document.createElement('div');
  container.className = 'video-container';
  
  const thumbnail = document.createElement('img');
  thumbnail.className = 'video-thumbnail';
  thumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  thumbnail.alt = title || 'Video';
  thumbnail.onerror = function() {
    this.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };
  
  container.appendChild(thumbnail);
  videoItem.appendChild(container);
  
  // Add title if available
  const titleElem = document.createElement('h3');
  titleElem.textContent = title || 'Video';
  videoItem.appendChild(titleElem);
  
  // Add simple description
  const desc = document.createElement('p');
  desc.textContent = 'Click to view video';
  videoItem.appendChild(desc);
  
  return videoItem;
}

function addVideoItemClickHandlers() {
  // Add click handler to all video items
  document.querySelectorAll('.video-item:not([data-initialized])').forEach(item => {
    item.setAttribute('data-initialized', 'true');
    item.addEventListener('click', function() {
      const videoSrc = this.getAttribute('data-video-src');
      const modal = document.getElementById('video-modal');
      const modalIframe = document.getElementById('modal-iframe');
      
      if (videoSrc && modal && modalIframe) {
        modalIframe.src = videoSrc;
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
        document.body.style.overflow = 'hidden';
      }
    });
  });
}

function observeDOMChanges() {
  const observer = new MutationObserver(function(mutations) {
    let shouldProcess = false;
    
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const node = mutation.addedNodes[i];
          if (node.nodeType === 8) { // Comment node
            if (node.nodeValue.trim().startsWith('VIDEO:')) {
              shouldProcess = true;
              break;
            }
          }
        }
      }
    });
    
    if (shouldProcess) {
      processVideoComments();
      addVideoItemClickHandlers();
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
