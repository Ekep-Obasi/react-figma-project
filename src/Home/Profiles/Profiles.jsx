import React from 'react'
import './Profiles.css'
import workersData from '../../data/WorkersData.json'
const Profiles = () => {
  return (
    <div className='profilesContainer'>
      <div className="contain">
      {
        workersData.map((data,index)=>{
          return (
            <div className='profile'>
              <div className="imagecontainer">
                <img src={data.src} alt={data.name} />
              </div>
              <div className="profileText">
                <h3>{data.name}</h3>
                <p>{data.about}</p>
              </div>
            </div>
          )
        })
      }
      </div>
      <div className="decoration">
        <span>span</span>
        <span>span</span>
        <span>span</span>
      </div>
    </div>
  )
}

export default Profiles
