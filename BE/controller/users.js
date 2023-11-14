const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {db} = require('../db')

const login = (async(req, res) => {
    const {username, password} = req.body
    const user = await db.users.findOne({username})
    if(!user){
        res.status(404).send("User not found !")
        return
    }
    await bcrypt.compare(password, user.password)
    .then((result) => {
        if (!result) {
            res.status(404).send("Incorrect password !")
        }
    })

    let token = jwt.sign({username: user.username, password: user.password, id: user._id}, 'secret', {
        expiresIn: '1d'
    })
    onsole.log(token);
    res.status(200).send({ "jwt": token, id: user._id, username: user.username, message: "Login successfully!" })

})

module.exports = {login}