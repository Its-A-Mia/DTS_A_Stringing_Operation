import React from 'react'
import MakeAppointmentBtn from './MakeAppointmentBtn'

const Home = () => {
  return (
    <div className='home'>
      <p className='homeInfoText'>
        Denver Tennis Stringing is proud to assist our local tennis players in restringing their rackets. 
        We offer same-day stringing with a variety of string options available.
        <MakeAppointmentBtn /> 
      </p>
               
    </div>
  )
}

export default Home