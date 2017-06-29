/*
    This class will create all the available routes for the API & 
    relate them to the controller's middleware
*/ 
const express = require("express")

const   quotesController = require("./controllers/quotes.controller"),
        categoriesController = require("./controllers/categories.controller"),
        authController = require("./controllers/auth.controller")


class Router {

    constructor() {
        this.router = express.Router()
        this.addRoutes()
    }

    addRoutes() {
        /*
            AUTH
        */
        this.router.post("/login", authController.login)

        /*
            QUOTES
        */
        this.router.route("/quotes")
            .get(quotesController.getAll)
            .post(authController.authenticate, quotesController.create)
        this.router.route("/quotes/:id")
            .get(quotesController.getSingle)
            .put(authController.authenticate, quotesController.update)
            .delete(authController.authenticate, quotesController.remove)

        /*
            CATEGORIES
        */
        this.router.route("/category")
            .get(categoriesController.getAll)
            .post(authController.authenticate, categoriesController.create)
        this.router.route("/category/:id")
            .get(categoriesController.getSingle)
            .put(authController.authenticate, categoriesController.update)
            .delete(authController.authenticate, categoriesController.remove)

    }
}

module.exports = new Router().router