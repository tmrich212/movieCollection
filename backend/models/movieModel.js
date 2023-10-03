import mongoose from "mongoose";

const movieSchema = mongoose.model(
    {
        title: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        releaseYear: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

export const movieModel = mongoose('Movie', movieSchema)