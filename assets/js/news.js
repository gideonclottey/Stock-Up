// Api Key for https://newsapi.org/
const apikeyNews = "7e6515af5a014be4a6520f4c0cb2bc68"

// Get todays date
const todaysDate = moment().format("YYYY-MM-DD")

// the search query we want to limit results to
const query = "stocks"

// Query for fetching news - includes query, todays & apikeyNews as paramater
const newsQuery = "https://newsapi.org/v2/everything?q=" + query + "&from=" + todaysDate + "&sortBy=publishedAt&apiKey=" + apikeyNews


// jQuery ajax call to newsQuerymend point
$.ajax({ url: newsQuery })
    // once ajax response received
    .then(function (response) {

        // Assign response to a variable
        const articles = response.articles
        // console.log(articles)


        // Loop through each article (limited to 10 articles)

        for(i = 0; i < 5; i++){

            const article = articles[i]

            // article title
            const title = article.title
    
            //article published at date
            const publishedAt = todaysDate
    
            // article source
            const source = article.source.Name
    
            //article url
            const url = article.url
    
            console.log(title,publishedAt,source,url)
    
            // To do article data into divs and populate index.html

            // newsArticleHtml = $("<div>").addClass("news-article")

            // linkHtml = $("<a>").attr("href",url)

            // titleHtml = $("<h3>").text(title)

            // publishedAtHtml = $("<span>").addClass("publishedAt").text(publishedAt)

            // sourceHtml = $("<span>").addClass("source").text(source)

            // linkHtml.append(titleHtml).append(sourceHtml).append(publishedAtHtml)

            // newsArticleHtml.append(linkHtml)

            const card =`
            <div class="card">
            <div class="card-body">
                <a href="${url}" title="${title}" class="card-subtitle mb-2">${title}</a>
            </div>
            </div>
            `         
            $('.sidebar').append(card)

           
        }


    })