<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	                     

	$('#taptext').on("tap",function(){
        vibrate();
        
 	}); 




});

function random() {
    
    return !Math.round(Math.random());
    
    
}

function beep(){
    
    var rand = random();
        
    	$(this).text(rand);
        
        if(rand){
            navigator.notification.beep(1);
           
           }
        else {
            navigator.notification.beep(2);
            
        }
}


    
function vibrate(){
        //vibrate for 2000 milliseconds
        navigator.vibrate(2000);
        //vibrate for 200 milliseconds
        //wait for 300 milliseconds
        //wait for 500 milliseconds
        navigator.vibrate([200, 300, 500]); 
    }