import React from 'react'
import Logo from '../images/menuBanner-logo.png'
import DTS from '../images/menuBanner-denvertennisstringing.png'

const MenuBanner = () => {
  return (
    <div className='menuBanner'>
        <div className='logoWrapper'>
            <img className='logo' src={Logo} alt=''></img>
            <img className='DTS' src={DTS} alt=''></img>
        </div>
        <div className='infoButtonWrapper'>
            <button className='infoButton'>info</button>
        </div>
    </div>
  )
}

export default MenuBanner