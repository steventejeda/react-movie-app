import React, { useEffect, useState } from "react";
import Movie from './components/Movie';


//API key, **This is not a best practice for storing API_KEYs. For time management purposes of completing this project is why I did this.***
const API_KEY = '04c35731a5ee918f014970082a0088b1';

//Movie APIs
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;



function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function getMovies(API) { 
    fetch(API)
    .then((res) => res.json())
    .then((data) => { 
    console.log(data);
    setMovies(data.results);
  });
  }

  useEffect(() =>  {
      getMovies(FEATURED_API)
  }, []);

  

  //SEARCH COMPONENT
    const handleOnSubmit = (e) => { 
      e.preventDefault();

      getMovies(SEARCH_API+searchTerm)
    setSearchTerm('');
    
    }

    const handleOnChange = (e) => { 
      setSearchTerm(e.target.value);
    }

  return (
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
      <input 
       className="search"
       type="text" 
       placeholder="Search..."
       value={searchTerm}
       onChange={handleOnChange}
       />
      </form>
      </header> 

    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
      
    </div>
    </div>
  );
}

export default App;









