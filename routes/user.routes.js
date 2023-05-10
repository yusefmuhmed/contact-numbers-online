const router = require("express").Router()
const User = require('../app/controller/user.contoller')
const { auth } = require("../app/middleware/auth.middleware")

router.post("/register", User.register)
router.post("/login", User.login)



router.post("/addAddr", auth, User.addAddr)


module.exports = router