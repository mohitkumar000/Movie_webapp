import React, { Component } from 'react'
import { movies } from './getmovies'
export default class List extends Component {
  render() {
    let movie =movies.results;
    return (
      <>
      {
        movie.length == 0 ?(
          <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        ):(
        
          <div>
              <h3 className="text-center">
                
            <strong>Trending</strong>

          </h3>
        <div className="movies-list">
          {
                movie.map((movieObj)=>(
                  <div class="card movies-card" >
                  <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movies-image" alt="..."
                      style={{height:"40vh",width: "35vh"}}
                  />
                  {/* <div className="card-body banner-title"> */}
                          <h5 className="card-title movies-title ">{movieObj.original_title}</h5>
                      {/* <p className="card-text movie-text">{movieObj.overview}</p> */}
                      <div className="button-wrapper">
                       <a href="#" class="btn btn-primary movies-button">Add to faviourate</a> 
                  </div> 
              </div>

              ))

          }
          </div>
          <div className="pagination">
             
          </div>
          </div>

          
           
          
        )
      }
      </>
    )
  }
}
