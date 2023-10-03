import express from "express";
import { Movie } from "../models/movieModel";

const router = express.Router();


//route to add new movie
router.post('/', async (request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.director ||
            !request.body.releaseYear
        ){
            return response.status(404).send({ message: 'Movie was not saved, fill in all fields'})
        }

        const newMovie = {
            title: request.body.title,
            director: request.body.director,
            releaseYear: request.body.releaseYear
        }

        const movie = await Movie.create(newMovie);
        return response.status(200).send(movie);

    } catch(error){
        console.log(error);
        return response.status(500).send({message: error.message})
    }
})

router.get('/', (request, response) => {

})

