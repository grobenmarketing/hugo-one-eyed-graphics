#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * This script optimizes images in the static/images/gallery directory
 * by resizing and compressing them to reduce file sizes while maintaining quality.
 *
 * Usage:
 *   npm install sharp --save-dev
 *   node optimize-images.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (err) {
  console.error('❌ Error: sharp is not installed.');
  console.error('Please run: npm install sharp --save-dev');
  process.exit(1);
}

const GALLERY_DIR = path.join(__dirname, 'static', 'images', 'gallery');
const MAX_WIDTH = 1920; // Max width for images
const QUALITY = 85; // JPEG quality (0-100)

async function optimizeImage(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;

    // Create a backup directory
    const backupDir = path.join(path.dirname(filePath), 'originals');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    // Backup original
    const filename = path.basename(filePath);
    const backupPath = path.join(backupDir, filename);
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    // Optimize image
    await sharp(filePath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(filePath + '.tmp');

    // Replace original with optimized
    fs.renameSync(filePath + '.tmp', filePath);

    const newStats = fs.statSync(filePath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✅ ${filename}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);

  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && entry.name !== 'originals') {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg)$/i.test(entry.name)) {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📁 Gallery directory: ${GALLERY_DIR}`);
  console.log(`📐 Max width: ${MAX_WIDTH}px`);
  console.log(`🎨 Quality: ${QUALITY}%\n`);

  if (!fs.existsSync(GALLERY_DIR)) {
    console.error('❌ Gallery directory not found:', GALLERY_DIR);
    process.exit(1);
  }

  await processDirectory(GALLERY_DIR);

  console.log('\n✨ Image optimization complete!');
  console.log('📦 Original images backed up in "originals" folders');
}

main().catch(console.error);
