import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import SearchMovies from './searchMovies'

ReactDOM.render(
  <React.StrictMode>
    
   (
      <div className='container'>
        <h1 className='tittle'>React Movie Search</h1>
        <SearchMovies/>
      </div>
    );

  </React.StrictMode>,
  document.getElementById('root')
);

