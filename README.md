# One Eyed Graphics - Hugo Website

A professional Hugo website for One Eyed Graphics, specializing in fleet wraps, vehicle graphics, and commercial signage.

## Project Structure

```
hugo-one-eyed-graphics/
├── archetypes/          # Content templates
├── content/             # Markdown content files
│   ├── _index.md       # Home page content
│   ├── about/          # About page
│   └── contact/        # Contact page
├── data/               # Data files
│   └── gallery_categories.yaml  # Gallery category definitions
├── layouts/            # HTML templates
│   ├── _default/       # Default templates
│   │   ├── baseof.html # Base template
│   │   └── single.html # Single page template
│   ├── partials/       # Reusable components
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── gallery.html
│   └── index.html      # Home page template
├── static/             # Static assets
│   ├── css/
│   │   └── main.css   # All styles
│   ├── js/
│   │   └── main.js    # JavaScript functionality
│   └── images/
│       └── gallery/   # Gallery images by category
│           ├── vehicle/
│           ├── signage/
│           └── tradeshow/
└── hugo.toml          # Hugo configuration
```

## Getting Started

### Prerequisites

- Hugo Extended v0.112.0 or higher
- Git
- Node.js 16+ (for image optimization)

### Installation

1. Install Hugo:
   ```bash
   # macOS
   brew install hugo

   # Windows (using Chocolatey)
   choco install hugo-extended

   # Linux (Ubuntu/Debian)
   sudo apt-get install hugo
   ```

2. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hugo-one-eyed-graphics
   ```

3. Install Node dependencies (for image optimization):
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   hugo server -D
   ```

5. Open your browser to `http://localhost:1313`

## Content Management

### Editing Page Content

All page content is in markdown files in the `content/` directory:

- **Home Page**: `content/_index.md`
- **About Page**: `content/about/_index.md`
- **Contact Page**: `content/contact/_index.md`

Edit the frontmatter (YAML between `---`) to update headlines, CTAs, and other content.

### Managing the Gallery

The gallery system is category-based with sortable/filterable categories. Visitors can click filter buttons to view specific types of work.

#### Current Gallery Structure

```
static/images/gallery/
├── vehicle/      (14 images)
├── signage/      (8 images)
└── tradeshow/    (26 images)
```

#### Adding Images to Existing Categories

Simply add new images to the appropriate category folder:

- `static/images/gallery/vehicle/` - for vehicle wraps and fleet graphics
- `static/images/gallery/signage/` - for signs, building graphics, and logos
- `static/images/gallery/tradeshow/` - for trade show displays and booth graphics

**The gallery will automatically pick them up when the site rebuilds!**

#### Adding a New Category

If you want to add more categories (like "Window Graphics" or "Banners"), follow these steps:

1. **Add the category** to `data/gallery_categories.yaml`:
   ```yaml
   - name: "Window Graphics"
     slug: "window"
   ```

2. **Create a new folder** in `static/images/gallery/` matching the slug:
   ```
   static/images/gallery/window/
   ```

3. **Add images** to the new folder

4. The filter button will automatically appear on the gallery section

**Note**: The `slug` must match the folder name exactly.

### Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: 1200x800px minimum (1920x1280px recommended)
- **File naming**: Use descriptive names with hyphens (e.g., `fleet-van-wrap-hvac.jpg`)
- **Optimization**: **IMPORTANT** - Compress images before uploading to keep page load times fast

#### Image Optimization

**⚠️ CRITICAL**: Gallery images are currently 2.6-4.7MB each! This significantly impacts page load speed.

To optimize your images, we've included an automated script:

```bash
# Install dependencies (first time only)
npm install

# Run the optimization script
npm run optimize-images
```

This will:
- Resize images to max 1920px width (maintains aspect ratio)
- Compress to 85% quality (nearly indistinguishable from original)
- Reduce file sizes by 70-90% typically
- Backup originals to `originals/` folders (not committed to git)

**Manual Optimization Alternatives:**
- [TinyPNG](https://tinypng.com/) - Free online compression
- [Squoosh](https://squoosh.app/) - Google's image optimization tool
- Photoshop: Save for Web at 80-85% quality

## Site Configuration

Edit `hugo.toml` to update:

- Site title and URL
- Contact information (phone, email, address)
- Social media links
- Company slogan

## Customization

### Styling

All CSS is in `static/css/main.css`. The design uses CSS variables for easy color customization:

```css
:root {
    --color-dark: #2D3748;
    --color-accent: #0E7C86;
    --color-accent-secondary: #D4A574;
    /* ... */
}
```

### Fonts

The site uses Google Fonts:
- **Headings**: Oswald (bold, uppercase)
- **Body**: Lato

To change fonts, edit the Google Fonts link in `layouts/_default/baseof.html` and update the CSS variables in `main.css`.

## Recent Features & Improvements

### ✨ New Features (Latest Session)

1. **Hero Background Image**
   - Homepage hero now uses IMG_4610 as a beautiful background image
   - Location: `static/css/main.css` line 187

2. **Gallery Modal Viewer**
   - Click any gallery image to view full-screen
   - Smooth zoom-in animation
   - Close with: X button, Escape key, or click outside
   - Implementation: `static/js/main.js`, `layouts/_default/baseof.html`

3. **About Page Images**
   - Professional image next to header text
   - Service section images under each service description
   - All images use lazy loading for performance

4. **Performance Optimizations**
   - ✅ Lazy loading on all gallery images
   - ✅ Browser caching headers (1 year for assets, 1 hour for HTML)
   - ✅ CSS preloading for faster initial render
   - ✅ Minification enabled (HTML, CSS, JS)
   - ⚠️ **Image optimization needed** - See Image Optimization section above

### Performance Metrics

**Current State:**
- 48 gallery images totaling ~150MB+ unoptimized
- Lazy loading prevents loading all images at once
- Modal prevents multiple full-res image loads

**After Running Optimization:**
- Expected reduction to ~20-30MB total
- 80-90% faster gallery load times
- Improved mobile experience significantly

## Building for Production

```bash
npm run build
# or
hugo --gc --minify
```

The site will be built to the `public/` directory, ready for deployment.

## Deployment

### Netlify

1. Push your repository to GitHub
2. Connect your repo to Netlify
3. Build command: `hugo --gc --minify`
4. Publish directory: `public`

**Performance Configuration:**
- ✅ Caching headers already configured in `netlify.toml`
- ✅ Minification enabled via Hugo
- ✅ Security headers included

**Optional: Netlify Image CDN** (Paid Feature)
- Automatically serves WebP/AVIF to supported browsers
- Auto-resizes images based on device
- Further CDN caching improvements

To enable (requires paid plan):
```toml
# Add to netlify.toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### GitHub Pages

1. Add this to `hugo.toml`:
   ```toml
   publishDir = "docs"
   ```
2. Build: `hugo --minify`
3. Commit and push the `docs/` directory
4. Enable GitHub Pages in repository settings

### Traditional Hosting

1. Build: `hugo --minify`
2. Upload the contents of `public/` to your web server

## Support

For questions or issues, please contact:
- Phone: 419-565-8945
- Email: info@oneeyedgraphics.com

## License

Copyright © 2025 One Eyed Graphics. All Rights Reserved.
