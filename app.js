var express = require('express');
var todocontroller = require('./controllers/todocontroller');
var app = express();

//template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))


//controller
todocontroller(app);
//listen
app.listen(3000);
console.log('Listening to port 3000');