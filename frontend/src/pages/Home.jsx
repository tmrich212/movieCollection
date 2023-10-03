import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FcInfo } from "react-icons/fc";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/movies")
      .then((response) => {
        setMovies(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl p-4">Movie Collection</h1>
        <Link to="/movies/create">
          <IoIosAddCircle className="text-sky-600 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border-2 border-sky-600 rounded-lg p-2">No.</th>
              <th className="border-2 border-sky-600 rounded-lg p-2">Title</th>
              <th className="border-2 border-sky-600 rounded-lg p-2 max-md:hidden">
                Director
              </th>
              <th className="border-2 border-sky-600 rounded-lg p-2 max-md:hidden">
                Release Year
              </th>
              <th className="border-2 border-sky-600 rounded-lg p-2">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie._id} className="h-8 ">
                <td className="border border-sky-600 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-sky-600 rounded-md text-center">
                  {movie.title}
                </td>
                <td className="border border-sky-600 rounded-md text-center max-md:hidden">
                  {movie.director}
                </td>
                <td className="border border-sky-600 rounded-md text-center max-md:hidden">
                  {movie.releaseYear}
                </td>
                <td className="border border-sky-600 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/movies/details/${movie._id}`}>
                      <FcInfo className="text-2xl" />
                    </Link>
                    <Link to={`/movies/edit/${movie._id}`}>
                      <AiFillEdit className="text-green-600 text-2xl"/>
                    </Link>
                    <Link to={`/movies/delete/${movie._id}`}>
                      <MdDeleteForever className="text-red-600 text-2xl"/>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
