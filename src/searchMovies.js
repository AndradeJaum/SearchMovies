import React, {useState} from "react";
import MovieCard from "./movieCard.js";

export default function SearchMovies() {

//state- input query, movies
const [query, setQuery] = useState('');
//create the state for movies, and update that state appropriate
const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    

    const url = `https://api.themoviedb.org/3/search/movie?api_key=21df4d4b97c17fc2592da234f576f760&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setMovies(data.results)
    }catch(err){
        console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e Jurassic Park"
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
        <div className="card-list">
          {movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie} key={movie.id} />
      ))}
      </div>
    </>
  );
}
