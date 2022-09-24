require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Plants = require('./models/Plants.js');


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const plantsRoutes = require('./routes');

app.use('/plants', plantsRoutes.plants)


app.get('/', (req, res) => {
    res.send("Hello")
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT} 🦹🏻‍♂️`)
});
