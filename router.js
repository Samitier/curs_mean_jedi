const express = require("express")

class Router {

    constructor() {
        this.router = express.Router()
        this.addRoutes()
    }

    addRoutes() {
        this.router.route("/quotes")
            .get((req, res) => res.json("Get quotes"))
            .put((req, res) => res.json("put quotes"))
            .delete((req, res) => res.json("delete quotes"))
    }
}

module.exports = new Router().router