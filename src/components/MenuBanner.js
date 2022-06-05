import React from 'react'
import dtslogo from '../images/dtslogo.png'


const MenuBanner = (props) => {

  return (
    <div className='menuBanner'>
      <img className='dtslogo' src={dtslogo} alt='The DTS logo'></img>
        <ul className='menuBtns'>
          <li>
            <button className='homeBtn' onClick={() => props.setNewPageDestination('home')}>
              HOME
            </button>
          </li>
          <li> 
            <button className='makeAptBannerBtn' onClick={() => props.setNewPageDestination('makeAppointment')}>
              MAKE APPOINTMENT
            </button>
          </li>
          <li>
            <button className='aboutUsBtn' onClick={() => props.setNewPageDestination('aboutAndContact')}>
              INFO
            </button>
          </li>
        </ul>
      <div className='menuBannerBacker'></div> 
    </div>
  )
}

export default MenuBanner