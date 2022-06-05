import React from 'react'

const MakeAppointmentBtn = (props) => {

  return (
    <button className='makeAppointmentBtn' onClick={() => props.setNewPageDestination('makeAppointment')}>
      Make Appointment
      </button>
  )
}

export default MakeAppointmentBtn