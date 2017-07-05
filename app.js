$(function() {
    
    $('.hamburger').click(() => {
        $('.mainmenu').toggle()
    });

     $('.item').click((e) => {
        $(e.target).find('.dropdown').toggle()
    });

    $('a').click((e) => {
        $(e.target).closest('.item').find('.dropdown').toggle()
    });


});