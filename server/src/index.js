import app from "./app.js";
import enviroment from "./enviroment/env.js"; 

const start = () => {
    try {
        const $SR = JSON.parse(enviroment.SERVER); 
        app.listen($SR, () => {
            console.log(`listening http://${$SR.hostname}:${$SR.port}`);
        })
    }catch (err) {
        throw Error(err); 
    }
}

start(); 