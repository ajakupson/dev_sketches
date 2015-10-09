$(document).ready(function(){

    var $navMainNav = $('nav#main_nav');

    $('div#menu_toggle .btn_wrap').click(function() {
        $navMainNav.toggle();

    });

    $(window).resize(function() {
        if($(window).width() > 800) {
            $navMainNav.show();
        }
    });
});