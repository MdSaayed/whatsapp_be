import dotenv from "dotenv";
import app from "./app.js";

// dotEnv config
dotenv.config();

// dotEnv variables
const PORT = process.env.PORT || 8001; 

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`); 
});









