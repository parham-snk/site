const express = require("express")
const path = require("path")



const app = express()
module.exports = new class server {
    constructor() {
        this.setConfig()
        this.configs()
        this.setRoute()
    }
    setConfig() {
        app.listen(8080, err => err ? console.log(err) : console.log('server is online on http://localhost:8080'))
    }
    configs() {
        app.use('/public', express.static(path.join(__dirname, "public")))
        app.set("view engine","ejs")
        app.set("views",path.join(__dirname,"resources"))
    }
    setRoute() {
        app.use(require("./router/router.js"))
    }
}