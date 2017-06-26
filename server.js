const   express = require("express"),
        http = require("http")

const   router = require("./router")
        dbcontext = require("./database/dbcontext")
        
class Server {
    constructor() {
        this.init()
    }

    init() {
        this.app = express()
        this.app.use(express.static("./public"))
        this.app.use("/api", router)
        this.app.use(
            (req, res) => res.status(404).json({ message: "Resource not found" })
        )
    }

    start(port=3000) {
        this.app.set('port', port)
        let server = http.createServer(this.app)
        server.listen(port)
        server.on(
            "listening",
            () => console.log("Server listening on port " + port)
        )
    }
}

module.exports = Server