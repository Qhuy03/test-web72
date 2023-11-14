const {db} = require('../db')


//getting orders with the description of product inside each orders

const getOrder = (async(req,res) => {
    const result = await db.orders.find({ item: req.query.item })
    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).send('Error')
    }
})

module.exports = {getOrder}