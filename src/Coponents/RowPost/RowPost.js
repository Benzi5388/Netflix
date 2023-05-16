import React from 'react';
import { useEffect, useState} from 'react';
import "./RowPost.css";
import axios from 'axios';
import {imageUrl,API_KEY } from '../../constants/constant';
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlid, seturlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
          console.log(response.data);
          setMovies(response.data.results)
        })
    }, [props.url])
    const opts ={
      height:'390',
      width: '100%',
      playerVars:{ autplay: 1,},
    }
    const handleMovie = (id) =>{
      console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
          if(response.data.results){
            seturlId(response.data.results[0])
          }
          else{
            alert('Video not available')
          }
        }).catch((err)=>{
          alert('Video not available')
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
           <img onClick ={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
          </div>
          {urlid && <Youtube opts={opts} videoId = {urlid.key}/>}
    </div>
  )
}

export default RowPost