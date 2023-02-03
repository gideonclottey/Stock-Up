var  companies = ['Apple','zm','GOOGL','BAC','AMS','THYAO']
for(i =0; i< companies.length; i++){

   
    //console.log(comp_symbol)
    var settings = {
	

        "async": true,
        
        "crossDomain": true,
        "url": "https://real-time-finance-data.p.rapidapi.com/search?query="+ companies[i],
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "9012d869e8msha9b24fd1c904769p1eb313jsn0552cf00b53c",
            "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com"
        }
    };
}


$.ajax(settings).done(function (response) {
	//console.log(response.data.stock[0].price);
    var datas =response.data.stock
    for(i =0; i < 10; i++){
        const data = datas[i]

        console.log(data)

        
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
            change_percentage.text(data.change_percent)
      
        $(stock).append(stock_head,name,change,change_percentage) 
        $('#stock-container').append(stock)   
        

    }

});