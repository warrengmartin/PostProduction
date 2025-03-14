---
layout: default
---

# Video Gallery

<div class="video-gallery">
  <div class="video-item">
    <iframe width="100%" height="200" src="https://www.youtube.com/embed/KwBg3-iJQ9U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="video-item">
    <iframe width="100%" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="video-item">
    <iframe width="100%" height="200" src="https://www.youtube.com/embed/3JZ_D3ELwOQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <!-- Add more videos here -->
</div>

<style>
/* Responsive grid layout for the video gallery */
.video-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.video-item {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
</style>
