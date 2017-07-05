$(function() {
    
    $('.hamburger').click(() => {
        $('.mainmenu').toggle()
    });


    $('a').click((e) => {
        $(e.target).siblings('.dropdown').toggle()
    });


});