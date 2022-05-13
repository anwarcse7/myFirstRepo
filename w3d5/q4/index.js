const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require("path");
const date = new Date();
const hour = date.getHours();

console.log(hour);
if(hour >=6 && hour <18){
    app.use(express.static(path.join(__dirname + '/public')));
}
else {
    app.use(express.static(path.join(__dirname + '/public/css/')));
}

app.use(bodyParser.urlencoded({extended:false}));
app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

var n;
var a;

app.get(`/output`, (request, response, next) => {
    response.send(`Welcome ${n}, age ${a}`);
})

app.post('/result', (request, response, next)=>{
    n = request.body.username;
    a = request.body.age;
    response.redirect(`/output?name=${n}&age=${a}`);
})


app.listen(3000, () => {
    //all of your code are here, this is what will happen in server
    console.log('Running server on port : 3000 .....');
});