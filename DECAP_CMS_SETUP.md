# Decap CMS Setup for One Eyed Graphics

## What is Decap CMS?

Decap CMS (formerly Netlify CMS) is a free, open-source content management system that provides a user-friendly interface for managing content and media files in your Git repository.

## Setup Instructions

### 1. Enable Netlify Identity

Decap CMS uses Netlify Identity for authentication. Follow these steps:

1. Go to your Netlify dashboard
2. Navigate to **Site settings** > **Identity**
3. Click **Enable Identity**
4. Under **Registration preferences**, select **Invite only** (recommended for security)
5. Under **Services** > **Git Gateway**, click **Enable Git Gateway**

### 2. Invite Users

1. In Netlify Identity settings, click **Invite users**
2. Enter email addresses for people who should have CMS access
3. They'll receive an invitation email with a link to set up their account

### 3. Access the CMS

Once Netlify Identity is enabled, you can access the CMS at:

```
https://oneeyedgraphics.com/admin/
```

Or for local development:
```
http://localhost:1313/admin/
```

### 4. Local Development

For local development, you need to run Decap CMS with the local backend:

1. Install the Decap CMS proxy server:
   ```bash
   npx decap-server
   ```

2. In another terminal, run Hugo:
   ```bash
   hugo server
   ```

3. Access the CMS at `http://localhost:1313/admin/`
4. Login with any email/password (authentication is bypassed locally)

## Gallery Image Management

### How It Works

The gallery is organized into three categories:
- **Vehicle Wraps** → `/static/images/gallery/vehicle/`
- **Signage** → `/static/images/gallery/signage/`
- **Trade Shows** → `/static/images/gallery/tradeshow/`

### Adding Gallery Images

1. Log in to the CMS at `/admin/`
2. Choose the appropriate gallery category:
   - **Gallery - Vehicle Wraps**
   - **Gallery - Signage**
   - **Gallery - Trade Shows**
3. Click **New Vehicle Wrap Image** (or the corresponding button)
4. Fill in the fields:
   - **Title** (optional): A name for organization
   - **Image**: Click to upload your image
   - **Description** (optional): Additional notes
   - **Date Added**: Auto-filled with current date
5. Click **Publish**

### Image Best Practices

- **Recommended size**: 1200px × 800px or larger
- **Format**: JPEG for photos, PNG for graphics with transparency
- **File size**: Try to keep images under 2MB before upload
- Images will be automatically optimized by Netlify Image CDN when displayed

### Where Images Are Stored

- **Content files**: Stored in `/content/gallery/{category}/`
- **Image files**: Stored in `/static/images/gallery/{category}/`

The gallery automatically displays all images from the static folders, optimized using Netlify Image CDN.

## Image Optimization

The gallery now uses **Netlify Image CDN** for automatic optimization:

- **Responsive images**: Different sizes served for mobile, tablet, and desktop
- **Format conversion**: Automatically serves WebP or AVIF to supported browsers
- **Lazy loading**: Images load as you scroll for faster page load
- **Compression**: Quality optimized to 85% for balance between quality and file size

### CDN Parameters Used

- **Sizes**: 400px, 800px, and 1200px widths
- **Fit**: Cover (maintains aspect ratio)
- **Quality**: 85%
- All transformations are cached at the edge for fast delivery

## Managing Gallery Categories

To add, remove, or edit gallery categories:

1. In the CMS, go to **Site Settings** > **Gallery Categories**
2. Edit the list of categories
3. Each category needs:
   - **Name**: Display name (e.g., "Vehicle Wraps")
   - **Slug**: URL-friendly identifier (e.g., "vehicle")
4. Click **Publish**
5. You'll also need to create the corresponding folder in `/static/images/gallery/{slug}/`

## Troubleshooting

### Can't access /admin/

- Ensure Netlify Identity is enabled
- Check that Git Gateway is enabled
- Verify your site is deployed on Netlify

### Images not showing up in gallery

- Check that images are uploaded to the correct folder: `/static/images/gallery/{category}/`
- Verify the folder name matches the category slug in `data/gallery_categories.yaml`
- Rebuild the site with `hugo` command

### Local backend not working

- Make sure `npx decap-server` is running in a separate terminal
- Check that `local_backend: true` is set in `/static/admin/config.yml`
- Clear browser cache and reload

## Additional Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Netlify Image CDN Documentation](https://docs.netlify.com/image-cdn/)
