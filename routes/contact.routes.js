const router = require("express").Router()
const Contact = require('../app/controller/contact.controller')

router.post("/addContact", Contact.addContact)
router.get("/fetchContacts", Contact.fetchContact)

router.get("/filterContactsByName/:contactName", Contact.filterContactsByName)

router.get("/fetchContactsByLimit", Contact.fetchContactLimit)
router.get("/getSingleContact/:_id", Contact.getSingleContact)

router.delete("/deleteContact/:_id", Contact.deleteContact)
router.put("/editContact/:_id", Contact.editContact)

module.exports = router