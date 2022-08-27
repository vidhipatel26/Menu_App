const express = require('express')

const router = express.Router()

const MenuModal = require('../models/menuModal')

router.get('/', async(req, res) => {
    try{
        const menu = await MenuModal.find()
        res.set('Access-Control-Allow-Origin', '*')
        res.json(menu)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {
    const menu = new MenuModal({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productCategory: req.body.productCategory,
        productDescription: req.body.productDescription,
    })
    try{
      const a1 = await menu.save()
      res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.get('/:id', async(req, res) => {
    try{
        const menu = await MenuModal.findById(req.params.id)
        res.json(menu)
    }catch(err){
        res.send('Error' + err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const menu = await MenuModal.findById(req.params.id)
        menu.sub = req.body.sub
        const a1 = await menu.save()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

router.delete('/:id', async(req, res) => {
    try{ 
        const menu = await MenuModal.findById(req.params.id)
        menu.remove()
        res.send('Delete Successfully!')
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router