import React from 'react'
import './Card.css'
import CardData from '../../data/CardData.json'

const Card = () => {
  return (
    <div className='cardWrapper'>

     
{
      CardData.map((data, index) => {
        return(
                <div className='card' key={index}>
                  <div className='cardText'>
                  <img src ={data.src}  alt={data.title} />
                    <h2>{data.title}</h2>
                    <p>{data.desc}</p>
                  </div>
                    <button>Learn More</button>  
                </div>
        )
      }) 
}
    </div>
  )
}

export default Card
