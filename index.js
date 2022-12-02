const express = require('express');
const libraryController = require('./controllers/library')
const app = express();

const mongoose = require('mongoose')

const cors = require('cors')



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/library', libraryController)

app.listen(4000, () => {
  console.log('listening on port 4000');
});