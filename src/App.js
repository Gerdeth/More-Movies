import React,{useEffect, useState} from 'react';

import Movie from "./components/Movie"

const FEATURED_API= "https://api.themoviedb.org/3/movie/550?api_key=a607d8d4f02314295a958f2286e64a46";
function App() {
  const [movies,setMovies]= useState([]);

  useEffect(()=>{
    fetch(FEATURED_API).then(res=> res.json()).then(data=>{
      console.log(data);
      setMovies(data);
    });
    
    
  },[]);
  return (
    <div>{
      movies.length > 0 && movies.map((movie)=>
        <Movie key={movie.genres.id} {...movie.genres}/>
      )}
    </div>
    );

  
}

export default App;
