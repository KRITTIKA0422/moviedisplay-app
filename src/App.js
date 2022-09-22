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
  
  const styles={color: movie.rating>8?"green":"red",};
  const [show,setShow]= useState(true);
return(
  <div className="movie-container">
    <img src={movie.poster} alt={movie.name} className="movie-poster"></img>
    <div className="movie-specs"><h2 className="movie-name">{movie.name}</h2>
    <p style= {styles} className="movie=-rating">{movie.rating}</p></div>
    <button onClick={()=>setShow(!show)}>Toggle summary</button>
    {show?<p className="movie-summary">{movie.summary}</p>:""}   
  </div>
);
}

export default App;

