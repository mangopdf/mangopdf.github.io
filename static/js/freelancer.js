// Yeah it's called "freelancer.js" what EVER do not @ me

console.log("poggers");
(function() {
    "use strict";

    // Why does this say useragent, not referrer? Why is it "toothbrushes"? It's "teethbrush" and you know it.
    if (document.referrer != "" && document.referrer !== document.location.href) {
        var uaLink = document.querySelector("div.useragent a");
        if (uaLink) uaLink.textContent = document.referrer;
        var uaDiv = document.querySelector("div.useragent");
        if (uaDiv) uaDiv.style.display = "block";
    }

    // Spin the stars faster when hard mode is on, it's only fair.
    var hardModeCheckboxes = document.querySelectorAll('#hardmode-desktop, #hardmode-mobile');
    hardModeCheckboxes.forEach(function(cb) {
        cb.addEventListener('change', function() {
            var stars = document.querySelectorAll("hr.star-light, hr.star-primary");
            if (this.checked) {
                window.stopEmoji = false;
                emojiCursor();
                stars.forEach(function(el) { el.classList.add("speedy"); });
            }
            else {
                window.stopEmoji = true;
                emojiCursor();
                stars.forEach(function(el) { el.classList.remove("speedy"); });
            }
        });
    });

    var gags = {
        'blog': 'textual spaghetti',
        'websites': 'hypertext fever dreams',
        'talks': 'legitimate educational resources',
    }

    if (window.location.pathname === '/') {
        var scrollHandler = function() {
            for (var gagid in gags) {
                var elem = document.getElementById(gagid);
                if (!elem) continue;
                var rect = elem.getBoundingClientRect();
                var offset = rect.top + rect.height;
                if (offset < 0) {
                    elem.textContent = gags[gagid];
                    elem.classList.add("spooked");
                }
            }
            if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 200) {
                window.removeEventListener('scroll', scrollHandler);
                var testimonials = document.getElementById('testimonials');
                if (testimonials) testimonials.style.display = "block";
            }
        };
        window.addEventListener('scroll', scrollHandler);

        var pdfBtn = document.getElementById('pdf');
        if (pdfBtn) {
            pdfBtn.addEventListener('click', function() {
                window.setTimeout(function() {
                    var hint = document.getElementById('hint');
                    if (hint) hint.style.display = "block";
                }, 2000);
            });
        }
    }
})();
