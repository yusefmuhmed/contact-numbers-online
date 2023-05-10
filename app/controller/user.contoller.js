const userModel = require("../../db/models/user.model")
const myHelper = require("../../app/helper")


class User {

    // register user
    static register = async(req, res) => {
        try {
            if (req.body.password.length < 2) throw new Error("password must be more than 2")
            const userData = new userModel(req.body)
            await userData.save()
            myHelper.resHandler(res, 200, true, userData, "user added successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    // login user
    static login = async(req, res) => {
        try {
            const userData = await userModel.loginUser(req.body.username, req.body.password)
            const token = await userData.generateToken()
            myHelper.resHandler(res, 200, true, { user: userData, token }, "user logged in successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }




    static changeStatus = async(req, res) => {
        try {
            let user = req.user
            if (!req.query.current || req.query.current == "0")
                user = await userModel.findById(req.body._id)

            if (req.query.activate == "1") user.status = true
            else user.status = false
            await user.save()
            myHelper.resHandler(res, 200, true, user, "updated")

        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static addAddr = async(req, res) => {
        try {
            if (!req.user.addresses) req.user.addresses = []
            req.user.addresses.push(req.body)
            await req.user.save()
            myHelper.resHandler(res, 200, true, req.user, "updated")

        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }




}
module.exports = User