let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let port = 2000
const fs = require('fs')

let database = fs.readFileSync('listReviews.json');
let content = JSON.parse(database);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
});
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get('/', function(req, res){
    res.render('client.ejs', {root : __dirname})
})

app.get('/reviews', function(req, res){
    res.render('client.ejs', {root : __dirname});
});
function add_review(dates)
{
    content['reviews'].push(dates);
    content['next'] = parseInt(content['next'])+1;
    let data = JSON.stringify(content);
    fs.writeFileSync('listReviews.json', data)
}

app.post('/reviews', function(req, res){
    add_review({...req.body})
    res.send(JSON.stringify({response: 'review added'}))
})

app.listen(port, () =>{
    console.log("express.js server running on http://localhost" + port);
})