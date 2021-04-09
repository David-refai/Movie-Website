import React from 'react';
import '../../App.css';
import '../../index.css'
import data from '../../../Backend/data';
import Movies from './Movies';


export default function Home() {
  return (
//     <div className="grid-container">
//     <main>
   
//     </main>
    
// </div>
<div className="row center">
{data.movies.map((movie) =>(
<Movies key={movie._id}  movie={movie}/>
))
} 
</div>
      
  );
}
