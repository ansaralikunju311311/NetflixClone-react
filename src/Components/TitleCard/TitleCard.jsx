import React, { useState } from 'react'
import cards_data from '../../assets/cards/Cards_data.js'
import './TitleCard.css'

const TitleCard = ({title,category}) => {
const [data,Setdata] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGRhYWI5NjNmNjE5Y2FhYmUzMGJlMjJlY2E3MmRmMyIsIm5iZiI6MTczMTgyNDA3OS43NjIzNjQxLCJzdWIiOiI2NzM5ODZkMzczYTQ1ZTUxODRiZjdlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YD8VxLujI9W-4SMS1R-MFamyxPt5W2PXF7hG2nl46Q4'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => Setdata(res.results))
    .catch(err => console.error(err));
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popolular on Netlix"}</h2>
       <div className="card-list">
          {data.map((card,index)=>{
              return <div className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                 <p>{card.original_title}</p>
              </div>
        })}
       </div>
    </div>
  )
}

export default TitleCard
