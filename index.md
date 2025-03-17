---
layout: default
---

<div class="site-title-container">
  <h1 class="shimmer">WARREN MARTIN</h1>
  <div class="site-subtitle">VIDEO EDITOR · COLORIST · STORYTELLER</div>
</div>

<style>
  .shimmer {
    background: linear-gradient(90deg, #000, #555, #fff, #555, #000);
    background-size: 200% auto;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: shimmer 3s linear infinite;
    margin-bottom: 0.2rem;
  }
  
  @keyframes shimmer {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
</style>

<!-- Video Modal -->
<div id="video-modal" class="modal">
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <div class="modal-video-container">
      <iframe id="modal-iframe" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>

# Trailer/Teaser

<iframe width="560" height="315" src="https://www.youtube.com/embed/4ZLRbQ41imI?si=Bs-OAPKU4fI-9gLX" title="Movie Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Season Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/KwBg3-iJQ9U?si=f0Fb6M0MS6WwCbnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Short Films

<iframe src="https://go.screenpal.com/player/cTe2bAn1Rkv?width=100%&height=100%&ff=1&title=0" title="Behind the Scenes" frameborder="0" scrolling="no" allowfullscreen></iframe>

# Arizona State University Biodesign Center

<video width="1280" height="720" controls autoplay muted loop>
<source src="https://github.com/warrengmartin/PostProduction/blob/master/assets/videos/ArizonaStateUniversity_Reel.mp4" type="video/mp4">
 Your browser does not support the video tag.
</video>

<video width="560" height="315" controls title="Arizona State University Reel">
  <source src="{{ site.baseurl }}assets/videos/ArizonaStateUniversity_Reel.mp4" type="video/mp4">
  <!-- Fallback message -->
  Your browser does not support the video tag.
</video>

<iframe width="560" height="315" src="https://www.youtube.com/embed/CmL1SnQa2tI?si=GrO6QGksRgTYx6SN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/FW6MXqzeg7M?si=rdInD-yaGF7BMQuL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/T3nPgcY3Sfo?si=sEtPbfQjg-9mB1WP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Weddings

<iframe width="560" height="315" src="https://www.youtube.com/embed/YtZrWnxcjWI" title="Sarah & Michael's Wedding" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/xQvlBTT-DH0" title="Wedding Highlight Reel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# School

<iframe width="560" height="315" src="https://www.youtube.com/embed/9TYfcyvSpJQ" title="Student Film Project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/HXqaLyylPsE" title="Campus Documentary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Tests

<iframe width="560" height="315" src="https://www.youtube.com/embed/XFT75Nju6nU" title="Color Grading Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/X7RMkY8JxD0" title="Motion Graphics Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<script src="https://go.screenpal.com/player/appearance/cTe2bAn1Rkv"></script>

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
