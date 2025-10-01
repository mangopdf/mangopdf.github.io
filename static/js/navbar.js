// Navbar functionality for mango.pdf.zone

$(document).ready(function() {
    
    // Synchronize hard mode checkboxes
    function syncHardModeCheckboxes() {
        const desktopCheckbox = document.getElementById('hardmode-desktop');
        const mobileCheckbox = document.getElementById('hardmode-mobile');
        
        if (desktopCheckbox && mobileCheckbox) {
            // Sync desktop to mobile
            desktopCheckbox.addEventListener('change', function() {
                mobileCheckbox.checked = this.checked;
                triggerHardMode(this.checked);
            });
            
            // Sync mobile to desktop
            mobileCheckbox.addEventListener('change', function() {
                desktopCheckbox.checked = this.checked;
                triggerHardMode(this.checked);
            });
        }
    }
    
    // Trigger hard mode functionality (preserving existing behavior)
    function triggerHardMode(enabled) {
        // Trigger the existing hard mode functionality
        const event = new Event('change', { bubbles: true });
        const existingCheckbox = document.getElementById('hardmode') || 
                                document.getElementById('hardmode-desktop') ||
                                document.getElementById('hardmode-mobile');
        
        if (existingCheckbox && typeof window.hardModeToggle === 'function') {
            window.hardModeToggle(enabled);
        }
        
        // Also trigger the star speed functionality from freelancer.js
        if (enabled) {
            $("hr.star-light, hr.star-primary, .star-primary, .navbar-star").addClass("speedy");
        } else {
            $("hr.star-light, hr.star-primary, .star-primary, .navbar-star").removeClass("speedy");
        }
    }
    
    // Navbar shrink on scroll - DISABLED (navbar no longer sticky)
    function navbarShrink() {
        // Functionality disabled since navbar is no longer sticky
        return;
    }
    
    // Set active nav link based on scroll position - DISABLED
    // User requested to remove auto-highlighting, only show hover effects
    function setActiveNavLink() {
        // Functionality disabled - no auto-highlighting of nav links
        return;
    }
    
    // Smooth scroll for navbar links
    function setupSmoothScroll() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="/#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(2); // Remove /#
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarResponsive');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    if (navbarToggler) {
                        navbarToggler.click();
                    }
                }
            });
        });
    }
    
    // Initialize all functionality
    syncHardModeCheckboxes();
    setupSmoothScroll();
    setupStarClickHandlers();
    
    // Set up scroll event listeners
    window.addEventListener('scroll', function() {
        navbarShrink();
        setActiveNavLink();
    });
    
    // Initial calls
    navbarShrink();
    setActiveNavLink();
    
    // Setup star click functionality for speed toggle
    function setupStarClickHandlers() {
        // Add click handlers to all star elements (including navbar stars)
        $('.star-primary, .star-inline.star-primary, .navbar-star').click(function(e) {
            e.preventDefault(); // Prevent any default behavior
            e.stopPropagation(); // Stop event bubbling
            $(this).toggleClass('speedy');
        });
    }
});