class Category {

    define (db) {
        db.define("category", {
            title: {
                type: "text",
                required: true,
                unique: true
            },
            descrtiption: {
                type: "text",
            },
        })
    }
}

module.exports = new Category()