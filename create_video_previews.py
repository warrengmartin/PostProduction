import os
import random
import subprocess
import glob
from pathlib import Path
import shutil
import tempfile
import time

def create_directory_if_not_exists(directory):
    """Create directory if it doesn't exist."""
    if not os.path.exists(directory):
        os.makedirs(directory)
        print(f"Created directory: {directory}")

def get_video_duration(video_path):
    """Get video duration in seconds using ffprobe."""
    cmd = [
        'ffprobe', 
        '-v', 'error', 
        '-show_entries', 'format=duration', 
        '-of', 'default=noprint_wrappers=1:nokey=1', 
        video_path
    ]
    try:
        output = subprocess.check_output(cmd).decode('utf-8').strip()
        return float(output)
    except (subprocess.CalledProcessError, ValueError):
        print(f"Error getting duration for {video_path}. Using default 10 seconds.")
        return 10

def extract_frames(video_path, output_dir, start_time, duration=3, fps=10):
    """Extract frames from video starting at start_time for duration seconds."""
    os.makedirs(output_dir, exist_ok=True)
    
    # Extract frames using ffmpeg
    cmd = [
        'ffmpeg',
        '-ss', str(start_time),
        '-i', video_path,
        '-t', str(duration),
        '-vf', f'fps={fps}',
        f'{output_dir}/frame_%04d.png'
    ]
    
    try:
        subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error extracting frames from {video_path}: {e}")
        print(f"stderr: {e.stderr.decode('utf-8')}")
        return False

def create_gif(frames_dir, output_path, fps=10):
    """Create GIF from extracted frames."""
    # Use ffmpeg to create GIF
    cmd = [
        'ffmpeg',
        '-framerate', str(fps),
        '-pattern_type', 'glob',
        '-i', f'{frames_dir}/frame_*.png',
        '-vf', 'scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse',
        '-loop', '0',  # Loop forever
        output_path
    ]
    
    try:
        subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error creating GIF {output_path}: {e}")
        print(f"stderr: {e.stderr.decode('utf-8')}")
        return False

def process_video(video_path, output_dir):
    """Process a single video to create a GIF preview."""
    video_filename = os.path.basename(video_path)
    video_name = os.path.splitext(video_filename)[0]
    
    print(f"\nProcessing video: {video_filename}")
    
    # Create output directory for GIFs if it doesn't exist
    create_directory_if_not_exists(output_dir)
    
    # Temp directory for frames
    with tempfile.TemporaryDirectory() as temp_frames_dir:
        # Get video duration
        duration = get_video_duration(video_path)
        
        # Choose a random starting point, at least 2 seconds from start and 5 seconds from end
        safe_start = min(2, max(0, duration - 8))
        safe_end = max(0, duration - 5)
        
        if safe_end <= safe_start:
            start_time = 0
        else:
            start_time = random.uniform(safe_start, safe_end)
        
        clip_duration = min(3, duration - start_time)
        
        print(f"  Video duration: {duration:.2f}s")
        print(f"  Creating 3-second clip starting at: {start_time:.2f}s")
        
        # Extract frames
        if extract_frames(video_path, temp_frames_dir, start_time, clip_duration):
            # Create GIF
            gif_path = os.path.join(output_dir, f"{video_name}_preview.gif")
            if create_gif(temp_frames_dir, gif_path):
                print(f"  ✅ Created GIF: {gif_path}")
                
                # Also create a still image thumbnail from the middle frame
                frames = sorted(glob.glob(f"{temp_frames_dir}/frame_*.png"))
                if frames:
                    middle_frame = frames[len(frames) // 2]
                    thumbnail_path = os.path.join(output_dir, f"{video_name}_thumbnail.png")
                    shutil.copy(middle_frame, thumbnail_path)
                    print(f"  ✅ Created thumbnail: {thumbnail_path}")
            else:
                print(f"  ❌ Failed to create GIF for {video_filename}")
        else:
            print(f"  ❌ Failed to extract frames from {video_filename}")

def main():
    """Main function to process all videos in the specified directory."""
    # Define source and output directories
    videos_dir = "/Users/wgm/dockerStation/docker-images/PostPro_site/PostProduction#/assets/videos"
    output_dir = "/Users/wgm/dockerStation/docker-images/PostPro_site/PostProduction#/assets/images/previews"
    
    # Ensure directories exist
    create_directory_if_not_exists(output_dir)
    
    # Find all video files
    video_extensions = ['.mp4', '.mov', '.avi', '.mkv', '.webm']
    video_files = []
    
    for ext in video_extensions:
        video_files.extend(glob.glob(f"{videos_dir}/*{ext}"))
    
    if not video_files:
        print(f"No video files found in {videos_dir}")
        return
    
    print(f"Found {len(video_files)} video files")
    
    # Process each video
    for video_path in video_files:
        process_video(video_path, output_dir)
    
    print("\nAll videos processed! GIF previews saved to:", output_dir)

if __name__ == "__main__":
    start_time = time.time()
    main()
    elapsed = time.time() - start_time
    print(f"\nScript completed in {elapsed:.2f} seconds")
