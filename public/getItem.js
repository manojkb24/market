$(document).ready(function(){
	// alert("hii")
    var tempLists=[];
	var dataSets=[];

	
	//$.get("/drivers", function(response){
		$.get("/customer/view", function(response){
		// alert(JSON.stringify(response));
		var index = 1;
		$.each(response, function(i, item) {

				//alert(JSON.stringify(item));

				//item.timeStamp;
			

				tempLists.push(index,item.itemName,item.quantity,item.price,item.expiryDate);
				index++;
				dataSets.push(tempLists);
				tempLists=[];
				// alert(dataSets);		               
			
		});

		$('#viewItems').dataTable( {
			data: dataSets,
			columns: [
                {title:"SNo"},
				{ title: "Item Name" },
				{ title: "Quantity" },
				{ title: "Price" },
				{ title: "Expiry Date" },
			]
		} );
	} );
});

