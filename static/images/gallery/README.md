# Gallery Images - Automatic Category System

This directory contains all gallery images organized by category. The gallery system **automatically detects categories** from folder names - no manual configuration needed!

## 🚀 How It Works

The gallery automatically:
- Scans folders in `static/images/gallery/`
- Creates category filter buttons from folder names
- Optimizes images using Netlify Image CDN
- Generates 480px thumbnails for fast loading
- Provides responsive images for all screen sizes

## 📁 Directory Structure

```
static/images/gallery/
├── boat/         # Boat wrap images
├── other/        # Other projects
├── signs/        # Signage images
├── trailers/     # Trailer wrap images
├── tradeshow/    # Trade show images
└── vehicle/      # Vehicle wrap images
```

## ✨ How to Add New Images

### Adding Images to Existing Categories

1. Choose the appropriate category folder
2. Copy your images into that folder
3. Supported formats: JPG, JPEG, PNG, WebP
4. Images will **automatically appear** in the gallery - no config changes needed!

### Adding a New Category

1. Create a new folder in `static/images/gallery/` with a descriptive name
   - Use lowercase for consistency (e.g., `boat`, `vehicle`, `signs`)
   - The folder name becomes the category filter ID
   - The display name is automatically capitalized (e.g., `boat` → `Boat`)

2. Add your images to the new folder

3. That's it! The new category will automatically appear in the gallery with a filter button

## 🎯 Examples

### Add images to existing category:
```bash
# Just copy images to the folder
cp my-new-wrap.jpg static/images/gallery/vehicle/
```

### Create a new category:
```bash
# Create folder and add images
mkdir static/images/gallery/motorcycles
cp motorcycle-*.jpg static/images/gallery/motorcycles/
```

The new "Motorcycles" category will automatically appear!

## 🖼️ Image Optimization

All images are automatically optimized using Netlify Image CDN:
- **Thumbnail**: 480px wide for gallery grid (fast loading)
- **Medium**: 800px wide for larger screens
- **Large**: 1200px wide for full-size viewing
- Quality: 85% (thumbnails/medium), 90% (large)
- Lazy loading enabled for better performance

## 📝 Image Naming Best Practices

- Use descriptive names: `fleet-van-wrap-plumbing.jpg`
- Use lowercase and hyphens instead of spaces
- Avoid generic names like `IMG_001.jpg`
- Keep filenames reasonable in length

## 🔄 Workflow Example

```bash
# 1. Add new images for boat wraps
cp boat-wrap-*.jpg static/images/gallery/boat/

# 2. Create new category for RV wraps
mkdir static/images/gallery/rv
cp rv-wrap-*.jpg static/images/gallery/rv/

# 3. Deploy to Netlify
git add .
git commit -m "Add new gallery images and RV category"
git push

# Gallery automatically updates with new images and category!
```

## 🎨 Current Categories

The gallery automatically includes all folders in this directory:
- Boat
- Other
- Signs
- Trailers
- Tradeshow
- Vehicle

Add more by simply creating new folders!
