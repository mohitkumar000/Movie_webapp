import React, { Component } from 'react'
import { movies } from './getmovies'

export default class List extends Component {
  render() {
    let movie = movies.results;
    return (
      <>
      {
        movie.length=""?:
      }
      </>
    


      
    )
  }
}
