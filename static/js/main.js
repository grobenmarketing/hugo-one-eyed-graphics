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
    function resizeGridItems() {
        const grid = document.querySelector('.gallery-grid');
        if (!grid) return;

        const galleryItems = document.querySelectorAll('.gallery-item');
        const rowHeight = 1; // matches grid-auto-rows: 1px
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));

        galleryItems.forEach(item => {
            // Only calculate for visible items
            if (item.style.display === 'none') return;

            const content = item.querySelector('img');
            if (content && content.complete) {
                const height = item.getBoundingClientRect().height;
                const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
                item.style.gridRowEnd = 'span ' + rowSpan;
            }
        });
    }

    // Load all images and then apply masonry layout
    function initMasonry() {
        const images = document.querySelectorAll('.gallery-item img');
        let loadedCount = 0;

        if (images.length === 0) return;

        images.forEach(img => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.addEventListener('load', () => {
                    loadedCount++;
                    // Apply masonry progressively as images load
                    resizeGridItems();
                });
                // Handle image load errors
                img.addEventListener('error', () => {
                    loadedCount++;
                    console.warn('Failed to load image:', img.src);
                });
            }
        });

        // If all images are already cached/loaded
        if (loadedCount === images.length) {
            resizeGridItems();
        }
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
                setTimeout(resizeGridItems, 50);
            }
        });
    }

    // Initialize masonry on page load
    initMasonry();

    // Recalculate on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeGridItems, 250);
    });
});
