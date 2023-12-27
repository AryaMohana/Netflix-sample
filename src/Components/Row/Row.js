import React, { useEffect, useState } from 'react'
import './Row.css';
import YouTube from 'react-youtube';

import axios from '../../axios';
import { imageUrl,ap, API_KEY } from '../../constants/constant';
function Row(props) {

  const [movies,setmovies]=useState([])
  const[urlid,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
       })
},[])
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const handlemovies=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
     } else{
        console.log('Array empty')
      
  }
})
}


  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handlemovies(obj.id)} className={props.isSmall?'smallPoster': 'poster'}alt='poster'src={`${imageUrl+obj.backdrop_path}`}/>

          )}
           </div>
          { urlid && <YouTube  opts={opts} videoId={urlid.key} /> }
    </div>
  )
}

export default Row
