class Category {

    define (db) {
        db.define("category", {
            title: {
                type: "text",
                required: true
            },
            descrtiption: {
                type: "text",
            },
        })
    }
}

module.exports = new Category()