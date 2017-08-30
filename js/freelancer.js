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

})(jQuery); // End of use strict
