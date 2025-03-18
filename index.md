---
layout: default
---
<style>
  .profile-image-container {
    position: relative;
    text-align: center;
    margin-bottom: 30px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .profile-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: all 0.5s ease;
    filter: brightness(1);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    border: 8px solid #1a1a1a;
    box-sizing: border-box;
  }
  
  .profile-image-container:hover .profile-image {
    transform: scale(1.03);
    filter: brightness(1.2);
    box-shadow: 0 15px 30px rgba(255, 204, 0, 0.4);
  }
  
  .profile-image-container::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 15px;
    background: linear-gradient(45deg, #ffcc00, transparent, #ffcc00, transparent);
    background-size: 400% 400%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
    animation: gradientBG 5s ease infinite;
  }
  
  .profile-image-container:hover::before {
    opacity: 0.7;
  }
  
  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  /* Fixed shimmer effect */
  .shimmer {
    display: inline-block;
    font-size: 3rem;
    font-weight: 700;
    background-image: linear-gradient(
      -45deg, 
      rgba(255, 204, 0, 1) 0%, 
      rgba(255, 255, 255, 1) 25%, 
      rgba(255, 204, 0, 1) 50%, 
      rgba(255, 255, 255, 1) 75%, 
      rgba(255, 204, 0, 1) 100%
    );
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    animation: shine 3s linear infinite;
    width: 100%;
    text-align: center; 
    letter-spacing: 4px;
    margin: 0 auto;
  }

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  
  /* Fixed title container */
  .site-title-container {
    width: 100%;
    display: block;
    text-align: center;
    margin: 40px auto;
  }
  
  .site-subtitle {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #ccc;
    letter-spacing: 2px;
    text-align: center;
  }
</style>

<div class="profile-image-container">
  <img src="assets/images/1551457847892.png" alt="Warren Martin" class="profile-image">
</div>
<div style="text-align: center; margin-top: 20px;">
  <a href="TESTING.html" style="color: #ffcc00; text-decoration: none; font-size: 1.2rem; font-weight: bold; margin: 0 10px;">
    Test Version
  </a>
  <a href="react-version/index.html" style="color: #ffcc00; text-decoration: none; font-size: 1.2rem; font-weight: bold; margin: 0 10px;">
    React Version
  </a>
  <a href="react-version/cinematic.html" style="color: #ffcc00; text-decoration: none; font-size: 1.2rem; font-weight: bold; margin: 0 10px;">
    Cinematic Version
  </a>
</div>
<div>
  <h1 class="shimmer">WARREN MARTIN</h1>
  <div class="site-subtitle">VIDEO EDITOR · COLORIST · STORYTELLER</div>
</div>

# Promos/Reel

<iframe src="https://player.vimeo.com/video/95359623?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="560" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Star Crossed Killers"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/CiebEcI2dSQ?si=NUUkMN3Z8HfsiEA5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/4ZLRbQ41imI?si=Bs-OAPKU4fI-9gLX" title="Movie Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/GTS9sd-aYD0?si=qzr0SXej5W8clAxH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Short Films



# Arizona State University Biodesign Center

<iframe width="560" height="315" src="https://www.youtube.com/embed/CmL1SnQa2tI?si=GrO6QGksRgTYx6SN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/FW6MXqzeg7M?si=rdInD-yaGF7BMQuL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/T3nPgcY3Sfo?si=sEtPbfQjg-9mB1WP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Documentary

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kf2PoQKTI9Y?si=RXcA9l7335nj9DKF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Events

<iframe src="https://player.vimeo.com/video/168191701?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="560" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Highlight Reel-Wedding HIghlights"></iframe>

<iframe src="https://player.vimeo.com/video/167626373?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="560" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Sample"></iframe>

# School

<iframe width="560" height="315" src="https://www.youtube.com/embed/9TYfcyvSpJQ" title="Student Film Project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/HXqaLyylPsE" title="Campus Documentary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Tests



<script>
(function localFileVideoPlayer() {
  'use strict'
  var URL = window.URL || window.webkitURL
  var displayMessage = function(message, isError) {
    var element = document.querySelector('#message')
    element.innerHTML = message
    element.className = isError ? 'video-message error' : 'video-message info'
  }
  var playSelectedFile = function(event) {
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('#local-video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    var message = 'Can play type "' + type + '": ' + canPlay
    var isError = canPlay === 'no'
    displayMessage(message, isError)

    if (isError) {
      return
    }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
  }
  var inputNode = document.querySelector('#video-input')
  if (inputNode) {
    inputNode.addEventListener('change', playSelectedFile, false)
  }
})();
</script>

<style>
.video-player-container {
  margin: 20px 0;
  padding: 15px;
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
}

.video-message {
  margin: 10px 0;
  padding: 8px;
  border-radius: 4px;
}

.info {
  background-color: rgba(0, 255, 255, 0.2);
}

.error {
  background-color: rgba(255, 0, 0, 0.7);
  color: white;
}

#video-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
  border-radius: 4px;
}

.local-video-player {
  width: 100%;
  background-color: #000;
  border-radius: 5px;
}
</style>
