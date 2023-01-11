 import React from 'react'
 import logoData from '../../data/LogoData.json';
 import './Logos.css'
 import logo from '../../assets/images/Vector.svg'
const Logos = () => {
  return (
    <div className='logoWrapper'>     
{
      logoData.map((data, index) => {
        return(
                <div className="logoContainer" key={index}>
                    <div className="logoImage">
                      <img src={logo} alt="momo" />
                    </div>
                    <div className="logoText">{data.txt}</div>
                </div>
        )
      }) 

}
</div>
  )
}
 export default Logos;