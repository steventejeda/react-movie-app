import React, { useEffect, useState } from "react";
import Movie from './components/Movie';


//API key, **This is not a best practice for storing API_KEYs. For time management purposes of completing this project is why I did this.***
const API_KEY = 'c89425fda98c3c3b8d5707c051751162';

//Movie APIs
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;



function App() {
  const [movies, setMovies] = useState([]);

  console.log(process.env)

  useEffect(() =>  {
      fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => { 
        console.log(data);
        setMovies(data.results);
      });
  }, []);


  return (
    
    <div>
      {movies.length > 0 && movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
      
    </div>
  );
}

export default App;









