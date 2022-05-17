const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(3000, () => {
    console.log('apps run on 3000 port.');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

let cookieData = {
    arrayKey: [],
    arrayValue: []
};

app.get('/', (req, res) => {
    res.render('cookie', { cookieData });
});

app.post('/add', (req, res) => {
    let key = req.body.key;
    let value = req.body.value;
    if (key == "" || value == "") {
        return false;
    } 

    res.cookie(key, value);

    cookieData.arrayKey.push(key);
    cookieData.arrayValue.push(value);
    res.render('cookie', { cookieData });
});

