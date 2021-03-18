

      $("form#update").submit(function(e) {
        e.preventDefault();
    
    //     $('#registerDriver').modal('hide'); // hode register driver modal
    //    // $('#pending').modal(); // hode register driver modal
            alert("inside")
       var itemName= $('#itemName1').val();
       var quantity= $('#quantity1').val();
       var price= $('#price1').val();
       //alert(driverPassword)
       var data = {
        
        "itemName":itemName,
        "quantity":quantity,
        "price":price,
    
       };
       alert(JSON.stringify(data))
    
       $.ajax({
           
           dataType:"json",
           contentType: 'application/json; charset=UTF-8',
          // url:"/requestBOL?assetId="+assetId,		
          url:"/customer/update",	
          data: JSON.stringify(data),
           type:"PUT",
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
    