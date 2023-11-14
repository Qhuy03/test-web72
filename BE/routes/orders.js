var express = require('express');
var router = express.Router();

const {getOrder} = require('../controller/orders')
const {auth} = require('../middleware/auth')

router.get('/getorder', auth, getOrder)

module.exports = router