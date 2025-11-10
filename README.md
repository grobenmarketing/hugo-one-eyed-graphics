# One Eyed Graphics Website

Hugo static site for One Eyed Graphics - fleet wraps, vehicle graphics, and commercial signage.

## Development

```bash
# Install Hugo (macOS)
brew install hugo

# Run locally
hugo server -D

# Build for production
hugo --minify
```

## Editing Content

All page content is in `content/` directory:

- **Home**: `content/_index.md`
- **About**: `content/about/_index.md`
- **Contact**: `content/contact/_index.md`

Edit the YAML frontmatter between `---` to update text, headlines, and CTAs.

### HTML Formatting

You can use HTML tags in content for formatting:
- `<br>` - Line breaks
- `<em>` or `<i>` - Italics
- `<u>` - Underline
- `<strong>` or `<b>` - Bold

Example:
```yaml
hero:
  title: "Your Fleet Should Be<br><u>Selling For You</u>"
```

## Gallery Management

Add images to category folders in `static/images/gallery/`:
- `vehicle/` - Vehicle wraps and fleet graphics
- `boat/` - Boat wraps and graphics
- `signs/` - Signage and building graphics
- `trailers/` - Trailer wraps
- `other/` - Other projects

Images are automatically optimized via Netlify Image CDN (responsive sizing, WebP/AVIF conversion, compression).

**Image Guidelines:**
- Format: JPG or PNG
- Recommended size: 1200x800px minimum
- Keep files under 2MB

## Configuration

Edit `hugo.toml` to update:
- Site title and URL
- Contact info (phone, email, address)
- Social media links

## Deployment

**Netlify:**
- Build command: `hugo --gc --minify`
- Publish directory: `public`
- Hugo version: 0.140.2

Site is configured in `netlify.toml` with optimized settings and security headers.
