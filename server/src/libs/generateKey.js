import jwt from "jsonwebtoken";
import enviroment from "../enviroment/env.js";

const generateToken = (payload) => {
    const secret = enviroment.KEY; 
    return new Promise((resolve, reject) => {
        jwt.sing({id: payload}, secret, {expiresIn: "10m"}, (err, token) => {
            return err ? reject(err) : resolve(token)
        })
    })    
}

export default generateToken; 