let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let session = require('express-session');
let crypto = require('crypto');
let port = 3000
const fs = require('fs')

let database = fs.readFileSync('listReviews.json'); //pentru lista salvata de review-uri 
let content = JSON.parse(database);



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
});

app.use(express.static(__dirname)); //pentru import style.css

app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(session({
    secret: 'Yamaha',
    resave: true,
    saveUninitialized: false
    }
));


app.get('/', function(req, res){
    res.render('Home.ejs', {root : __dirname})
})

app.get('/reviews', function(req, res){
    res.render('Feedback.ejs', {root : __dirname, r:content});
});


app.get('/home', function(req, res){
    res.render('Home.ejs', {root : __dirname, r:content}
)});

app.get('/homeLogIn', function(req, res){
    res.render('HomeLogIn.ejs', {root : __dirname, r:content}
)});

app.get('/homeSignUp', function(req, res){
    res.render('HomeSignUp.ejs', {root : __dirname, r:content}
)})

app.get ('/LogOut', function(req,res){
    res.render('HomeLogIn',{root : __dirname} )
})

app.get('/LogIn', function(req, res){
    res.render('LogIn', {user: req.session.username}
)});

app.get('/homeSignUp', function(req, res){
    res.render('Home.ejs', {root : __dirname}
)});

app.get('/annabelle', function(req, res){
    res.render('Annabelle.ejs', {root: __dirname})
})

app.get('/top5filmelemelepreferate', function(req, res){
    res.render('Top5filmelemelepreferate.ejs', {root: __dirname})
})

app.get('/theconjuring1&2', function(req, res){
    res.render('TheConjuring1&2.ejs', {root: __dirname})
})

app.get('/thenun', function(req, res){
    res.render('TheNun.ejs', {root: __dirname})
})

app.get('/fridaythe13th', function(req, res){
    res.render('FridayThe13th.ejs', {root: __dirname})
})

app.get('/filtru', function(req, res){
    res.render('Filtru.ejs', {root: __dirname})
})

app.get('/imagini', function(req, res){
    res.render('Imagini.ejs', {root: __dirname})
})
app.get('/theconjuringuniverse', function(req,res){
    res.render('TheConjuringUniverse.ejs', {root:__dirname})
})
app.get('/feedback', function(req,res){
    res.render('Feedback.ejs', {root:__dirname})
})
app.get('/quiz', function(req,res){
    res.render('Quiz.ejs',  {root:__dirname})
})
app.get('*', function(req, res){            ///pentru eroare 404
    res.status(404).sendFile('Eroare.html', {root : __dirname})
})
function add_review(dates)
{
    content['reviews'].push(dates);
    content['next'] = parseInt(content['next'])+1;
    let data = JSON.stringify(content);
    fs.writeFileSync('listReviews.json', data)
}

app.post('/reviews', function(req, res){
    add_review({...req.body})
    res.send(JSON.stringify({response: 'Review added!'}))
})

let usersList = fs.readFileSync('listUsers.json'); //pentru lista de useri
let users = JSON.parse(usersList);

function searchUserForLogIn(someUserName, somePassword){
    let result = {}
    for(var i = 0; i < parseInt(users['nrUsers']); i++){
        if(users['users'][i].username == someUserName && users['users'][i].parola == somePassword){
            result = users['users'][i]
            break;
        }
    }
    return result;
}
app.post('/homeLogIn', function(req, res){
    let cifru = crypto.createCipher('aes-128-cbc', 'TehniciWeb');
    let encrParola = cifru.update(req.body.parola, 'utf8', 'hex');
    encrParola += cifru.final('hex');
    let found = searchUserForLogIn(req.body.username, encrParola)
    if(found.username){
        req.session.username = found.username;
    }
    else {
        res.send(('Username sau parola incorect/a!' ))
    }
    res.render('LogIn', {user: req.session.username});
})

app.post('/LogOut', function(req, res){
    req.session.destroy();
    res.send('');
    //console.log('intra post pe /logout');
})

function searchUserForSignUp(someUserName){
    let result = {}
    for(var i = 0; i < parseInt(users['nrUsers']); i++){
        if(users['users'][i].username == someUserName){
            result = users['users'][i];
            break;
        }
    }
    return result;
}

app.post('/homeSignUp', function(req, res){
    let cifru = crypto.createCipher('aes-128-cbc', 'TehniciWeb');
    let encrParola = cifru.update(req.body.parola, 'utf8', 'hex');
    encrParola += cifru.final('hex');
    let found = searchUserForSignUp(req.body.username)
    if(found.username){
        res.send(JSON.stringify({response : 'Username-ul exista deja! Incearca altul!'}))
    }
    else {
        let aux = {username : req.body.username,
                   parola: encrParola
        }
        users['users'].push(aux);
        users['nrUsers'] = parseInt(users['nrUsers'])+1;
        let data = JSON.stringify(users);
        fs.writeFileSync('listUsers.json', data)
        res.send(JSON.stringify({response : 'OK, user creat! '}))
    }
    
})


app.listen(port, () =>{
    console.log("express.js server running on http://localhost:" + port);
})