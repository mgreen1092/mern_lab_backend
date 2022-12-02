const mongoose = require('mongoose');

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/virtual-library';

mongoose
  .connect('mongodb://localhost/virtual-library')
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;