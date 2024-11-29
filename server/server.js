const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database connection
//It is important to note that best practice is to create a database connection in a separate file and export it to the server file.

mongoose
  .connect(
    'mongodb+srv://stoshwitkowski812:Lionelneymar10@ecommerce0.ef5ba.mongodb.net/'
  )
  .then(() => console.log('MongoDB Connected successfully'))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma',
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
