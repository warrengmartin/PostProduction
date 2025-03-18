---
layout: default
---
<div style="text-align: center; margin-bottom: 20px;">
  <img src="assets/images/1551457847892.png" alt="Warren Martin" style="max-width: 100%; height: auto; border-radius: 5px;">
</div>
<div class="site-title-container">
  <div style="text-align: center;">
    <h1 class="shimmer">WARREN MARTIN</h1>
    <div class="site-subtitle">VIDEO EDITOR · COLORIST · STORYTELLER</div>
  </div>
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
