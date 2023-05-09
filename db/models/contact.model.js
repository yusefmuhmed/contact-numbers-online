const mongoose = require("mongoose")
const validator = require("validator")
const Contact = mongoose.model("Contact", {

    contactName: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 20,
        required: true
    },

    notes: {
        type: String,
        trim: true,
        default: ""
    },

    addresses: [{
        addressType: {
            type: String,
            trim: true,
            required: true
        },
        details: {}
    }],


    phoneNum: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value, "ar-EG"))
                throw new Error("invalid number")
        }
    },

})
module.exports = Contact