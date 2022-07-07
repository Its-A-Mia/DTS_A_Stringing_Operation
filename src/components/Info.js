import React from 'react'
import flipCardBack  from '../images/flipcardback.png'
import LeftBG  from '../images/leftbg.png'
import LeftMidBG  from '../images/leftmidbg.png'
import RightMidBG  from '../images/rightmidbg.png'
import RightBG  from '../images/rightbg.png'

const Info = () => {
  return (
    <div className='infoWrapper' id='infoWrapper'>
      <div className='placardWrapper'>
        <div className='flipCard' id='prices' >
          <div className='flipCardInner'>
            <div className='flipCardFront' style={{backgroundImage: `url(${LeftBG})`, backgroundSize: '480px 1038px', backgroundPosition: 'center'}}>    
              <p>ABOUT</p>     
            </div>
            <div className='flipCardBack'  style={{backgroundImage: `url(${flipCardBack})`}}>
              <p></p>
            </div>
          </div>           
        </div>
        <div className='flipCard' id='bio'>
          <div className='flipCardInner'>
            <div className='flipCardFront' style={{backgroundImage: `url(${LeftMidBG})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <p>CONTACT</p>            
            </div>
            <div className='flipCardBack' style={{backgroundImage: `url(${flipCardBack})`}}>
              <p>
              is your new location for getting your tennis racket restrung in Denver, CO!
                Our amazing stringing duo, Jon and Wesley, bring years of experience in both tennis and stringing rackets,
                and they look forward to bringing your racket back to life with a fresh set of strings!
              </p>            
            </div>
          </div>       
        </div>
        <div className='flipCard' id='services' >
          <div className='flipCardInner'>
            <div className='flipCardFront' style={{backgroundImage: `url(${RightMidBG})`, backgroundSize: '480px 1033px', backgroundPosition: 'center'}}>
               <p>PRICES</p>
            </div>
            <div className='flipCardBack' style={{backgroundImage: `url(${flipCardBack})`}}>
              <div style={{textAlign: 'left', transform: 'translateY(-12px)'}}>                
                <h3 className='underline' style={{textAlign: 'center'}}>Services Offered </h3>
                <p style={{fontStyle: 'italic'}}>
                  Racket Restringing Methods <br></br>
                  &emsp; &#x2022; Sergetti <br></br>
                  &emsp; &#x2022; 1 piece or 2 piece <br></br>
                  Handle Regripping <br></br>
                  Stenciling
                </p>
              </div>
            </div>
          </div>  
        </div>
        <div className='flipCard' id='contact'>
          <div className='flipCardInner'>
            <div className='flipCardFront' style={{backgroundImage: `url(${RightBG})`, backgroundSize: '480px 1035px', backgroundPosition: 'center'}}>
              <p>SERVICES</p>
            </div>
            <div className='flipCardBack' style={{backgroundImage: `url(${flipCardBack})`}}>
            </div>
          </div>           
        </div>
      </div>
    </div>
  )
}

export default Info