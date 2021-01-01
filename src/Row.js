import React, {useState, useEffect} from 'react'
import axios from "./axios"
import "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setmovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")


    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setmovies(request.data.results)
            return request  
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)
    
    const opts = {
        width: '100%',
        height: '400px',
        playerVars:{
            autoplay: 1,
        }
    }

    const clickBorder = {
        border: "1px solid white"
    }

    function handleClick(movie) {
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.name || movie?.original_name || movie?.title || "")
            .then((url) => {
                const movieTrailer = new URLSearchParams(new URL(url).search)
                setTrailerUrl(movieTrailer.get('v'))
                
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <div className = "row">
           <h2>{title}</h2> 
           <div className="row__posters">
               {movies.map(movie => {
                   return <img onClick = {() => handleClick(movie)} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className = {`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} />
               })}
            </div>   
               {trailerUrl && <Youtube videoId = {trailerUrl} opts ={opts}></Youtube>}
        </div>
    )
}

export default Row
