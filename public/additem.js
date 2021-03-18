

      $("form#additem").submit(function(e) {
    e.preventDefault();

//     $('#registerDriver').modal('hide'); // hode register driver modal
//    // $('#pending').modal(); // hode register driver modal
        alert("inside")
   var itemName= $('#itemName').val();
   var expiryDate= $('#expiryDate').val();
   var quantity= $('#quantity').val();
   var price= $('#price').val();
   //alert(driverPassword)
   var data = {
    
	"itemName":itemName,
	"expiryDate":expiryDate,
	"quantity":quantity,
	"price":price,

   };
   alert(JSON.stringify(data))

   $.ajax({
   	
       dataType:"json",
       contentType: 'application/json; charset=UTF-8',
      // url:"/requestBOL?assetId="+assetId,		
      url:"/customer",	
      data: JSON.stringify(data),
       type:"POST",
       global:false,
       async:false, 
       success: function(result){

        alert("result111111111" +JSON.stringify(result))

       // $('#pending').modal('hide'); // hide register driver modal
        
        

        if(result.message=="success"){
        
        alert("success")
        return false;

    		   
    	
    	   
    		   
    	   }else{
       
            alert("Unsuccessful insertion")
         }
			

        }
		  
			
			
           
         
    	
    });
});
