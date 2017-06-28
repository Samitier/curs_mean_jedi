const dbcontext = require("../database/dbcontext")

class CategoriesController {
    constructor() {}

    getAll(req, res, next) {
        dbcontext.db.models.category.find({}, (err, categories) => {
            if(err) res.status(500).json(err)
            else res.json(categories)
        })
    }

    getSingle(req, res, next) {
        // let { id } = req.params
        // dbcontext.db.models.category.get(id, (err, category) => {
        //     if(err) res.status(404).json(err)
        //     else res.json(category)
        // })
        let { id } = req.params
        dbcontext.getCategory(id, (err, quote) => {
             if(err) res.status(404).json(err)
             else res.json(quote)
        })
    }

    create (req, res, next) {
        let userCategory = req.body
        dbcontext.db.models.category.create(userCategory, (err, category) => {
            if(err) res.status(500).json(err)
            else res.json(category)
        })
    }

    update (req, res, next) {
        let { id } = req.params,
            userCategory = req.body
        dbcontext.db.models.category.get(id, (err, category) => {
            category.save(userCategory, (err, newCategory) => {
                if(err) res.status(500).json(err)
                else res.json(newCategory)
            })
        })
    }

    remove(req, res, next) {
        let { id } = req.params
        dbcontext.db.models.category.get(id, (err, category) => {
            category.remove((err, newCategory) => {
                if(err) res.status(500).json(err)
                else res.json(category)
            })
        })
    }
}

module.exports = new CategoriesController()