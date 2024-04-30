import app from "./app.js";
import logger from "./configs/logger.config.js";



// dotEnv variables
const PORT = process.env.PORT || 8001; 
console.log(process.env.NODE_ENV)

app.listen(PORT, () => {
    logger.info(`Server is listening on port ${PORT}`);  
});









