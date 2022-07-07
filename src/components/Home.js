import React from 'react'
import MakeAppointmentBtn from './MakeAppointmentBtn'
import homeBackground from '../images/homebackgroundtest.png'
import dtsTitle from '../images/denvertennisstringinghometitle.png'
import perfectlyTensioned from '../images/perfectlytensioned.png'
import tennisBall from '../images/tennisball.png'

const Home = (props) => {
  return (
    <div className='home' id='home'>
      <div className='dtsTitle'>
        <img src={dtsTitle} alt='Home page title stating Denver Tennis Stringing'/>
      </div>
      <div className='perfectlyTensioned'>
        <img src={perfectlyTensioned} alt='Perfectly tensioned'/>
      </div>
      <div className='makeAppointmentBtnTennisBallWrapper'>
        <div className='makeAppointmentBtnWrapper'>
          <MakeAppointmentBtn setNewPageDestination={props.setNewPageDestination}/>
        </div>
        <img className='tennisBall' src={tennisBall} alt=''/>
      </div>
      <div className='glowHome'></div>
      <img className='homeBackgroundPicture' src={homeBackground} alt='A linear gradient going top-down starting with black to red.'/>
    </div>
  )
}

export default Home