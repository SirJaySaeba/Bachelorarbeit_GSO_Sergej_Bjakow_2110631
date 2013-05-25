$(document).ready(function() {
	
	var average = parseFloat( $(".rating_filled").attr("data-average") );
	
	var avg_width = (average/5)*200;
	
	
	var reloadBar = function(avg_width){
		$(".rating_filled").css("width", avg_width);
	}
	
	$(".rating_button").click(function(){
		$.getJSON(average.function(newAverage){
			reloadBar(newAverage);
		});
	});

});