# One Eyed Graphics - Hugo Website

A professional Hugo website for One Eyed Graphics, specializing in fleet wraps, vehicle graphics, and commercial signage.

## Project Structure

```
hugo-one-eyed-graphics/
├── archetypes/          # Content templates
├── content/             # Markdown content files
│   ├── _index.md       # Home page content
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   └── gallery/        # Gallery entries (managed by Decap CMS)
│       ├── vehicle/
│       ├── signage/
│       └── tradeshow/
├── data/               # Data files
│   └── gallery_categories.yaml  # Gallery category definitions
├── layouts/            # HTML templates
│   ├── _default/       # Default templates
│   │   ├── baseof.html # Base template
│   │   └── single.html # Single page template
│   ├── partials/       # Reusable components
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── gallery.html (with Netlify Image CDN optimization)
│   └── index.html      # Home page template
├── static/             # Static assets
│   ├── admin/          # Decap CMS interface
│   │   ├── index.html # CMS admin page
│   │   └── config.yml # CMS configuration
│   ├── css/
│   │   └── main.css   # All styles
│   ├── js/
│   │   └── main.js    # JavaScript functionality
│   └── images/
│       └── gallery/   # Gallery images by category
│           ├── vehicle/
│           ├── signage/
│           └── tradeshow/
├── hugo.toml          # Hugo configuration
└── DECAP_CMS_SETUP.md # Detailed CMS setup guide
```

## Content Management

### Editing Page Content

All page content is in markdown files in the `content/` directory:

- **Home Page**: `content/_index.md`
- **About Page**: `content/about/_index.md`
- **Contact Page**: `content/contact/_index.md`

Edit the frontmatter (YAML between `---`) to update headlines, CTAs, and other content.

### Managing the Gallery

The gallery system is category-based with sortable/filterable categories. Visitors can click filter buttons to view specific types of work.

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

### Managing Gallery with Decap CMS (Recommended)

The site includes **Decap CMS** (formerly Netlify CMS) - a user-friendly content management system that makes it easy to upload and manage gallery images without touching code or files directly.

#### Setting Up Decap CMS

**First-time setup on Netlify:**

1. **Enable Netlify Identity**:
   - Go to your Netlify dashboard
   - Navigate to **Site settings** > **Identity**
   - Click **Enable Identity**
   - Under **Registration preferences**, select **Invite only** (recommended for security)

2. **Enable Git Gateway**:
   - In Identity settings, go to **Services** > **Git Gateway**
   - Click **Enable Git Gateway**

3. **Invite Users**:
   - In Netlify Identity settings, click **Invite users**
   - Enter email addresses for people who should have CMS access
   - They'll receive an invitation email to set up their account

#### Accessing the CMS

Once Netlify Identity is enabled, access the CMS at:

```
https://oneeyedgraphics.com/admin/
```

Or for local development:
```
http://localhost:1313/admin/
```

#### Adding Gallery Images via CMS

1. **Log in** to the CMS at `/admin/`
2. **Choose the appropriate gallery category**:
   - **Gallery - Vehicle Wraps**
   - **Gallery - Signage**
   - **Gallery - Trade Shows**
3. Click **New [Category] Image** button
4. **Fill in the fields**:
   - **Title** (optional): A descriptive name for organization
   - **Image**: Click to upload your image file
   - **Description** (optional): Additional notes about the project
   - **Date Added**: Automatically filled with current date/time
5. Click **Publish**
6. The image will be automatically saved to the correct folder and appear in your gallery!

#### Benefits of Using Decap CMS

- **No technical knowledge required** - Upload images through a user-friendly interface
- **Automatic organization** - Images are saved to the correct category folders
- **Version control** - All changes are tracked in Git
- **Team collaboration** - Multiple users can manage content
- **Draft/Publish workflow** - Review changes before making them live

### Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: 1200x800px minimum (1920x1280px recommended)
- **File naming**: Use descriptive names with hyphens (e.g., `fleet-van-wrap-hvac.jpg`)
- **File size**: Try to keep images under 2MB before upload for best performance

### Automatic Image Optimization

The gallery uses **Netlify Image CDN** to automatically optimize all images:

#### How It Works

When images are displayed on the site, Netlify automatically:
- **Resizes images** to appropriate sizes for different devices (400px, 800px, 1200px widths)
- **Converts formats** to WebP or AVIF for browsers that support them
- **Compresses images** to balance quality and file size (85% quality)
- **Caches transformations** at the edge for fast global delivery
- **Lazy loads images** as visitors scroll down the page

#### Benefits

- **Faster page loads**: Gallery size reduced from ~95MB to ~5-10MB
- **Better mobile experience**: Serves smaller images to phones and tablets
- **Modern formats**: Automatically uses WebP/AVIF when supported
- **Zero configuration**: Works automatically for all gallery images
- **Free with Netlify**: No additional cost beyond normal bandwidth

#### Technical Details

Images are served through Netlify Image CDN with these parameters:
- **URL format**: `/.netlify/images?url=/images/gallery/{category}/{filename}.jpg&w=800&fit=cover&q=85`
- **Responsive srcset**: Multiple sizes for different screen widths
- **Fit mode**: Cover (maintains aspect ratio, fills the container)
- **Quality**: 85% (optimal balance between quality and file size)

This means you can upload high-resolution images and they'll automatically be optimized for web delivery!

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
