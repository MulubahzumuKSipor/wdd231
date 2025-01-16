// Get all layers
const layers = document.querySelectorAll('.layer');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
}

// Trigger animations on scroll
function activateLayersOnScroll() {
    layers.forEach(layer => {
        if (isInViewport(layer)) {
            layer.classList.add('active');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', activateLayersOnScroll);

// Run the function on page load
activateLayersOnScroll();
