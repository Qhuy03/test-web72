const {db} = require('../db')

//getting all products in inventory
const getAllProduct = (async(req, res) => {
    const result = await db.inventories.find()
    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).send('Error')
    }
})

//getting only products that have low quantity
const lowQuantity = (async(req, res) => {
    const result = await db.inventories.find({ instock: { $lt: 20 } })
    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).send('Error')
    }
})

module.exports = {getAllProduct, lowQuantity}


