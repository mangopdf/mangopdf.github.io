(function($) {
    "use strict"; // Start of use strict


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
        'blog': 'blongo plongos',
        'websites': 'hypertext fever dreams',
        'talks': 'embarrassing high-speed flubs',
        'tweets': 'the TWEET ZONE',
        'about': 'secret hidden ctf'
    };
    var os = new OnScreen({
        tolerance: 0,
        debounce: 100,
        container: window
    });

    console.log(os);
    os.on('leave', '.scrollspy', function(elem, event) {
        var $elem = $(elem);
        var id = $elem.attr('id');
        if (id) {
            $elem.text(gags[$elem.attr('id')]);
            $elem.addClass("spooked");
        }
    });

})(jQuery); // End of use strict
