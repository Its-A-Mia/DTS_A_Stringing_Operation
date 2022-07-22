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
import BackBtn from './BackBtn'
import NextBtn from './NextBtn'
import ReviewAndSubmit from './ReviewAndSubmit'



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
      
      {/* Houses all necessary mechanisms for Options */}
      <div className='appointmentOptionsContainer'>

        {/* Houses buttons to navigate optiions */}
        <div className='changeOptionBtnsWrapper'>
          {/* passing props into OpenAptOption: className, titles, which displays to turn to 'none', which option buttons to focus (changes color to black). Initial Color is the landing option */}
          <OpenAptOption
            btnClassName='stringTypeOptnBtn'
            title='String Type'
            displayNoneArr={['--tensionDisplay', '--optionalsDisplay', '--nameAndContactDisplay', '--schedulingDisplay', '--commentsDisplay', '--reviewAndSubmitDisplay']}
            unfocusArr={['--nameAndContactColor', '--tensionColor', '--optionalsColor', '--schedulingColor', '--commentsColor', '--reviewAndSubmitColor']}
            display='--stringTypeDisplay'
            toFocus='--stringTypeColor'
            initialColor='black'
          />
          {'>'}
          <OpenAptOption
            btnClassName='tensionOptnBtn'
            title='Tension'
            displayNoneArr={['--stringTypeDisplay', '--optionalsDisplay', '--nameAndContactDisplay', '--schedulingDisplay', '--commentsDisplay', '--reviewAndSubmitDisplay']}
            unfocusArr={['--nameAndContactColor', '--stringTypeColor', '--optonalsColor', '--schedulingColor', '--commentsColor', '--reviewAndSubmitColor']}
            display='--tensionDisplay'
            toFocus='--tensionColor'
          />
          {'>'}
          <OpenAptOption
            btnClassName='optionalsOptnBtn'
            title='Optionals'
            displayNoneArr={['--tensionDisplay', '--stringTypeDisplay', '--nameAndContactDisplay', '--schedulingDisplay', '--commentsDisplay', '--reviewAndSubmitDisplay']}
            unfocusArr={['--nameAndContactColor', '--tensionColor', '--stringTypeColor', '--schedulingColor', '--commentsColor', '--reviewAndSubmitColor']}
            display='--optionalsDisplay'
            toFocus='--optionalsColor'
          />
          {'>'}
          <OpenAptOption
            btnClassName='nameAndContactOptnBtn'
            title='Contact Information'
            displayNoneArr={['--tensionDisplay', '--optionalsDisplay', '--stringTypeDisplay', '--schedulingDisplay', '--commentsDisplay', '--reviewAndSubmitDisplay']}
            unfocusArr={['--stringTypeColor', '--tensionColor', '--optionalsColor', '--schedulingColor', '--commentsColor', '--reviewAndSubmitColor']}
            display='--nameAndContactDisplay'
            toFocus='--nameAndContactColor'
          />
          {'>'}
          <OpenAptOption
            btnClassName='schedulingOptnBtn'
            title='Scheduling'
            displayNoneArr={['--tensionDisplay', '--optionalsDisplay', '--nameAndContactDisplay', '--stringTypeDisplay', '--commentsDisplay', '--reviewAndSubmitDisplay']}
            unfocusArr={['--nameAndContactColor', '--tensionColor', '--optionalsColor', '--stringTypeColor', '--commentsColor', '--reviewAndSubmitColor']}
            display='--schedulingDisplay'
            toFocus='--schedulingColor'
          />
          {'>'}
          <OpenAptOption
            btnClassName='commentsOptnBtn'
            title='Special Requests'
            displayNoneArr={['--tensionDisplay', '--optionalsDisplay', '--nameAndContactDisplay', '--schedulingDisplay', '--stringTypeDisplay', '--reviewAndSubmitDisplay']}
            unfocusArr={['--nameAndContactColor', '--tensionColor', '--optionalsColor', '--schedulingColor', '--stringTypeColor', '--reviewAndSubmitColor']}
            display='--commentsDisplay'
            toFocus='--commentsColor'
          />
          {'>'}
          {'>'}
          <OpenAptOption
          btnClassName='reviewAndSubmitOptnBtn'
          title='Review & Submit'
          displayNoneArr={['--tensionDisplay', '--optionalsDisplay', '--nameAndContactDisplay', '--schedulingDisplay', '--stringTypeDisplay', '--commentsDisplay']}
          unfocusArr={['--nameAndContactColor', '--tensionColor', '--optionalsColor', '--schedulingColor', '--stringTypeColor', '--commentsColor']}
          display='--reviewAndSubmitDisplay'
          toFocus='--reviewAndSubmitColor'
          />
        </div>


        {/* Houses the option content; composed of three main components */}
        <div className='stringTypeWrapper' id='aptOptionWrapper'>
          <BackBtn 
            toFocus='--reviewAndSubmitColor'
            previousOption='--reviewAndSubmitDisplay' 
            currentOption='--stringTypeDisplay'
            unfocus='--stringTypeColor'
          />
          <StringType/>
          <NextBtn 
            toFocus='--tensionColor'
            nextOption='--tensionDisplay'
            currentOption='--stringTypeDisplay'
            unfocus='--stringTypeColor'
          />
        </div>
        <div className='tensionWrapper' id='aptOptionWrapper'>
          <BackBtn
            toFocus='--stringTypeColor'
            previousOption='--stringTypeDisplay'
            currentOption='--tensionDisplay'
            unfocus='--tensionColor'
          />
          <Tension/>
          <NextBtn 
            toFocus='--optionalsColor'
            nextOption='--optionalsDisplay'
            currentOption='--tensionDisplay'
            unfocus='--tensionColor'
          />
        </div>
        <div className='optionalsWrapper' id='aptOptionWrapper'>
          <BackBtn 
            toFocus='--tensionColor'
            previousOption='--tensionDisplay'
            currentOption='--optionalsDisplay'
            unfocus='--optionalsColor'
          />
          <Optionals/>
          <NextBtn 
            toFocus='--nameAndContactColor'
            nextOption='--nameAndContactDisplay'
            currentOption='--optionalsDisplay'
            unfocus='--optionalsColor'
          />
        </div>
        <div className='nameAndContactWrapper' id='aptOptionWrapper'>
          <BackBtn 
            toFocus='--optionalsColor'
            previousOption='--optionalsDisplay'
            currentOption='--nameAndContactDisplay'
            unfocus='--nameAndContactColor'
          />
          <NameAndContact/>
          <NextBtn 
            toFocus='--schedulingColor'
            nextOption='--schedulingDisplay'
            currentOption='--nameAndContactDisplay'  
            unfocus='--nameAndContactColor'
          />
        </div>
        <div className='schedulingWrapper' id='aptOptionWrapper'>
          <BackBtn 
            toFocus='--nameAndContactColor'
            previousOption='--nameAndContactDisplay'
            currentOption='--schedulingDisplay'  
            unfocus='--schedulingColor'
          />
          <Scheduling/>
          <NextBtn 
            toFocus='--commentsColor'
            nextOption='--commentsDisplay'
            currentOption='--schedulingDisplay'  
            unfocus='--schedulingColor'
          />
        </div> 
        <div className='commentsWrapper' id='aptOptionWrapper'> 
          <BackBtn 
            toFocus='--schedulingColor'
            previousOption='--schedulingDisplay'
            currentOption='--commentsDisplay'  
            unfocus='--commentsColor'
          />
          <ExtraComments/>
          <NextBtn 
            toFocus='--reviewAndSubmitColor'
            nextOption='--reviewAndSubmitDisplay'
            currentOption='--commentsDisplay'
            unfocus='--commentsColor'
          />
        </div>
        <div className='reviewAndSubmitWrapper' id='aptOptionWrapper'>
          <BackBtn
            toFocus='--commentsColor'
            previousOption='--commentsDisplay' 
            currentOption='--reviewAndSubmitDisplay'
            unfocus='--reviewAndSubmitColor'
          />
          <ReviewAndSubmit/>
          <NextBtn
            toFocus='--stringTypeColor'
            nextOption='--stringTypeDisplay'
            currentOption='--reviewAndSubmitDisplay'
            unfocus='--reviewAndSubmitColor'
          />
        </div>
      </div>

    </div>
  )
}

export default Home