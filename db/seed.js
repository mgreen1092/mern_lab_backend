const Library = require('../models/Library')

const librarySeed = require('./seeds.json')

Library.deleteMany()
    .then(()=>Library.insertMany(librarySeed))
    .then(console.log)
    .catch(console.error)
    .finally(process.exit)