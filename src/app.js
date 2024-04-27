import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookeParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";

// dotEnv config
dotenv.config();

// create express app
const app = express();

// morgan
if (process.env.NODE_ENV !== "production") {
app.use(morgan("dev"));
}

// helmet
app.use(morgan());

// pase json request body
app.use(express.json());

// sanitize request data
app.use(mongoSanitize());

// enable cookie parser
app.use(cookeParser());

// gzip compression
app.use(compression());

// file upload
app.use(fileUpload(
    {
        useTempFiles: true,
    }
))

// cors
app.use(cors());

app.use(express.urlencoded({ extended: true }));
 
 
app.get("/", (req, res) => {
   res.send("Hello from server...")
})


export default app;  








