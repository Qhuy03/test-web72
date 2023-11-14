const jwt = require('jsonwebtoken')
const {db} = require('../db')

const auth = (async (req, res, next) => {
    let token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1]
        res.json(token)
        const decoded = jwt.verify(token, 'secret')
  
        const user = await db.users.findById(decoded.id)
        req.body.userId  = user._id
        next()
      } catch (error) {
        console.error(error)
        res.status(401)
        throw new Error('Not authorized, token failed')
      }
    }
  
    if (!token) {
      res.status(401)
      throw new Error('Not authorized, no token')
    }
  })

  module.exports = {auth}