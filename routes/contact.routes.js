const router = require("express").Router()
const Contact = require('../app/controller/contact.controller')

router.post("/addContact", Contact.addContact)
router.get("/fetchContacts", Contact.fetchContact)



router.delete("/deleteContact/:phoneNum", Contact.deleteContact)
router.put("/editContact/:id", Contact.editContact)

module.exports = router