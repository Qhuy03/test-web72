var express = require('express');
var router = express.Router();

const {getAllProduct, lowQuantity} = require('../controller/inventories')
const {auth} = require('../middleware/auth')

router.get('/allproduct',auth, getAllProduct)
router.get('/lowquantity',auth, lowQuantity)


module.exports = router