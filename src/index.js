// require('dotenv').config({ path: "./env" });
import dotenv from "dotenv"
import connectDB from "./db/indexdb.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MONGO DB conection failed!!!", err)
    })



















/*
import express from "express";
const app = express();
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`APP is litening on port ${process.env.PORT}`)
        });
    } catch (err) {
        console.error("error: ", err)
        throw err
    }
})()

*/