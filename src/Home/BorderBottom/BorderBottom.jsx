import React from 'react'
import Buttons from '../../GeneralComp/Buttons/Buttons'
import './BorderBottom.css'

const BorderBottom = () => {
  return (
    <div className='borderBottom'>
      <div className="input">
        <input type="text" placeholder='Search Activities or Destinations    🔍 ' />
      </div>
      <div className="options">
        <div className="option">
          <label htmlFor="guestSelect">Guests</label>
          <select>
            <option>2 Adult</option>
          </select>
        </div>
        <div className="option">
          <label htmlFor="dateSelect">Date</label>
          <select>
            <option>12 - 13 April 202</option>
          </select>
        </div>
        <div className="option">
          <label htmlFor="pakageSelect">Package</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <Buttons  title="Book Now" color="#C7923E" />
    </div>
  )
}

export default BorderBottom
