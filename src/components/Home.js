import React from 'react'
import Tension from '../components/Tension'
import Racket from '../images/home-racket.png'
import ExtraComments from './ExtraComments'
import NameAndContact from './NameAndContact'
import OpenAptOption from './OpenAptOption'
import Optionals from './Optionals'
import Scheduling from './Scheduling'
import StartBtn from './StartBtn'
import StringType from './StringType'


const Home = (props) => {

  const pos = { x : 0, y : 0}

  const saveCursorPosition = function(x, y) {
    pos.x = ((x / window.innerWidth).toFixed(2))
    pos.y = ((y / window.innerHeight).toFixed(2))
    
    const scaleValue = 5;
    //vvv converts raw positions to usable degress and scaled up to create more movement vvv
    //for y position
    if ((pos.y >= 0.50 && pos.x < 0.50)) {
      pos.y = scaleValue * (.50 - pos.y)                    
    } else if ((pos.y < 0.50 && pos.x >= 0.50)) {
      pos.y = -scaleValue * (.50 -  pos.y)
    } else if (pos.y < 0.50 && pos.x < 0.50) {
      pos.y = scaleValue * (.50 - pos.y)
    } else {
      pos.y = -scaleValue * (.50 - pos.y)
    }

    //for x position
    if (pos.x < 0.50) {
      pos.x = scaleValue * (.50 - pos.x)
    } else {
      pos.x = - (scaleValue * (pos.x -  .50))
    }

    //defines custom properties in styles 
    document.documentElement.style.setProperty('--mousePosX', pos.x + 'deg')
    document.documentElement.style.setProperty('--mousePosY', pos.y + 'deg')
  }

  const handleStartBtnClick = () => {
    const racketWrapper = document.getElementById('racketWrapper')
    const greeting = document.getElementById('greeting')
    const home = document.getElementById('homeBackground')
    racketWrapper.style.opacity = 0 //make the racket and startbtn disappear
    setTimeout(() => {racketWrapper.style.display = 'none'; greeting.style.display = 'block';}, 1000) 
    // ^^^ ensures the racketWrapper doesn't mess with the appearing divs, then starts phase two starting 1 second ^^^
    setTimeout(() => {home.style.filter = `brightness(${30}%)`}, 2000) //dims background starting 2 seconds
    setTimeout(() => {greeting.style.opacity = 0; setTimeout(() => {greeting.style.display = 'none'}, 1000)}, 4500) //removes greeting starting 4.5s
    setTimeout(() => {document.documentElement.style.setProperty('--aptOptionsDisplay', 'flex')}, 5000) //shows aptOptions starting 5s
  }
  
  return (
    <div className='home' id='home'>

      <div className='homeBackground' id='homeBackground'></div>
      
      {/* Phase one */}
      <main className='mainContainer' >
        <div className='racketWrapper' id='racketWrapper' onMouseMove={e =>{saveCursorPosition(e.clientX, e.clientY)}}>
          <div className='racket'>
            <img src={Racket} alt=''></img>
          </div>
          <StartBtn handleStartBtnClick={handleStartBtnClick}/>
        </div>
      </main>
      
      {/* Phase two */}
      <div className='greeting' id='greeting'>Let's set up an appointment</div>

      <div className='appointmentOptionsTopLeft' id='aptOptions'>
        <OpenAptOption 
          title='Contact Information' 
          newDisplayProperty='--nameAndContactDisplay' 
          newWidthProperty='--aptOptTopLeftWidth'
        />
        <NameAndContact/>
      </div>

      <div className='appointmentOptionsMiddleLeft' id='aptOptions'>
        <OpenAptOption 
          title='Tension' 
          newDisplayProperty='--tensionDisplay' 
          newWidthProperty='--aptOptMiddleLeftWidth'
        />
        <Tension/>
      </div>

      <div className='appointmentOptionsBottomLeft' id='aptOptions'>
        <OpenAptOption 
        title='String Type'
        newDisplayProperty='--stringTypeDisplay' 
        newWidthProperty='--aptOptBottomLeftWidth'
        />
        <StringType/>
      </div>

      <div className='appointmentOptionsTopRight' id='aptOptions'>  
        <OpenAptOption 
          title='Optionals'
          newDisplayProperty='--optionalsDisplay' 
          newWidthProperty='--aptOptTopRightWidth'/>
        <Optionals/>
      </div>

      <div className='appointmentOptionsMiddleRight' id='aptOptions'>
        <OpenAptOption 
          title='Scheduling'
          newDisplayProperty='--schedulingDisplay' 
          newWidthProperty='--aptOptMiddleRightWidth' 
        />
        <Scheduling/>
      </div>

      <div className='appointmentOptionsBottomRight' id='aptOptions'>
        <OpenAptOption 
          title='Comments'
          newDisplayProperty='--commentsDisplay' 
          newWidthProperty='--aptOptBottomRightWidth'
        />
        <ExtraComments/>
      </div>
      
    </div>
  )
}

export default Home