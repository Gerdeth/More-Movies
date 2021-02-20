
import React from 'react'


const Movie = ({original_title, overview,poster_path})=>(
    <div className= "movie">
       <div className="movie-info">
            <h3> {original_title}</h3>
            <span>{overview}</span>
       </div>


    </div>
);

export default Movie;