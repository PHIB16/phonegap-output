<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	                     

	$('#taptext').on("tap",function(){
    	$(this).(random);
 	}); 

	 


});

function random() {
    
    return !Math.round(Math.random());
    
    
}