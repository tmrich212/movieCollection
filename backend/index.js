import express, { request, response } from "express";
import mongoose from "mongoose";
import { mongoDB, PORT } from "./config.js";
import movieRoutes from "./routes/movieRoutes.js"
import { Movie } from './models/movieModel.js'
import cors from 'cors';

const app = express();

//middleware to parse request body
app.use(express.json());

//middleware to handle CORS policy
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send(`Welcome to our movie collection page`)
})

//middleware for routes
app.use('/movies', movieRoutes);

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