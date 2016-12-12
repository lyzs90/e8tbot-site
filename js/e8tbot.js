(function($) {
    "use strict"; // Start of use strict

    // Animation Order
    $(document).ready(function () {
        setTimeout(function(){
            $("#animateObj1").removeClass("invisible");
            $("#animateObj1").addClass("animated bounce");
        }, 500);
        setTimeout(function(){
            $("#animateObj2").removeClass("invisible");
            $("#animateObj2").addClass("animated fadeIn");
        }, 1500);
        setTimeout(function(){
            $("#animateObj3").removeClass("invisible");
            $("#animateObj3").addClass("animated fadeIn");
        }, 2500);
        setTimeout(function(){
            $("#animateObj4").removeClass("invisible");
            $("#animateObj4").addClass("animated gray fadeIn");
        }, 3500);
        setTimeout(function(){
            $("#animateObj5").removeClass("invisible");
            $("#animateObj5").addClass("animated gray fadeIn");
        }, 4500);
    });

})(jQuery); // End of use strict
