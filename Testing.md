<style>
    .video-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        margin: 2rem 0;
    }
    .video-item {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: transform 0.3s ease;
    }
    .video-item:hover {
        transform: translateY(-5px);
    }
    .video-thumb {
        position: relative;
        width: 100%;
        padding-top: 56.25%; /* 16:9 aspect ratio */
        background-color: #f0f0f0;
    }
    .video-thumb img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 3rem;
        background: rgba(0,0,0,0.5);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.8;
    }
    .video-info {
        padding: 15px;
    }
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        z-index: 999;
    }
    .modal-content {
        position: relative;
        width: 80%;
        max-width: 900px;
        margin: 5% auto;
    }
    .close-btn {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
    }
    .video-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
    }
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

# Water Video Gallery

Explore our collection of beautiful water videos showcasing the wonders of nature.

<div class="video-gallery">
    <!-- Video 1 -->
    <div class="video-item" data-video-id="UGPuEDyAsU8">
        <div class="video-thumb">
            <img src="https://img.youtube.com/vi/UGPuEDyAsU8/hqdefault.jpg" alt="Ocean Waves">
            <div class="play-icon">▶</div>
        </div>
        <div class="video-info">
            <h3>Ocean Waves</h3>
            <p>Relaxing ocean waves on tropical beach</p>
        </div>
        </div>
    
    
    
<div class="video-thumb">
<img src="https://img.youtube.com/vi/cI4ryatVkKw/hqdefault.jpg" alt="Waterfall">
<div class="play-icon">▶</div>
</div>
<div class="video-info">
<h3>Waterfall</h3>
<p>Stunning waterfall in pristine forest</p>
</div>


    
    
<div class="video-thumb">
            <img src="https://img.youtube.com/vi/DGIXT7ce3vQ/hqdefault.jpg" alt="Underwater">
            <div class="play-icon">▶</div>
        </div>
        <div class="video-info">
            <h3>Underwater World</h3>
            <p>Exploring the beauty beneath the surface</p>
        </div>
    </div>


</div>

<!-- Video Modal -->
<div id="videoModal" class="modal">
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <div class="video-container">
            <iframe id="videoPlayer" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const videoItems = document.querySelectorAll('.video-item');
        const modal = document.getElementById('videoModal');
        const videoPlayer = document.getElementById('videoPlayer');
        const closeBtn = document.querySelector('.close-btn');
        
        videoItems.forEach(item => {
            item.addEventListener('click', function() {
                const videoId = this.getAttribute('data-video-id');
                videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                modal.style.display = 'block';
            });
        });
        
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            videoPlayer.src = '';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        });
    });
</script>