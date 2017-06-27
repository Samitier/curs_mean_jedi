class User {

    define (db) {
        db.define("user", {
            email: {
                type: "text",
                required: true,
                unique: true
            },
            name: {
                type: "text",
                required: true
            },
            lastName: {
                type: "text",
                required: true
            },
            // password: {
            //     type: "text",
            //     required: true
            // },
        })
    }
}

module.exports = new User()