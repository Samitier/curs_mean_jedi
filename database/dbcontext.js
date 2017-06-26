const orm = require("orm")

const quote = require("../models/quote")

class Dbcontext {
    constructor() {
        this.init()
    }

    init() {
        orm.connect("mysql://root@localhost/quotes_node", function (error, db) {
            if (error) console.error(error)
            else console.log("Connected successfully!")

            quote.define(db)

            db.sync((err) => {
                if (err) console.error(err) 
                console.log("Models added successfully!")
            })
        })
    }
}

module.exports = new Dbcontext ()