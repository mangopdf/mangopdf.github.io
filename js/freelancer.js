(function($) {
    "use strict";


    if (document.referrer != "") {
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
        'blog': '""research""""',
        'websites': 'hypertext fever dreams',
        'talks': 'high speed opsec fails',
        'tweets': 'the goddAmn TWEET ZONE',
    };
    var spooked = 0;
    $(window).scroll(function() {
        for (var gagid in gags) {
            var $elem = $('#' + gagid);
            var offset = $elem.offset().top + $elem.height() - $(window).scrollTop();
            if (offset < 0) {
                $elem.text(gags[gagid]);
                $elem.addClass("spooked");
                spooked++;
            }
        }
        if (spooked >= gags.length) {
            $(window).unbind('scroll');
        }
    });

})(jQuery);
