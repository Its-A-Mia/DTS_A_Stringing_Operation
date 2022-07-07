import React from 'react'

const MakeAppointmentBtn = (props) => {

  return (
    <button className='makeAppointmentBtn' onClick={() => props.setNewPageDestination('makeAppointment')}>
      MAKE APPOINTMENT
      </button>
  )
}

export default MakeAppointmentBtn