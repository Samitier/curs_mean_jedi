const dbcontext = require("../database/dbcontext")

class QuotesController {

    async getAll(req, res, next) {
        try {
            res.json(await dbcontext.find("quote"))
        } 
        catch (error) {
            res.status(404).json(err)
        }
    }

    async getSingle(req, res, next) {
        let { id } = req.params
        try {
            res.json(await dbcontext.get("quote", id))
        }
        catch(err) {
            res.status(404).json(err) 
        }
    }

    async create (req, res, next) {
        let userQuote = req.body
        try {
            res.json(await dbcontext.create("quote", userQuote))
        }
        catch(err) {
            res.status(500).json(err)
        }
    }

    async update (req, res, next) {
        let { id } = req.params,
            userQuote = req.body
        try {
            let quote = await dbcontext.get("quote", id)
            res.json(await dbcontext.update(quote, userQuote))
        } 
        catch (err) {
            res.status(500).json(err)
        }
    }

    async remove(req, res, next) {
        let { id } = req.params
        try {
            let quote = await dbcontext.get("quote", id)
            await dbcontext.remove(quote)
            res.json(quote)
        }
        catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = new QuotesController()