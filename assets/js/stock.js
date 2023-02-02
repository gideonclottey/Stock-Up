const apiKeyStock = 'KBINZE6ALWKKIC1E';

let symbol = 'IBM';

const urlStockQuery ='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+ symbol +'&interval=5min&apikey='+ apiKeyStock 

$.ajax({ url: urlStockQuery})
    // once ajax response received
    .then(function (response) {
        console.log(response)

        console.log(response['Time Series (5min)'])
        




    })