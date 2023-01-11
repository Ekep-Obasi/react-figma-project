import React from 'react'
import './Header.css'

const Header = ({title, subtitle}) => {
  return (
    <div className='headerContainer'>
      <h2>{title}</h2>
      <h1>{subtitle}</h1>
    </div>
  )
}

export default Header
