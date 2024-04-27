import app from "./app.js";



// dotEnv variables
const PORT = process.env.PORT || 8001; 
console.log(process.env.NODE_ENV)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`); 
});









