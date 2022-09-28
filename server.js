require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT||3000;
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Plants = require('./models/Plants.js');

const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }


//Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(cors(corsOptions));


//Routes
const plantsRoutes = require('./routes');

app.use('/plants', plantsRoutes.plants)


app.get('/', (req, res) => {
    res.send("Hello")
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT} 🦹🏻‍♂️`)
});
