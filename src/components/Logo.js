import React from 'react'
import dtslogo from '../images/dtslogo.png'

const Logo = () => {
  return (
    <div className='logo'>
      <img className='dtslogo' src={dtslogo} alt='The DTS logo'></img>
    </div>
  )
}

export default Logo