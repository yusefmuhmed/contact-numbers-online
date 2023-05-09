const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = mongoose.Schema({

    username: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 4,
        maxLength: 20,
        required: true
    },

    // email: {
    //     type: String,
    //     trim: true,
    //     lowercase: true,
    //     required: true,
    //     unique: true,
    //     validate(value) {
    //         if (!validator.isEmail(value)) {
    //             throw new Error("invalid email format")
    //         }
    //     }
    // },
    // status: {
    //     type: Boolean,
    //     default: true
    // },

    password: {
        type: String,
        trim: true,
        required: true,
        // match: ''
    },
    // phoneNum: {
    //     type: String,
    //     validate(value) {
    //         if (!validator.isMobilePhone(value, "ar-EG"))
    //             throw new Error("invalid number")
    //     }
    // },




    tokens: [{
        token: { type: String, required: true }
    }]
}, {
    timestamps: true
})



userSchema.pre("save", async function() {
    if (this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 8)
    }
})

userSchema.statics.loginUser = async(username, password) => {
    const userData = await User.findOne({ username })
    if (!userData) throw new Error("invalid username")
    const validatePassword = await bcryptjs.compare(password, userData.password)
    if (!validatePassword) throw new Error("invalid password")
    return userData
}
userSchema.methods.toJSON = function() {
    const data = this.toObject()
    delete data.__v
    delete data.password
    return data
}
userSchema.methods.generateToken = async function() {
    const userData = this
    const token = jwt.sign({ _id: userData._id }, process.env.tokenPass)
    userData.tokens = userData.tokens.concat({ token })
    await userData.save()
    return token
}
const User = mongoose.model("User", userSchema)
module.exports = User