import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style ={{display:'flex',background:'White',padding:'1rem',justifyContent: 'center',alignItems: 'center',color:'blue'}}>
        <h1>Movies App</h1>
        <h2 style ={{marginLeft:'2rem',}}>Favorites</h2>

      </div>
    )
  }
}
