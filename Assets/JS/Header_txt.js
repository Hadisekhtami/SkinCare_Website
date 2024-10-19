
  $(document).ready(function(){
    function adjustHeaderText() {
      if ($(window).width() < 992) { // 992px is the 'lg' Bootstrap breakpoint
        $('.header-text').hide(); // Hide when collapsed
      } else {
        $('.header-text').show(); // Show on larger screens
      }
    }

    // Check on load
    adjustHeaderText();

    // Check on resize
    $(window).resize(function() {
      adjustHeaderText();
    });

    // Optional: also check when navbar is toggled
    $('.navbar-toggler').click(function() {
      adjustHeaderText();
    });
  });

