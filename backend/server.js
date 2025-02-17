const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const router = require('./routes/route'); 
require("dotenv").config();

const app = express();

app.use(cors());  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true })); 

//Mongodb url and port is stored in .env file for better security 
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/', router);  

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
