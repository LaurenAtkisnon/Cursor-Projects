/* ===================================
   CHANGE ENTERTAINMENT - JAVASCRIPT
   Handles smooth scrolling and fade-in animations
   =================================== */

// ===================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target section ID from the href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Smooth scroll to the target section
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===================================
// FADE-IN ON SCROLL ANIMATION
// ===================================

// Intersection Observer options
const observerOptions = {
    // Trigger when 20% of the element is visible
    threshold: 0.2,
    // Start observing 50px before the element enters viewport
    rootMargin: '0px 0px -50px 0px'
};

// Create the Intersection Observer
const fadeInObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // If element is in viewport
        if (entry.isIntersecting) {
            // Add the 'visible' class to trigger fade-in
            entry.target.classList.add('visible');
            
            // Optional: Stop observing after animation (performance optimization)
            // Uncomment the line below if you want elements to fade in only once
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all elements with the 'fade-in' class
const fadeInElements = document.querySelectorAll('.fade-in');

// Observe each element
fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});

// ===================================
// STAGGERED ANIMATION FOR GRIDS
// Add slight delay to each card for a cascade effect
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Artist cards
    const artistCards = document.querySelectorAll('.artist-card');
    artistCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Release cards
    const releaseCards = document.querySelectorAll('.release-card');
    releaseCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Connect cards
    const connectCards = document.querySelectorAll('.connect-card');
    connectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// ===================================
// OPTIONAL: ADD ACTIVE STATE TO NAV ON SCROLL
// Highlights the current section in navigation
// ===================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if we're currently viewing this section
        if (window.scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Remove active class from all links and add to current
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// Prevents excessive function calls on scroll
// ===================================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll handler
const efficientScroll = debounce(function() {
    // Scroll-related code here if needed
}, 10);

window.addEventListener('scroll', efficientScroll);
