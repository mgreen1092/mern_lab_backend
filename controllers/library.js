const express = require('express')

const Library = require('../models/Library')

const router = express.Router()

router.get('/', async (req, res, next)=> {
    try {
        const library = await Library.find({})
        res.json(library)
    } catch (err) {
        next(err)
    }
})

router.post('/create/', async (req, res, next)=> {
    try { 
        const newLibrary = await Library.create(req.body)
        res.status(201).json(newLibrary)
    } catch (err) {
        next(err)
    }
})

router.put('/edit/:id', async (req, res, next)=> {
  try {  
    console.log('reached edit functionality')
    const updateLibrary = await Library.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true
    })
    // if(updateLibrary) {
    //     res.json(updateLibrary)
    // } else (
    //     res.sendStatus(404)
    // )
    } catch (err) {
        next(err)
    }
})

router.delete('/delete/:id', async (req, res, next)=> {
    try { 
        const deleteLibrary = await Library.findOneAndDelete({_id: req.params.id})
        if (deleteLibrary) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})



module.exports = router