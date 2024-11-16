import React from 'react'
import cards_data from '../../assets/cards/Cards_data.js'
import './TitleCard.css'
const TitleCard = ({title,category}) => {
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popolular on Netlix"}</h2>
       <div className="card-list">
          {cards_data.map((card,index)=>{
              return <div className="card" key={index}>
                <img src={card.image} alt="" />
                 <p>{card.name}</p>
              </div>
        })}
       </div>
    </div>
  )
}

export default TitleCard
