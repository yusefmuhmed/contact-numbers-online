const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()
app.use(cors())
require("../db/connect")
app.use(express.json())
app.use(express.static(path.join(__dirname, "../uploads")))
const userRoutes = require("../routes/user.routes")
const contactRoutes = require("../routes/contact.routes")
const projectRoutes = require("../routes/project.routes")

app.use("/api/user/", userRoutes)
app.use("/api/contact/", contactRoutes)
app.use("/api/project/", projectRoutes)
app.all("*", (req, res) => {
    res.status(404).send({
        apisStatus: false,
        message: "Invalid URL",
        data: {}
    })
})
module.exports = app