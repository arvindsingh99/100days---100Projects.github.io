const request = require('request');
const cheerio = require('cheerio');

let table = [];

const url = 'https://www.imdb.com/chart/top/'
request(url, function(err, res, data){
    if(!err)
    {
        const $ = cheerio.load(data)
        const elementSelector = '#main > div > span > div > div > div.lister > table > tbody > tr '
    
        $(elementSelector).each(function(id) {
            if(id <= 40)
            {
            var MovieName= $(this).find(".titleColumn > a").html();  
            var rating = $(this).find(".imdbRating > strong").html();
            table.push(
                {
                    'MovieName': MovieName, 'Rating': rating 
                }
            )
            }
         });
         console.table(table);
         
    }
    else{
        console.log(err);
    }

})
      
    