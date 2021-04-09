import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

import Rating from './Rating';


 function Movies(props) {
  const {movie}= props;
  
  return (
    
    <div key = {movie._id} className="card">
    <a href={`/movie/${movie._id}`}>
        <img className="medium" src={movie.image} alt={movie.name} />

        </a>
    <div className="card-body">
        <a href="movie.html">
            <h2>{movie.name}</h2>
        </a>
       <Rating rating ={movie.rating}></Rating>
        <div className="time">
            {movie.time}
        </div>
    </div>
   
       
</div>

  );
}
export default Movies;