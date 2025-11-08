# Gallery Images

This directory contains all gallery images organized by category.

## Directory Structure

```
gallery/
├── vehicle/       # Vehicle wrap images
├── signage/       # Signage images
└── tradeshow/     # Trade show images
```

## How to Add New Images

### Adding Images to Existing Categories

1. Choose the appropriate category folder:
   - `vehicle/` - for vehicle wraps, fleet graphics, car wraps
   - `signage/` - for storefront signs, building wraps, banners
   - `tradeshow/` - for trade show displays, event materials

2. Copy your images into the category folder
3. Supported formats: JPG, PNG, WebP
4. Recommended size: 1200x800px or larger for best quality
5. Images will automatically appear in the gallery on your website

### Adding a New Category

1. Create a new folder in `static/images/gallery/` with a descriptive slug name (lowercase, no spaces)
2. Add the category to `data/gallery_categories.yaml`:
   ```yaml
   - name: "Display Name"
     slug: "folder-name"
   ```
3. Add your images to the new folder

### Image Naming Best Practices

- Use descriptive names: `fleet-van-wrap-plumbing.jpg` instead of `IMG_001.jpg`
- Use lowercase and hyphens instead of spaces
- Keep filenames reasonable in length

## Examples

```
vehicle/
├── fleet-van-wrap-hvac-company.jpg
├── pickup-truck-partial-wrap-roofing.jpg
└── box-truck-full-wrap-delivery.jpg

signage/
├── storefront-3d-letters-restaurant.jpg
└── window-vinyl-retail-shop.jpg

tradeshow/
├── popup-banner-construction-expo.jpg
└── booth-display-home-show.jpg
```
