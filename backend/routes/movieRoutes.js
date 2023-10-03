import express, { request, response } from "express";
import { Movie } from "../models/movieModel.js";

export const router = express.Router();

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

//route to show all movies in collection
router.get('/', async (request, response) => {
    try{
        const movies = await Movie.find({})
        return response.status(200).json({
            count: movies.length,
            data: movies
        })
    } catch(error){
        console.log(error);
        return response.status(500).send({ message: error.message})
    }
})

//route to show one movie 
router.get('/:id', async (request, response) =>{
    try{
        
        const { id } = request.params;
        const result = await Movie.findById(id);

        return response.status(200).json(movie)

    }catch(error){
        console.log(error.message);
        return response.status(500).send({ message: error.message })
    }
})

//route to edit movie
router.put('/:id', async (request, response) => {
    try{
        if(
            !request.body.title ||
            !request.body.director ||
            !request.body.releaseYear
        ){
            return response.status(404).send({
                message: 'Send all required fields: title, director, releaseYear'
            });
        }

        const {id} = request.params;
        const result = await Movie.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).send({ message: 'No movie found'})
        }

        return response.status(200).send({ message: 'Movie updated successfully'})

    } catch(error){
        console.log(error.message)
        return response.status(500).send({ message: error.message })
    }
})

//route to delete movie
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Movie.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Book not found'})
        }
        return response.status(200).send({ message: 'Movie deleted successfully'})
    } catch(error){
        console.log(error.message);
        return response.status(500).send({ message: error.message })
    }
})

export default router;