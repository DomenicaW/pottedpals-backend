require('dotenv').config();

/* == EXTERNAL MODULES == */
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');

/* == EXPRESS INSTANCE == */
const app = express();


/* == PORT == */
const PORT = process.env.PORT||3000;


/* == DB CONNECTION  == */
require('./config/db.connection')


//ADD DEPLOYED WEBSITE TO WHITELIST
const whitelist = ['http://localhost:3000', 'https://potted-pals-backend.herokuapp.com/' ]
const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

/* == INTERNAL MODULES == */
// this makes the server look into the routes folder, which then looks at the index.js file, which then tells the app to look at plants routes.js file which contains all the routes 
const routes = require('./routes');

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "https://potted-pals-backend.herokuapp.com/";
}
console.log("current base url:", baseURL);



/* == MIDDLEWARE  == */
// Cors - a Node.js package that allows cross origin resource sharing.
app.use(cors())
// These 2 methods below allow us to process body data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));



const Plants = require('./models/Plant.js');


/* == ROUTES == */
app.use('/plants', routes.plants);


// app.get('/', (req, res) => {
//     res.send("Hello")
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🍒🍒🍎🍉🍉`)
});