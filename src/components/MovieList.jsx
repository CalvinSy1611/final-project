import React from "react";
import Home from "./Home";

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-row max-h-fit p-10">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
        >
          <img src={movie.image} className="w-full h-39" alt={movie.title} />
          <h4 className="text-white text-center pt-4 w-28 h-10">{movie.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
