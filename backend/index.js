import express from "express";
import mongoose from "mongoose";
import { mongoDB, PORT } from "./config.js";

const app = express();


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send(`Welcome to our movie collection page`)
})


mongoose.connect(mongoDB)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Running on port: ${PORT}`)
    })
    console.log(`DB connected`)
})
.catch((error) => {
    console.group(error)
})