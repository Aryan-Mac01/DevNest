// require("dotenv").config({'path': './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose"
// import DB_NAME from "./constants.js"
import express from "express"
import connectDB from "./db/index.js"

dotenv.config({ 
    path: "./env" 
})

//approach 2 - write in another file and import it here.
connectDB()







//approach 1 - using iffi
// const app = express()

// (async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error("Error connecting to MongoDB", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//         console.log("Connected to MongoDB");
        
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// })()