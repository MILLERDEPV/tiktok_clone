import express from "express"; 
import cookieParser from "cookie-parser"; 
import morgan from "morgan"

const app = express(); 

/**
 * ! middlewares
 */
app.use(express.json()); 
app.use(express.text()); 
app.use(cookieParser()); 
app.use(morgan("dev")); 

export default app; 

