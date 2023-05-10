const contactModel = require("../../db/models/contact.model")
const myHelper = require("../helper")
class Contact {

    // add contact
    static addContact = async(req, res) => {
        try {
            const contactData = new contactModel({

                ...req.body
            })
            await contactData.save()
            myHelper.resHandler(res, 200, true, contactData, "Contact added successfully")

        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)

        }
    }

    // fetch all contacts
    static fetchContact = async(req, res) => {
        try {
            const contacts = await contactModel.find()
            myHelper.resHandler(res, 200, true, contacts, "Contacts fetched successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }

    }


    //fetch all contacts by limit = 5
    static fetchContactLimit = async(req, res) => {
        try {
            const page = req.query.page ? parseInt(req.query.page) : 1;
            const limit = 5;
            const skip = (page - 1) * limit;

            const contacts = await contactModel.find()
                .skip(skip)
                .limit(limit)
            myHelper.resHandler(res, 200, true, contacts, "Contacts fetched successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }

    }

    //filter contacts
    static filterContact = async(req, res) => {
        try {
            const contacts = await contactModel.find()
            myHelper.resHandler(res, 200, true, contacts, "Contacts fetched successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }

    }

    // delete contact
    static deleteContact = async(req, res) => {
        try {
            const phoneNum = req.params.phoneNum
            const contact = await contactModel.findOneAndRemove({ phoneNum })
            myHelper.resHandler(res, 200, true, contact, "Contact deleted successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }

    }

    // edit contact
    static editContact = async(req, res) => {

        try {
            const { contactName, phoneNum, addresses, notes } = req.body;
            const contact = await contactModel.findOneAndUpdate(req.params._id, { contactName, phoneNum, addresses, notes }, { new: true })
            myHelper.resHandler(res, 200, true, contact, "Contact updated successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }

    }

}
module.exports = Contact