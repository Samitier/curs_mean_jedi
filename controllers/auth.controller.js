const   bcrypt = require("bcrypt-nodejs"),
        jwt = require("jsonwebtoken"),
        { promisify } = require("util")

const   dbcontext = require("../database/dbcontext"),
        httpResponse = require("../utils/http-response")

let _generateToken = email => {
    return jwt.sign( 
        { email }, 
        process.env.SERVER_PRIVATE_KEY, 
        { expiresIn: "7 days" } 
    )
}

class AuthController {
    
    async login(req, res) {
        let { email, password } = req.body
        try {
            let users = await dbcontext.find("user", { email })
            if (users.length){
                let user = users[0]
                if(bcrypt.compareSync(password, user.password)) {
                    httpResponse.ok(res, { token: _generateToken(user.email) })
                }
                else return httpResponse.unauthorized(res)
            }
            else httpResponse.unauthorized(res)
        }
        catch(e) {
            httpResponse.error(res, e)
        }
    }

    async authenticate(req, res, next) {
        let token = req.headers["api-token"]
        console.log(token);
        if(token) {
            let verify = promisify(jwt.verify)
            try {
                let decoded = await verify(
                    token, process.env.SERVER_PRIVATE_KEY
                )
                let users = await dbcontext.find("user", { email: decoded.email })
                if (users.length) {
                    req.loggedUser = users[0]
                    next()
                }
                else httpResponse.unauthorized(res, e)
            }
            catch(e) {
                httpResponse.unauthorized(res, e)
            }
        }
        else httpResponse.unauthorized(res)
    }
}

module.exports = new AuthController()