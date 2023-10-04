import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowMovie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
    .get(`http://localhost:5555/movies/${id}`)
    .then((response) => {
      setMovie(response.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, [])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 p-4'>Movie Info</h1>
      {loading ? ( <Spinner/> ) :
      (
        <div className='flex flex-col border-2 border-sky-600 rounded-xl w-fit p-4 m-4'>
          <div className='my-4'>
            <span className='pr-3 text-xl'>Title:</span>
            <span className='text-xl'>{movie.title}</span>
          </div>
          <div className='my-4'>
            <span className='pr-3 text-xl'>Director:</span>
            <span className='text-xl'>{movie.director}</span>
          </div>
          <div className='my-4'>
            <span className='pr-3 text-xl'>Release Year:</span>
            <span className='text-xl'>{movie.releaseYear}</span>
          </div>
          <div className='my-4'>
            <span className='pr-3 text-xl'>Last Updated:</span>
            <span className='text-xl'>{new Date(movie.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowMovie