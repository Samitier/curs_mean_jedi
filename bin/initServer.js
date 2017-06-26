const dotenv = require("dotenv")

const Server = require("../server")

dotenv.config()
let server = new Server()
server.start(process.env.PORT)