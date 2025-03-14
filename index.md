---
layout: default
---

# Video Gallery

<div class="video-gallery">
  <div class="video-item">
    <iframe width="100%" height="200" src="https://www.youtube.com/embed/KwBg3-iJQ9U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>Video Title 1</h3>
    <p>This is a short description of the first video.</p>
  </div>
  <div class="video-item">
    <iframe width="100%" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>Video Title 2</h3>
    <p>This is a short description of the second video.</p>
  </div>
  <div class="video-item">
    <iframe width="100%" height="200" src="https://www.youtube.com/embed/3JZ_D3ELwOQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>Video Title 3</h3>
    <p>This is a short description of the third video.</p>
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
  text-align: center;
}

.video-item h3 {
  margin: 10px 0 5px;
  font-size: 18px;
}

.video-item p {
  margin: 0;
  font-size: 14px;
  color: #666;
}
</style>
