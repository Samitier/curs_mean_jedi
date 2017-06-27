/*
    DbContext configures the database & worksas an interface for node orm
*/

const orm = require("orm")

const   quote = require("../models/quote"),
        user = require("../models/user"),
        categories = require("../models/category"),
        quotesSeed = require("./seeds/quotes.seed"),
        usersSeed = require("./seeds/users.seed"),
        categoriesSeed = require("./seeds/categories.seed")

class Dbcontext {
    constructor() {
        this.init()
    }

    init() {
        // Connecting to the database
        orm.connect(process.env.DB_CONNECTION_STRING, (error, db) => {
            if (error) console.error(error)
            else console.log("Connected successfully!")
            this.db = db

            // Defining DB Models
            quote.define(this.db)
            user.define(this.db)
            categories.define(this.db)
            
            // Dropping database
            this.db.drop(err=> {

                // Syncing database & creating tables
                this.db.sync((err) => {
                    if (err) console.error(err) 
                    console.log("Models added successfully!")
                    
                    // Seeding all models concurrently
                    this.db.models.user.create(usersSeed, function(err){  
                        if (err) console.error(err) 
                        console.log("* User seed completed successfully!")
                    }) 
                    this.db.models.quote.create(quotesSeed, function(err){
                        if (err) console.error(err) 
                        console.log("* Quote seed completed successfully!")
                    })
                    this.db.models.category.create(categoriesSeed, function(err){
                        if (err) console.error(err) 
                        console.log("* Categories seed completed successfully!")
                    })
                })
            })
        })
    }
}

module.exports = new Dbcontext ()