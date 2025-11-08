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
            }
        });
    }
});
