/*
    This class will create all the available routes for the API & 
    relate them to the controller's middleware
*/ 
const express = require("express")

const   quotesController = require("./controllers/quotes.controller"),
        categoriesController = require("./controllers/categories.controller")


class Router {

    constructor() {
        this.router = express.Router()
        this.addRoutes()
    }

    addRoutes() {
        /*
            QUOTES
        */
        this.router.route("/quotes")
            .get(quotesController.getAll)
            .post(quotesController.create)
        this.router.route("/quotes/:id")
            .get(quotesController.getSingle)
            .put(quotesController.update)
            .delete(quotesController.remove)

        /*
            CATEGORIES
        */
        this.router.route("/category")
            .get(categoriesController.getAll)
            .post(categoriesController.create)
        this.router.route("/category/:id")
            .get(categoriesController.getSingle)
            .put(categoriesController.update)
            .delete(categoriesController.remove)

    }
}

module.exports = new Router().router