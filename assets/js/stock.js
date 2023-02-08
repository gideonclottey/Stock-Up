
// Stock symbols of selected companies 
const companies = ['AAPL','ZM','GOOGL','BAC','AMS','THYAO','MSFT', 'BSE', 'RMV','EBAY']
// Api key 
const apiKey ="ec2cd61e7ac30ef1c56bff8eeda288e8"

// Query url parthern
url_company = "https://financialmodelingprep.com/api/v3/quote/"+ companies.join()+"?apikey="+apiKey

// jQuery ajax call to newsQuerymend point
$.ajax({ url: url_company })
    // once ajax response received
    .then(function (response) {
        //console.log(response)
    
        var datas = response
       
            // Looping through the response

            for (i = 0; i < datas.length; i++){
                const data = datas[i]
        
                var stock =$('<tr>');
                var stock_head = $('<td>')
                    stock_head.text(data.symbol)
                var name = $('<td>')
                    name.text(data.name)
                var price = $('<td>')
                    price.text(data.price.toFixed(2))
                    
                var change = $('<td>')
                    change.text(data.change.toFixed(2))
                var change_percentage = $('<td>')
                     change_percentage.text(data.changesPercentage.toFixed(2) + "%")
        
    
                $(stock).append(stock_head,name,price,change_percentage,change) 

                $('#stock-container').append(stock)   
            }
    })


        

