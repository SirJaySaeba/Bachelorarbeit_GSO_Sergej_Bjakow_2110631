$(function () {
    var checkedId = $('.create_rating > input:checked').attr('id');
    $('.create_rating > label[for=' + checkedId + ']').prevAll().andSelf().addClass('bright');
});

$(document).ready(function() {
    // Submits the form (saves data) after user makes a change.
    $('form.create_rating').change(function() {
        $('form.create_rating').submit();
    });

    // Makes stars glow on hover.
    $('.create_rating > label').hover(
        function() {    // mouseover
            $(this).prevAll().andSelf().addClass('glow');
        },function() {  // mouseout
            $(this).siblings().andSelf().removeClass('glow');
    });

    // Makes stars stay glowing after click.
    $('.create_rating > label').click(function() {
        $(this).siblings().removeClass("bright");
        $(this).prevAll().andSelf().addClass("bright");
    });

    // Submits the form (saves data) after user makes a change.
    $('.create_rating').change(function() {
        $('.create_rating').submit();
    });
    
    
});


