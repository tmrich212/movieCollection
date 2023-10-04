import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteMovie = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios
    .delete(`http://localhost:5555/movies/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      alert('An error occured, try again later')
      console.log(error)
    })
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 p-4">Delete Movie</h1>
      {loading ? (<Spinner />) 
      : (
        <div className="flex flex-col items-center border-2 rounded-xl max-w-350 p-8 mx-auto max-w-md">
          <h3 className="text-2xl text-center">Are you sure you want to delete this movie?</h3>
          <button className="p-4 bg-green-600 m-8 w-full text-2xl" onClick={handleDelete}>Yes, delete</button>
        </div>
      )}
    </div>
  )
}

export default DeleteMovie