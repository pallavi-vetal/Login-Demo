var cancel_btn=document.getElementById('cancel-btn');
cancel_btn.onclick=function(){
  
    //create request object
    
    var request = new XMLHttpRequest();
    
     //capture and store response into a variable
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
               
                
               }
                
            }
        }
         
    request.open('GET',"http://localhost:8080/cancel1",true);
    request.send(null);
  
    };
   
    
   

