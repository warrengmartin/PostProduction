/**
 * Style Fixer Script
 * This script ensures that critical style elements are properly displayed
 */
(function() {
  function fixStyles() {
    console.log("Running style fixes...");
    
    // Fix the editor intro and title
    const intro = document.querySelector('.editor-intro');
    if (intro) {
      intro.setAttribute('style', `
        display: block !important;
        margin: 80px auto 60px !important;
        max-width: 800px !important;
        text-align: center !important;
        position: relative !important;
        z-index: 10 !important;
      `);
      
      // Fix editor title
      const title = intro.querySelector('.editor-title');
      if (title) {
        title.setAttribute('style', `
          font-size: 3rem !important;
          letter-spacing: 5px !important;
          margin-bottom: 10px !important;
          font-family: "Courier New", monospace !important;
          text-shadow: 0 0 10px rgba(255, 204, 0, 0.7) !important;
          background: linear-gradient(to right, #e6b800, #ffcc00, #ffffff, #ffcc00, #e6b800) !important;
          background-size: 200% auto !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          text-align: center !important;
          display: block !important;
          width: 100% !important;
          animation: shine 3s linear infinite !important;
        `);
      }
      
      // Fix tagline
      const tagline = intro.querySelector('.tagline');
      if (tagline) {
        tagline.setAttribute('style', `
          font-family: "Courier New", monospace !important;
          letter-spacing: 2px !important;
          color: #999 !important;
          font-size: 1rem !important;
          margin-bottom: 40px !important;
          text-align: center !important;
          display: block !important;
          width: 100% !important;
        `);
      }
    }
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixStyles);
  } else {
    fixStyles();
  }
  
  // Also run after a short delay to ensure it works
  setTimeout(fixStyles, 100);
  setTimeout(fixStyles, 500);
  setTimeout(fixStyles, 1000);
})();
