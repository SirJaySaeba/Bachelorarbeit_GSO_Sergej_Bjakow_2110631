$(document).ready(function() {
  
  var minHeight, x;
  
  minHeight = 100;
  
  x = $(".main-container").height();
  
	if( x < minHeight){
	  	return $(".sidebar, .main-container").height(function(index, height) {
	    	return x + minHeight;
	  	});
	}
	
	else{
		return $(".sidebar").height(function(index, height) {
	    	return x;
	  	});
	}
  
});