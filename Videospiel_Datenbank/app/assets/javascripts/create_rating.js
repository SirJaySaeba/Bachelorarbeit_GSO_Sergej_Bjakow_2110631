$(function () {	
    var checkedId = $('.create_rating > input:checked').attr('id');
    
    $('.create_rating > label[for=' + checkedId + ']')
    .prevAll().andSelf()
    .addClass('bright');

});

$(document).ready(function() {

    // Makes stars glow on hover.
    $('.create_rating > label').hover(
        function() {    // mouseover
        	var hoveredId = $(this).attr('id');
			$(this).prevAll().andSelf().addClass('glow');
			$(this).html(hoveredId);
			
        },function() {  // mouseout
        	$(this).html('');
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


