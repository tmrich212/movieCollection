import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const CreateMovie = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");

  const handleSave = () => {
    const data = {
      title,
      director,
      releaseYear,
    };
    setLoading(true);

    axios
      .post(`http://localhost:5555/movies`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
  <div className="p-4">
    <BackButton />

    <h1 className="text-3xl my-4 p-4">Add Movie</h1>
    {loading ? (<Spinner />) : ''}
    <div className="flex flex-col border-sky-400 border-2 rounded-xl w-[480px] p-4 mx-auto max-w-md">
        <div className="my-4">
          <label className="text-xl mr-4">Title</label>
          <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 py-2 w-full'/>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4">Director</label>
          <input 
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          className='border-2 py-2 w-full text-'/>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4">Release Year</label>
          <input 
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          className='border-2 py-2 w-full'/>
        </div>
        <button className="p-2 m-8 bg-orange-600" onClick={handleSave}>Save Movie</button>
      </div>
  </div>);
};

export default CreateMovie;
