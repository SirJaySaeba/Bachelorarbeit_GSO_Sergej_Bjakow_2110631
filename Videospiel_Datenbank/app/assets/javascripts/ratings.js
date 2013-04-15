$(document).ready(function() {
var average = parseFloat( $(".rating_filled").attr("data-average") );

var avg_width = (average/5)*200;

$(".rating_filled").css("width", avg_width);

});