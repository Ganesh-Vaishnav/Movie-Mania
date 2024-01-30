import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from "./search.svg";
import DisplayMovie from "./DisplayMovie";


const Api_Url = 'https://www.omdbapi.com/?i=tt3896198&apikey=f29a2102'


const App = () =>{

    const [movies,setMovies] = useState([]);
    const [searchedMovie, setsearchedMovie]  = useState("");

    useEffect(()=>{
        search('Batman');
    },[]);

    const search = async (title) =>{
        const response = await fetch(`${Api_Url}&s=${title}`);
        const data = await response.json();
       
        setMovies(data.Search);
        console.log(movies);
         
    }

    
    return (
        <div className="app">
        <h1>Movie Time</h1>

        <div className="search">
            <input 
            placeholder="Search for movies"
            value = {searchedMovie}
            onChange={(e)=> setsearchedMovie(e.target.value) }
            />
            <img
            src={SearchIcon}
            alt="Search Button"
            onClick={()=>search(searchedMovie)}
            />
        </div>

        { movies?.length > 0 
        ?     (
                <div className="container">
               
               {movies.map( (movie)=>(
                    <DisplayMovie movie={movie} />
                ))}

            </div>
            ) :
            (
                <div className="empty">
                    <h2> No Movies Found</h2>

                </div>
            )
        
        }
        
        </div>
    );
}

export default App;