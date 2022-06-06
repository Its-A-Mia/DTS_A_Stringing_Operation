import React from 'react'
import infoBackground from '../images/infobg.png'
import pricesFlipCardBG  from '../images/pricesflipcard.png'
import aboutFlipCardBG  from '../images/aboutflipcard.png'
import servicesFlipCardBG  from '../images/servicesflipcard.png'
import contactFlipCardBG  from '../images/contactflipcard.png'

const Info = () => {
  return (
    <div className='infoWrapper' id='infoWrapper'>
      <img className='infoBackgroundPicture' src={infoBackground} alt='A dark green tennis court seen from above'/>
      <div className='placardWrapper'>
        <div className='flipCard' id='prices'>
          <div className='flipCardInner'>
            <div className='flipCardFront' >    
              <p>PRICES</p>     
            </div>
            <div className='flipCardBack'  style={{backgroundImage: `url(${pricesFlipCardBG})`}}>
              <p></p>
            </div>
          </div>           
        </div>
        <div className='flipCard' id='bio'>
          <div className='flipCardInner'>
            <div className='flipCardFront'>
              <p>ABOUT</p>            
            </div>
            <div className='flipCardBack' style={{backgroundImage: `url(${aboutFlipCardBG})`}}>            
            </div>
          </div>       
        </div>
        <div className='flipCard' id='services'>
          <div className='flipCardInner'>
            <div className='flipCardFront' >
              <p>SERVICES</p>
            </div>
            <div className='flipCardBack' style={{backgroundImage: `url(${servicesFlipCardBG})`}}>
            </div>
          </div>  
        </div>
        <div className='flipCard' id='contact'>
          <div className='flipCardInner'>
            <div className='flipCardFront'>
              <p>CONTACT</p>
            </div>
            <div className='flipCardBack' style={{backgroundImage: `url(${contactFlipCardBG})`}}>
            </div>
          </div>           
        </div>
      </div>
    </div>
  )
}

export default Info