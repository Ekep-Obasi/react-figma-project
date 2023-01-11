import React from 'react'
import './MenuBar.css'
import logo from  '../../assets/images/Rectangle 1.png'
import Buttons from '../Buttons/Buttons'

const MenuBar = () => {
  return (
    <div className='menu'>
      <div className="logo">
        <div className="image-container"><img src={logo} alt="" /></div>
        <ul>
          <a href="home"><li>Home</li></a>
          <a href="about"><li>About</li></a>
          <a href="tourpackage"><li>Tour package</li></a>
          <a href="gallery"><li>Gallery</li></a>
          <a href="blog"><li>Blog</li></a>
          <a href="contact"><li>Contact us</li></a>
        </ul>
      </div>
      <div>
      <Buttons title="Sign In" color='#C7923E'/>
      </div>
    </div>
  )
}

export default MenuBar
