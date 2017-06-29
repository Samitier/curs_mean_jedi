const   dbcontext = require("../database/dbcontext"),
        httpResponse = require("../utils/http-response")

class QuotesController {
    constructor() {}

    async getAll(req, res, next) {
        let { categoryId, character } = req.query,
            where = {}
        if (categoryId) where.category_id = categoryId
        if (character) where.character = character
        try {
            let quotes = await dbcontext.find("quote", where)
            if (!quotes.length) httpResponse.notFound(res)
            else httpResponse.ok(res, quotes)
        } 
        catch (error) {
            httpResponse.badRequest(res, error)
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
            httpResponse.ok(res, await dbcontext.create("quote", userQuote))
        }
        catch(err) {
            if(err.type === "validation") httpResponse.badRequest(res, err)
            httpResponse.error(res)
        }
    }

    // TODO: ASYNC/AWAIT

    update (req, res, next) {
        let { id } = req.params,
            userQuote = req.body
        dbcontext.db.models.quote.get(id, (err, quote) => {
            quote.save(userQuote, (err, newQuote) => {
                if(err) res.status(500).json(err)
                else res.json(newQuote)
            })
        })
    }

    remove(req, res, next) {
        let { id } = req.params
        dbcontext.db.models.quote.get(id, (err, quote) => {
            quote.remove((err, newQuote) => {
                if(err) res.status(500).json(err)
                else res.json(quote)
            })
        })
    }
}

module.exports = new QuotesController()