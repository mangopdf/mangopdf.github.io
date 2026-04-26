// Navbar functionality for mango.pdf.zone

(function() {
    "use strict";
    
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
        // Toggle star speed when hard mode is enabled
        const stars = document.querySelectorAll("hr.star-light, hr.star-primary, .star-primary, .navbar-star");
        if (enabled) {
            stars.forEach(function(el) { el.classList.add("speedy"); });
        } else {
            stars.forEach(function(el) { el.classList.remove("speedy"); });
        }
    }
    
    // Smooth scroll for navbar links
    function setupSmoothScroll() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="/#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(2); // Remove /#
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    const offsetTop = targetElement.offsetTop - 100; // Offset for navbar height
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.getElementById('navbarResponsive');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const navbarToggler = document.querySelector('.navbar-toggler');
                        if (navbarToggler) {
                            navbarToggler.click();
                        }
                    }
                }
                // If targetElement doesn't exist (e.g. on a blog post page),
                // let the browser handle the navigation normally to /#blog or /#talks
            });
        });
    }
    
    // Setup star click functionality for speed toggle
    function setupStarClickHandlers() {
        document.querySelectorAll('.star-primary, .star-inline.star-primary, .navbar-star').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.classList.toggle('speedy');
            });
        });
    }
    
    // Initialize all functionality
    syncHardModeCheckboxes();
    setupSmoothScroll();
    setupStarClickHandlers();
    
    // Scroll event listeners currently disabled
    // (navbarShrink and setActiveNavLink are no-ops for now)
})();
