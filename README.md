
# Portfolio Site - Easy Video Management

This site uses a special system to make adding videos super easy. Here's how to add new videos to your portfolio:

## How to Add Videos

1. Open the `index.md` file
2. Find the section where you want to add a new video (like "Trailer/Teaser", "Short Films", etc.)
3. Look for the HTML comments that look like this:
```html
<!-- VIDEO: Trailer/Teaser
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEOID" title="Video Title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div class="video-details">
  <h3>Video Title</h3>
  <p>Your video description goes here.</p>
</div>
-->
```

4. Copy this template and paste it within the same section
5. Replace the iframe code with your YouTube/Vimeo/Screenpal embed code (the code you get from "Share > Embed")
6. Update the title and description inside the `video-details` div
7. Make sure to keep the `VIDEO: SectionName` at the beginning of the comment
8. Save the file

## Example

If you want to add a new trailer, you would:

```html
<!-- VIDEO: Trailer/Teaser
<iframe width="560" height="315" src="https://www.youtube.com/embed/ABC123XYZ" title="My Awesome Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div class="video-details">
  <h3>My Awesome Trailer</h3>
  <p>This is my latest trailer showing my editing skills.</p>
</div>
-->
```

## Sections Available

The site is organized into these sections:
- Trailer/Teaser (use `VIDEO: Trailer/Teaser` at the beginning)
- Short Films (use `VIDEO: Short Films`)
- Arizona State University Biodesign Center (use `VIDEO: Biodesign`)
- Weddings (use `VIDEO: Weddings`)
- School (use `VIDEO: School`)
- Tests (use `VIDEO: Tests`)

## How It Works

The site automatically:
- Extracts YouTube thumbnails from your embed codes
- Creates the proper gallery layout
- Adds the modal popup functionality
- Makes everything responsive on all devices

All you have to do is paste your embed code in the right section!
