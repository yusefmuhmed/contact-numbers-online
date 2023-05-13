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


    // get single contact
    static getSingleContact = async(req, res)=>{
        try{
            const contact = await contactModel.findById(req.params._id)
            myHelper.resHandler(res, 200, true,contact,"Contact viewed")
        }
        catch(e){
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
    static filterContactsByName = async(req, res) => {
        try {
            const contactName = req.params.contactName
            const contacts = await contactModel.find({contactName})
            myHelper.resHandler(res, 200, true, contacts, "Same Contacts by name fetched successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }

    }

    // delete contact
    static deleteContact = async(req, res) => {
        try {
            
            const contact = await contactModel.findByIdAndRemove(req.params._id)
            myHelper.resHandler(res, 200, true, "Contact deleted successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }

    }

    // edit contact
    static editContact = async(req, res) => {

        try {
            const contact = await contactModel.findByIdAndUpdate(req.params._id,req.body)
            myHelper.resHandler(res, 200, true, req.body, "Contact updated successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }

    }

}
module.exports = Contact