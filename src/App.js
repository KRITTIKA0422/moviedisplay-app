import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";
import { useEffect } from "react";
import { API } from "./global";


// App - component
 function App() {

   const[movies,setMovies]=useState([]);
   useEffect(()=>{
     fetch(`${API}/movies`)
     .then((data)=>data.json())
     .then((m)=>setMovies (m));
   },[]);
   console.log (movies);
   return (
     <div className="App">
    <div className="movie-list-container">{movies.map((m)=>(<Film movie ={m}/>))}</div>
     </div>
 );
 }

function Film({movie}){
  
  return(
    <div className="movies-container">
      <img className="movie-picture" src={movie.poster} alt={movie.name}/>
      <h2 className ="movie-name">{movie.name}</h2>
      <p className="movie-rating">{movie.rating}</p>
      <p className="movie-summary">{movie.summary}</p>
      </div>
  );
}
export default App;

