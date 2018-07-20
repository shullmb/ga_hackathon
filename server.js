require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const bp = require('body-parser');
const request = require('request');
const fs = require('fs')


const app = express();

app.set('view engine', 'ejs');
app.use(layouts);
app.set("layout extractScripts", true);
app.use(bp.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index');
})

app.use('/offers', require('./controllers/offers'));
app.use('/requests', require('./controllers/requests'));

app.listen(port, () => {
  console.log(`🍎 🍋 🥦  serving up meals on ${port} 🥦 🍋 🍎`);
})