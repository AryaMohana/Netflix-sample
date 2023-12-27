import React, { useEffect, useState } from 'react' 
import{ API_KEY,imageUrl}from'../../constants/constant'
import './Banner.css';
import axios from '../../axios'

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })

  },[])
  return (

    <div
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:"" })`}}
    
    
    className='banner'>
      <div className='content'>
      <div><h2 className='title'>{movie ? movie.title:""}  </h2></div>
        
        <div className='banner_buttons'>
           < buttons className='button'>Play</buttons>
           <button className='button'>My List</button>
        </div>
        <h1 className='description'> {movie?movie.overview:""} </h1>


        
        
      </div>
      
      <div className='fade_bottom'></div>
      
      

    </div>
  )
}

export default Banner
