import React from 'react'
import SliderData from '../../data/SliderData.json'
import './Slider.css'

const Slider = () => {
  return (
    <div className='sliderContainer'>  
    <div className="btn">
      <button>&lang;</button>
      <button>&rang;</button>
    </div>
    <div className='sliderWrap'> 
{
      SliderData.map((data, index) => {
        return(
                <div className='slider' key={index}>
                  <div className='sliderText'>
                  <img src ={data.scr}  alt={data.title} />
                    <h2>{data.title}</h2>
                    <p>{data.desc}</p>
                  </div>
                </div>
        )
      }) 
}
    </div>
    </div>
  )
}

export default Slider;

