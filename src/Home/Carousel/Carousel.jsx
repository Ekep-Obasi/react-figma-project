import React from 'react'
import './Carousel.css'
import myImage from '../../assets/images/home.jpg'

// const myStyle={backgroundImage: "url('https://selectadventuresafari.com/wp-content/uploads/2021/02/lake-kivu-rwanda.jpg')",};

const Carousel = () => {
  return (
    <div className='wrapper'>
      <img src={myImage} alt="" />
     <div className='textHolder'>
          <h1>Experience the beauty of Rwanda with us</h1>
          <p>Discover the Land of a Thousand Hills</p>
          <div className="buttons">
            <button>&lang;</button>
            <button>&rang;</button>
          </div>
          </div>
    </div>
       
  )
}
export default Carousel
