// JavaScript Document
/****

HEADER

****/
/****MENU | BUTTON close / menu****/
$(document).ready(function() {
    $( "button.navbar-toggler" ).click(function() {
        if($('button.navbar-toggler').hasClass("collapsed")) {
            $('#btn-mob-menu-close').css("display","block");
            $('#btn-mob-menu-open').css("display","none");
        }
        else {
            $('#btn-mob-menu-close').css("display","none");
            $('#btn-mob-menu-open').css("display","block");
        };
    // alert();
    });
});
