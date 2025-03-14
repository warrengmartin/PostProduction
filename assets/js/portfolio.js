document.addEventListener('DOMContentLoaded', function() {
  // Video hover effect removed as requested
  
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

  // Add film projector sound effect (subtle)
  const addProjectorSound = () => {
    const audio = document.createElement('audio');
    audio.id = 'projector-sound';
    audio.loop = true;
    audio.volume = 0.05; // Very low volume
    
    // Create audio source
    const source = document.createElement('source');
    source.src = 'https://freesound.org/data/previews/41/41579_143931-lq.mp3'; // Film projector sound
    source.type = 'audio/mpeg';
    
    audio.appendChild(source);
    document.body.appendChild(audio);
    
    // Play sound on user interaction (browsers require user action to play audio)
    document.addEventListener('click', function() {
      if (audio.paused) {
        audio.play().catch(e => console.log("Audio play failed:", e));
      }
    }, { once: true });
  };
  
  // Initialize clapperboard animation
  const initClapperboard = () => {
    const clapper = document.querySelector('.clapperboard');
    if (clapper) {
      setTimeout(() => {
        clapper.classList.add('animate');
      }, 1000);
    }
  };
  
  addProjectorSound();
  initClapperboard();
});
