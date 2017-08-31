
// Yeah it's called "freelancer.js" what EVER do not @ me

(function($) {
    "use strict";


    if (document.referrer != "" && document.referrer !== document.location.href) {
        $("div.useragent a").text(document.referrer);
        $("div.useragent").show();
    }

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

    var gags = {
        'blog': '""security research""""',
        'websites': 'hypertext experiences',
        'talks': 'high speed opsec fails',
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
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(window).unbind('scroll');
            $('#testimonials').show();
        }
    });

})(jQuery);
