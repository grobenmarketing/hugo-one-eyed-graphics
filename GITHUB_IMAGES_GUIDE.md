# GitHub Images: Best Practices and Limitations

## GitHub Repository Size Limitations

### File Size Limits
- **Maximum file size**: 100 MB per file (hard limit)
- **Warning threshold**: 50 MB (GitHub will warn you)
- **Recommended**: Keep files under 10 MB when possible

### Repository Size Limits
- **Recommended**: Keep total repository under 1 GB
- **Soft limit**: 5 GB (GitHub will send warnings)
- **Best practice**: Use Git LFS for repositories approaching 1 GB

## Best Practices for Images in Git/GitHub

### 1. Optimize Images Before Committing

**For Web Images (Gallery/Content):**
- Resize to appropriate dimensions (1920x1280px max for gallery)
- Compress using tools like:
  - [TinyPNG](https://tinypng.com/) - Online compression
  - [ImageOptim](https://imageoptim.com/) - Mac app
  - [Squoosh](https://squoosh.app/) - Web-based Google tool
  - Command line: `jpegoptim`, `optipng`, or `imagemagick`

**Target Sizes:**
- Hero images: 200-500 KB
- Gallery images: 100-300 KB
- Thumbnails: 20-50 KB

### 2. Use Appropriate Formats

- **JPEG/JPG**: Best for photographs, supports compression
- **PNG**: Best for graphics with transparency, logos
- **WebP**: Modern format, 25-35% smaller than JPEG (great browser support now)
- **Avoid**: BMP, TIFF, uncompressed formats

### 3. Version Control Considerations

**What to Track in Git:**
- ✅ Final, optimized images
- ✅ Logo files and brand assets
- ✅ Icons and UI elements

**What NOT to Track:**
- ❌ Source files (PSD, AI, Sketch)
- ❌ Multiple versions/iterations
- ❌ Very large print-quality images
- ❌ Raw camera files

### 4. Alternative Solutions for Large Image Libraries

#### Option 1: Git LFS (Large File Storage)
GitHub's solution for large files:

```bash
# Install Git LFS
git lfs install

# Track image files
git lfs track "*.jpg"
git lfs track "*.png"
git lfs track "*.gif"

# Now commit as normal
git add .gitattributes
git commit -m "Configure Git LFS"
```

**Limits with GitHub LFS:**
- Free: 1 GB storage, 1 GB bandwidth/month
- Paid: $5/month for 50 GB storage + 50 GB bandwidth
- Additional packs available

#### Option 2: External CDN/Storage
For extensive galleries, consider:

**Cloud Storage Options:**
- **Cloudinary**: Image optimization + CDN, free tier available
- **AWS S3 + CloudFront**: Scalable, pay-as-you-go
- **Netlify Large Media**: Git LFS alternative for Netlify hosting
- **Backblaze B2**: Very affordable object storage

**Benefits:**
- Faster page loads
- Automatic image optimization
- No repository bloat
- Better for very large image libraries

#### Option 3: Hybrid Approach (Recommended for This Project)

1. **In Repository** (static/images/):
   - Logo and brand assets
   - UI elements
   - 10-20 showcase gallery images (optimized)

2. **External CDN**:
   - Full client gallery archives
   - High-resolution downloads
   - Video content

## Recommendations for One Eyed Graphics

### Current Approach (Small to Medium Gallery)
If you have **fewer than 100 images**:
1. Optimize all images to 100-300 KB each
2. Commit directly to repository
3. Total size should stay well under 100 MB

### Growing Gallery (100+ images)
When approaching 100 images:
1. Enable Git LFS for image files
2. Keep repository lean
3. Monitor repository size regularly

### Large Gallery (500+ images)
For extensive portfolios:
1. Use external CDN (Cloudinary or AWS S3)
2. Keep only thumbnails in repository
3. Load full images from CDN
4. Modify Hugo templates to support CDN URLs

## Quick Reference

### Optimizing an Image (Command Line)

```bash
# JPEG compression
jpegoptim --max=85 --strip-all image.jpg

# PNG compression
optipng -o7 image.png

# Batch convert to WebP
for file in *.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

### Checking Repository Size

```bash
# See size of git repository
git count-objects -vH

# See largest files in repository
git rev-list --objects --all |
  git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' |
  sed -n 's/^blob //p' |
  sort --numeric-sort --key=2 |
  tail -n 10
```

## Summary

**For this Hugo site:**
- ✅ Optimize images to 100-300 KB before adding to repository
- ✅ Use JPG for photos, PNG for graphics, WebP for best performance
- ✅ Commit optimized images directly to `static/images/gallery/`
- ✅ Keep total repository under 500 MB
- ⚠️ Enable Git LFS if gallery grows beyond 100 images
- ⚠️ Consider external CDN if you approach 500+ images

**Most important**: Always optimize images before committing!
