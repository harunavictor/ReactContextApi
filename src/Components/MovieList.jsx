 import React, { useContext } from "react";
import { MovieContext } from '../Context/MovieContext'
import Movie from '../Components/Movie'

const MovieList = () => {
      const [movies, setMovies] = useContext(MovieContext);
    return (
      <div>
        {movies.map((movie) => (
          <Movie key={movie.id} name={movie.name} price={movie.price} />
        ))}
      </div>
    );
    
};

export default MovieList;
