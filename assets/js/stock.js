var  companies = ['Apple','zm','GOOGL','BAC','AMS','THYAO','Microsoft', 'BSE', 'RMV','EBAY']
for(i =0; i< companies.length; i++){

   url_company = "https://real-time-finance-data.p.rapidapi.com/search?query="+ companies[i]
    //console.log(comp_symbol)
    var settings = {
	

        "async": true,
        
        "crossDomain": true,
        "url":url_company ,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "317333b245mshaaea7a29dbaa05fp11e523jsn32cd12653339",
            "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        //console.log(response.data.stock[0].price);
        var datas =response.data.stock
        for(i =0; i < 10; i++){
            const data = datas[i]
    
           // console.log(data)
    
            
            var  stock =$('<tr>');
            var stock_head = $('<th>')
                stock_head.text(data.symbol)
            var name = $('<th>')
                name.text(data.name)
            var price = $('<th>')
                price.text(data.price)
                
            var change = $('<th>')
                change.text(data.change)
            var change_percentage = $('<th>')
                 change_percentage.text(data.change_percent + "%")

               
          
            $(stock).append(stock_head,name,price,change,change_percentage) 
            $('#stock-container').append(stock)   
            
    
        }
    
    });
}


