// Testimonials Carousel
document.addEventListener('DOMContentLoaded', () => {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let autoplayInterval;

    if (!testimonials.length) return;

    function showTestimonial(index) {
        // Remove active class from all testimonials and dots
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active', 'prev');
        });
        dots.forEach(dot => dot.classList.remove('active'));

        // Add prev class to current testimonial
        testimonials[currentTestimonial].classList.add('prev');

        // Update current testimonial index
        currentTestimonial = index;

        // Add active class to new current testimonial and dot
        testimonials[currentTestimonial].classList.add('active');
        dots[currentTestimonial].classList.add('active');
    }

    function nextTestimonial() {
        let nextIndex = currentTestimonial + 1;
        if (nextIndex >= testimonials.length) {
            nextIndex = 0;
        }
        showTestimonial(nextIndex);
    }

    function prevTestimonial() {
        let prevIndex = currentTestimonial - 1;
        if (prevIndex < 0) {
            prevIndex = testimonials.length - 1;
        }
        showTestimonial(prevIndex);
    }

    // Start autoplay
    function startAutoplay() {
        stopAutoplay(); // Clear any existing interval
        autoplayInterval = setInterval(nextTestimonial, 2000);
    }

    // Stop autoplay
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    // Set up click handlers for navigation
    const prevBtn = document.querySelector('.carousel-btn.prev-btn');
    const nextBtn = document.querySelector('.carousel-btn.next-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoplay();
            prevTestimonial();
            startAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoplay();
            nextTestimonial();
            startAutoplay();
        });
    }

    // Set up click handlers for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoplay();
            showTestimonial(index);
            startAutoplay();
        });
    });

    // Show first testimonial and start autoplay
    showTestimonial(0);
    startAutoplay();

    // Pause autoplay when hovering over testimonials
    const testimonialsContainer = document.querySelector('.testimonials-carousel');
    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('mouseenter', stopAutoplay);
        testimonialsContainer.addEventListener('mouseleave', startAutoplay);
    }

    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    });

    // Handle window focus
    window.addEventListener('focus', startAutoplay);
    window.addEventListener('blur', stopAutoplay);
});

// Ensure autoplay continues when the tab becomes visible again
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
});

// Restart autoplay when the window regains focus
window.addEventListener('focus', startAutoplay);
window.addEventListener('blur', stopAutoplay); 