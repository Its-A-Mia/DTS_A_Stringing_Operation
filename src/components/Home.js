import React from 'react'
import MakeAppointmentBtn from './MakeAppointmentBtn'
import homeBackground from '../images/homebackgroundtest.png'

const Home = (props) => {
  return (
    <div className='home' id='home'>
      <img className='homeBackgroundPicture' src={homeBackground} alt='A tennis racket surrounded by a circular gradient in the color black'/>
        <div className='homeInfoTextWrapper'>
          <strong><h1>Denver Tennis Stringing</h1></strong> We are proud to assist our local tennis players in restringing their rackets. 
          We offer same-day stringing with a variety of string options available.
          <MakeAppointmentBtn setNewPageDestination={props.setNewPageDestination}/> 
          <div className='homeInfoTextBacker'></div>
        </div>      
    </div>
  )
}

export default Home