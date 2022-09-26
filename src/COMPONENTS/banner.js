import React, { Component } from 'react'
import { movies } from './getmovies'

export default class Banner extends Component {
  render() {
  
    let movie =movies.results[1];
    //let movie = "";

    return (
      <>
        {movie == "" ?(
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            ) : (
            
            <div class="card banner-card" >
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-image" alt="..."/>
                {/* <div className="card-body banner-title"> */}
                        <h5 className="card-title banner-title ">{movie.original_title}</h5>
                    <p className="card-text banner-text">{movie.overview}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                {/* </div> */}
            </div>
    
        )}
   </>
    );
  }
}
