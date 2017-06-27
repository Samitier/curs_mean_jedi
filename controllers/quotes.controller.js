const dbcontext = require("../database/dbcontext")

class QuotesController {
    constructor() {}

    getAll(req, res, next) {
        dbcontext.db.models.quote.find({}, (err, quotes) => {
            if(err) res.status(500).json(err)
            else res.json(quotes)
        })
    }

    getSingle(req, res, next) {
        let { id } = req.params
        dbcontext.db.models.quote.get(id, (err, quote) => {
            if(err) res.status(404).json(err)
            else res.json(quote)
        })
    }

    create (req, res, next) {
        let userQuote = req.body
        dbcontext.db.models.quote.create(userQuote, (err, quote) => {
            if(err) res.status(500).json(err)
            else res.json(quote)
        })
    }

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