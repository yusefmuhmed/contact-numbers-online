const router = require("express").Router()
const Contact = require('../app/controller/contact.controller')

router.post("/addContact", Contact.addContact)
router.get("/myPosts", Contact.myPosts)

router.get("/all", Contact.getAll)
router.delete("/all", Contact.deleteAll)

router.get("/all/:id", Contact.getSingle)
router.delete("/all/:id", Contact.deleteSingle)
router.patch("/all/:id", Contact.editSingle)

module.exports = router