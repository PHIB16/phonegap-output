<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	                     

	$('#taptext').on("tap",function(){
    	$(this).text(random);
        
        if(random == true){
            navigator.notification.beep(1);
           
           }
        else if(random == false){
            navigator.notification.beep(2);
            
        }
 	}); 

	 


});

function random() {
    
    return !Math.round(Math.random());
    
    
}