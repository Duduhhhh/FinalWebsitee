document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and gallery items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Initialize Lightbox
    let currentLightbox = null;

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    // Add animation
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox functionality
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const title = item.querySelector('h4').textContent;
            const description = item.querySelector('p').textContent;

            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <img src="${imgSrc}" alt="${title}">
                    <div class="lightbox-text">
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>
                </div>
            `;

            // Add lightbox to page
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            currentLightbox = lightbox;

            // Close lightbox on click
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.className === 'lightbox-close') {
                    lightbox.remove();
                    document.body.style.overflow = 'auto';
                    currentLightbox = null;
                }
            });
        });
    });

    // Close lightbox with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && currentLightbox) {
            currentLightbox.remove();
            document.body.style.overflow = 'auto';
            currentLightbox = null;
        }
    });
});

// Fade in animation
const fadeInAnimation = `
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Add animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = fadeInAnimation;
document.head.appendChild(styleSheet); 