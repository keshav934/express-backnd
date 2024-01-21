// require('dotenv').config({ path: "./env" });
import dotenv from "dotenv"
import connectDB from "./db/indexdb";

dotenv.config({
    path: "./env"
})

connectDB();



















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