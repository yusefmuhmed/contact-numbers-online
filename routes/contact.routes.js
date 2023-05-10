const router = require("express").Router()
const Contact = require('../app/controller/contact.controller')

router.post("/addContact", Contact.addContact)
router.get("/fetchContacts", Contact.fetchContact)

router.get("/fetchContactsByLimit", Contact.fetchContactLimit)

router.delete("/deleteContact/:phoneNum", Contact.deleteContact)
router.put("/editContact/:phoneNum", Contact.editContact)

module.exports = router