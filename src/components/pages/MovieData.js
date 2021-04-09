import React from 'react';
import {Link} from 'react-router-dom';
import data from '../../../Backend/data';
import Rating from './Rating';
import PhotoDisplay from './test'
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default function MovieData(props){
    const movie = data.movies.find(x=> x._id == props.match.params.id);
    if(!movie){
        return <div> Movie Not Found</div>
    }
   return(
<div className= "movieData" src = {movie.image} alt={movie.name}>
<Link to='/'>Back to result</Link>
    <div className = "row top">
        <div class= " col-1">
            <img className="img"  alt={movie.name}></img>
        </div>
        <div class= " col-1">
            <ul>
                <li>
                    <h1>{movie.name}</h1>
                    <span class="text-muted">2021&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;movie&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;16+&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Language: English
                        </span>
                </li>
                <li>
                    <Rating
                    rating={movie.rating}
                    ></Rating>
                </li>
                <li>
                    Time : {movie.time}
                </li>
                <li>
                    Description:
                    <p>{movie.discription}</p>
                </li>
            </ul>
        </div>
        <div class= " col-2">
            <div className = "card card-body">
                <ul>
                    <li>
                        <div className = "row">
                            <div> Time</div>
                            <div className= "time">{movie.time}</div>
                            
                        </div>
                    </li>
                    <li>
                        <div className = "row">
                            <div> Status</div>
                            <div >{movie.data> 0 ? (
                                <span className="success"> avillabel</span>
                            ) : (
                                <span className="error"> Unavailable</span>
                            )}</div>
                        </div>
                    </li>
                    <li>
                    
                      <button className="btn"><i class="fa fa-play"></i>&nbsp;&nbsp;Book ticket</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
   )

};
