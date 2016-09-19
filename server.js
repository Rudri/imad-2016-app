var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one': {
        title:'Article Three | Rudri Kansara',
        heading:'Article One',
        date:'September 19,2016',
        content:`
                    <p>
                        This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
                    </p>
                    <p>
                        This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
                    </p>
                    <p>
                        This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
                    </p>`,
    },
    'article-two': {title:'Article Two | Rudri Kansara',
        heading:'Article Two',
        date:'September 20,2016',
        content:`
                    <p>
                        This is the content of my second article
                    <p>
                `},
    'article-three' : {title:'Article Three | Rudri Kansara',
        heading:'Article One',
        date:'September 21,2016',
        content:`
                    <p>
                        This is the content of my third article.
                    </p>
                  `},
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var date=data.date;
    
    var htmlTemplate=`<html>
       <head>
           <title>
                ${title}
           </title>
           <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       </head> 
        <body>
          <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
          </div>
        </body>
    </html>
    `;
    return htmlTemplate
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    //articleName==article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
