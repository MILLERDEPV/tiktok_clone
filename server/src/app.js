import express from "express"; 
import cookieParser from "cookie-parser"; 
import morgan from "morgan"
import router from "./routes/auth.js";

const app = express(); 

/**
 * ! middlewares
 */
app.use(express.json()); 
app.use(express.text()); 
app.use(cookieParser()); 
app.use(morgan("dev")); 

/**
 * * Routes
 */

app.use(router);

export default app; 

