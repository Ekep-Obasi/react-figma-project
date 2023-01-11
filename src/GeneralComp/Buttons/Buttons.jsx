import React from 'react'
import './Buttons.css'
const Buttons = ({title, color}) => {
  return <button style={{backgroundColor:color}}>{title}</button>
}

export default Buttons
