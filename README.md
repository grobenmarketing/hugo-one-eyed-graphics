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

3. Run the development server:
   ```bash
   hugo server -D
   ```

4. Open your browser to `http://localhost:1313`

## Content Management

### Editing Page Content

All page content is in markdown files in the `content/` directory:

- **Home Page**: `content/_index.md`
- **About Page**: `content/about/_index.md`
- **Contact Page**: `content/contact/_index.md`

Edit the frontmatter (YAML between `---`) to update headlines, CTAs, and other content.

### Managing the Gallery

The gallery system is category-based and easy to manage:

#### Adding Images to Existing Categories

1. Navigate to `static/images/gallery/`
2. Choose the appropriate category folder:
   - `vehicle/` - Vehicle wraps
   - `signage/` - Signs and banners
   - `tradeshow/` - Trade show displays
3. Copy your images into the folder
4. Images will automatically appear on the website

#### Adding a New Category

1. Create a new folder in `static/images/gallery/` (e.g., `boats/`)
2. Edit `data/gallery_categories.yaml`:
   ```yaml
   - name: "Boat Wraps"
     slug: "boats"
   ```
3. Add images to the new folder

**Note**: The `slug` must match the folder name exactly.

### Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: 1200x800px minimum (1920x1280px recommended)
- **File naming**: Use descriptive names with hyphens (e.g., `fleet-van-wrap-hvac.jpg`)
- **Optimization**: Compress images before uploading to keep page load times fast

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

## Building for Production

```bash
hugo --minify
```

The site will be built to the `public/` directory, ready for deployment.

## Deployment

### Netlify

1. Push your repository to GitHub
2. Connect your repo to Netlify
3. Build command: `hugo --minify`
4. Publish directory: `public`

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
