document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', function() {
            burgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Masonry layout function - sets row spans based on image heights
    function resizeGridItem(item) {
        const grid = document.querySelector('.gallery-grid');
        if (!grid) return;

        const rowHeight = 1; // matches grid-auto-rows: 1px
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap')) || 16;

        const img = item.querySelector('img');
        if (img && img.complete && img.naturalHeight > 0) {
            // Use actual rendered height of the image
            const height = img.getBoundingClientRect().height;
            const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
            item.style.gridRowEnd = 'span ' + rowSpan;
        }
    }

    function resizeAllGridItems() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            // Only calculate for visible items
            if (item.style.display !== 'none') {
                resizeGridItem(item);
            }
        });
    }

    // Load all images and then apply masonry layout
    function initMasonry() {
        const galleryItems = document.querySelectorAll('.gallery-item');

        if (galleryItems.length === 0) return;

        galleryItems.forEach(item => {
            const img = item.querySelector('img');
            if (!img) return;

            if (img.complete && img.naturalHeight > 0) {
                // Image already loaded
                resizeGridItem(item);
            } else {
                // Wait for image to load
                img.addEventListener('load', function() {
                    resizeGridItem(item);
                });
                // Handle image load errors
                img.addEventListener('error', function() {
                    console.warn('Failed to load image:', img.src);
                });
            }
        });
    }

    // Gallery filter functionality
    const filterContainer = document.getElementById('filterBtnContainer');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterContainer) {
        filterContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('filter-btn')) {
                // Remove active class from all buttons
                const activeBtn = filterContainer.querySelector('.active');
                if (activeBtn) {
                    activeBtn.classList.remove('active');
                }

                // Add active class to clicked button
                e.target.classList.add('active');

                // Filter gallery items
                const filterValue = e.target.getAttribute('data-filter');
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });

                // Recalculate masonry after filtering
                setTimeout(resizeAllGridItems, 50);
            }
        });
    }

    // Initialize masonry on page load
    initMasonry();

    // Recalculate on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeAllGridItems, 250);
    });
});
