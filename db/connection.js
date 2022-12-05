const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://hiramr97:mongodb@cluster0.16xvdfk.mongodb.net/virtual-library'
//process.env.DATABASE_URL
//const db = mongoose.connection;

mongoose
  .connect(mongoURI)
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;