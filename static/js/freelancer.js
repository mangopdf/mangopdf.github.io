// Yeah it's called "freelancer.js" what EVER do not @ me

console.log("poggers");
(function() {
    "use strict";

    // Why does this say useragent, not referrer? Why is it "toothbrushes"? It's "teethbrush" and you know it.
    if (document.referrer != "" && document.referrer !== document.location.href) {
        const uaLink = document.querySelector("div.useragent a");
        if (uaLink) uaLink.textContent = document.referrer;
        const uaDiv = document.querySelector("div.useragent");
        if (uaDiv) uaDiv.style.display = "block";
    }

    const gags = {
        'blog': 'textual spaghetti',
        'websites': 'hypertext fever dreams',
        'talks': 'legitimate educational resources',
    }

    if (window.location.pathname === '/') {
        const scrollHandler = function() {
            for (const gagid in gags) {
                const elem = document.getElementById(gagid);
                if (!elem) continue;
                const rect = elem.getBoundingClientRect();
                const offset = rect.top + rect.height;
                if (offset < 0) {
                    elem.textContent = gags[gagid];
                    elem.classList.add("spooked");
                }
            }
            if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 200) {
                window.removeEventListener('scroll', scrollHandler);
                const testimonials = document.getElementById('testimonials');
                if (testimonials) testimonials.style.display = "block";
            }
        };
        window.addEventListener('scroll', scrollHandler);

        const pdfBtn = document.getElementById('pdf');
        if (pdfBtn) {
            pdfBtn.addEventListener('click', function() {
                window.setTimeout(function() {
                    const hint = document.getElementById('hint');
                    if (hint) hint.style.display = "block";
                }, 2000);
            });
        }
    }
})();
