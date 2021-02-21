import React,{useEffect, useState} from 'react';

import Movie from "./components/Movie"

const FEATURED_API= "https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=a607d8d4f02314295a958f2286e64a46";
const IMG_API="https://image.tmdb.org/t/p/w1280";
const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=a607d8d4f02314295a958f2286e64a46&query";

function App() {
  const [movies,setMovies]= useState([]);

  useEffect(()=>{
    fetch(FEATURED_API).then((res)=> res.json()).then((data)=>{
      console.log(data);
      setMovies(data.results);
    });
  
    
  },[]);
  return (
    <div className= "movie-container">{
      movies.length > 0 && movies.map((movie)=>
        <Movie key={movie.id} {...movie}/>
      )}
    </div>
    );

  
}

export default App;
