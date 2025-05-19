let lastScrollTop = 0;
const backButton = document.getElementById('backButton');
const scrollThreshold = 100; // Lowered threshold for quicker appearance

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show button when scrolling down past threshold
    if (scrollTop > scrollThreshold && scrollTop > lastScrollTop) {
        backButton.classList.add('visible');
    } else {
        backButton.classList.remove('visible');
    }
    
    lastScrollTop = scrollTop;
}); 