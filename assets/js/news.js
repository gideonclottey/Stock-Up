// Get todays date
//2022-08-21T16:27:09Z
const todaysDate = moment().format("YYYY-MM-DD") + "T00:00:00Z"

// the search query we want to limit results to
const query = "stocks"

const apikeyNews = "12d4365847ac1850ce1069c699fd99d3"

var apiURL = "https://gnews.io/api/v4/search?";

var key = "&from="+todaysDate+"&country=us&max=5&token=" + apikeyNews;

queryURL = apiURL + "q=" + query + key;


// jQuery ajax call to newsQuerymend point
$.ajax({ url: queryURL })
    // once ajax response received
    .then(function (response) {

        // Assign response to a variable
        const articles = response.articles
        // console.log(articles)


        // Loop through each article (limited to 10 articles)

        for(i = 0; i < articles.length; i++){

            const article = articles[i]

            // article title
            const title = article.title
  
            //article url
            const url = article.ur
    
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