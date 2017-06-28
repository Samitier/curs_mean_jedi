const dbcontext = require("../database/dbcontext")

class QuotesController {
    constructor() {}

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