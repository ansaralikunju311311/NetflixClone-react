import  { useEffect, useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Player = () => {
    const {id}=useParams();
    const navigate = useNavigate();

    const [apiData,SetAPidata] =useState({name:'',key:'',published_at:'',type:''})
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGRhYWI5NjNmNjE5Y2FhYmUzMGJlMjJlY2E3MmRmMyIsIm5iZiI6MTczMjE4NjQzNy42NDI1NTI0LCJzdWIiOiI2NzM5ODZkMzczYTQ1ZTUxODRiZjdlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.45xrsSQ4lQ0YQYRSNoEd0iwEOPJjWxaesPXbbnWJxkg'
  }
};



// useEffect(()=>
// {
//     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
//   .then(res => res.json())
//   .then(res => SetAPidata(res.results[0]))
//   .catch(err => console.error(err));
// },[])

useEffect(()=>
{
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res=>SetAPidata(res.data.results[0]))
  .catch(error=>console.log(error))
},[])






  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" 
         onClick={()=>
         {console.log(`back arrow clicked`)
          navigate(-2)
         }}/>
        {/* <iframe src={`https://www.youtube.com/emebed/${apiData.key}`} frameborder='0' width='90%' height='90%' title='Trailer'
        allowFullScreen></iframe> */}


<iframe 
  src={`https://www.youtube.com/embed/${apiData.key}`} 
  frameborder='0' 
  width='90%' 
  height='90%' 
  title='Trailer' 
  allowFullScreen>
</iframe>



        <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player
