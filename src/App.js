import React,{} from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import {MovieProvider} from './Context/MovieContext'
import AddMovies from './Components/AddMovies';
//import Tweet from './Components/Tweet';

function App() {
  
  return (
     <MovieProvider>
      <div>
        <AddMovies/>
        <MovieList/>
      </div>
     </MovieProvider>
  );
}

export default App;
