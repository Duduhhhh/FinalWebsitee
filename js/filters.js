// Function to toggle filter options
function toggleFilter(filterId) {
    const filterOptions = document.getElementById(filterId);
    const allFilters = document.querySelectorAll('.filter-options');
    
    // Close other open filters
    allFilters.forEach(filter => {
        if (filter.id !== filterId && filter.classList.contains('active')) {
            filter.classList.remove('active');
            filter.previousElementSibling.querySelector('.arrow').style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle current filter
    filterOptions.classList.toggle('active');
    const arrow = filterOptions.previousElementSibling.querySelector('.arrow');
    arrow.style.transform = filterOptions.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Function to filter products
function filterProducts() {
    const products = document.querySelectorAll('.product-card');
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value.toLowerCase());
    const selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value.toLowerCase());
    const selectedFeatures = Array.from(document.querySelectorAll('input[name="feature"]:checked')).map(cb => cb.value.toLowerCase());
    const selectedCapacities = Array.from(document.querySelectorAll('input[name="capacity"]:checked')).map(cb => cb.value);
    const selectedPrices = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(cb => cb.value);

    products.forEach(product => {
        const productBrand = product.dataset.brand.toLowerCase();
        const productType = product.dataset.type.toLowerCase();
        const productFeature = product.dataset.feature.toLowerCase();
        const productCapacity = product.dataset.capacity;
        const productPrice = parseFloat(product.querySelector('.product-price').textContent.replace('₱', '').replace(',', '').trim());

        let shouldShow = true;

        // Brand filter
        if (selectedBrands.length > 0) {
            shouldShow = shouldShow && selectedBrands.includes(productBrand);
        }

        // Type filter
        if (selectedTypes.length > 0) {
            shouldShow = shouldShow && selectedTypes.includes(productType);
        }

        // Feature filter
        if (selectedFeatures.length > 0) {
            shouldShow = shouldShow && selectedFeatures.includes(productFeature);
        }

        // Capacity filter
        if (selectedCapacities.length > 0) {
            shouldShow = shouldShow && selectedCapacities.includes(productCapacity);
        }

        // Price filter
        if (selectedPrices.length > 0) {
            shouldShow = shouldShow && selectedPrices.some(priceRange => {
                const [min, max] = getPriceRange(priceRange);
                return (min === null || productPrice >= min) && (max === null || productPrice <= max);
            });
        }

        product.style.display = shouldShow ? 'block' : 'none';
    });

    updateProductCount();
}

// Helper function to get price range values
function getPriceRange(priceRange) {
    switch (priceRange) {
        case 'under-25000':
            return [null, 25000];
        case '25000-35000':
            return [25000, 35000];
        case '35000-45000':
            return [35000, 45000];
        case '45000-60000':
            return [45000, 60000];
        case '60000-80000':
            return [60000, 80000];
        case '80000-100000':
            return [80000, 100000];
        case 'above-100000':
            return [100000, null];
        default:
            return [null, null];
    }
}

// Function to update product count
function updateProductCount() {
    const visibleProducts = document.querySelectorAll('.product-card[style="display: block"]').length;
    const totalProducts = document.querySelectorAll('.product-card').length;
    const productCountElement = document.querySelector('.products-header span');
    productCountElement.textContent = `Showing ${visibleProducts} of ${totalProducts} Products`;
}

// Add event listeners to all filter checkboxes
document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

// Close filters when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.filter-group')) {
        const activeFilters = document.querySelectorAll('.filter-options.active');
        activeFilters.forEach(filter => {
            filter.classList.remove('active');
            filter.previousElementSibling.querySelector('.arrow').style.transform = 'rotate(0deg)';
        });
    }
}); 