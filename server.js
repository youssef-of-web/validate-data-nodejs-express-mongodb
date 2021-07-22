const express = require('express');
const app = express();
const Router = require('./router')
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
require('dotenv').config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/* connect to db */

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`db connected`))
    .catch(err => console.log(err.message))

app.use('/api', Router)
/* run server */
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);