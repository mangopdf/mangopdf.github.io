
// Yeah it's called "freelancer.js" what EVER do not @ me

(function($) {
    "use strict";


    // Why does this say useragent, not referrer? Why is it "toothbrushes"? It's "teethbrush" and you know it.
    if (document.referrer != "" && document.referrer !== document.location.href) {
        $("div.useragent a").text(document.referrer);
        $("div.useragent").show();
    }

    // Spin the stars faster when hard mode is on, it's only fair.
    $('#hardmode').change(function() {
        if (this.checked) {
            window.stopEmoji = false;
            emojiCursor();
            $("hr.star-light, hr.star-primary").addClass("speedy");
        }
        else {
            window.stopEmoji = true;
            emojiCursor();
            $("hr.star-light, hr.star-primary").removeClass("speedy");
        }
    });

    // When the logo stars are clicked, make 'em spin fast on toggle.
    $('.star-primary').click(function() {
            $(this).toggleClass('speedy');
    });
    var gags = {
        'blog': 'textual spaghetti',
        'websites': 'hypertext fever dreams',
        'talks': 'legitimate educational resources',
        'tweets': 'the goddAmn TWEET ZONE',
        'intro': 'you have entered the ~mango zone~'
    };
    $(window).scroll(function() {
        for (var gagid in gags) {
            var $elem = $('#' + gagid);
            var offset = $elem.offset().top + $elem.height() - $(window).scrollTop();
            if (offset < 0) {
                $elem.text(gags[gagid]);
                $elem.addClass("spooked");
            }
        }
       if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
            $(window).unbind('scroll');
            $('#testimonials').show();
        }
    });

    $('#pdf').click(function() {
        window.setTimeout(function() {
            $('#hint').show();
        }, 2000);
    });

})(jQuery);
