import React from 'react'

const InfoBtn = (props) => {
  return (
    <button className='infoBtn' onClick={() => props.setNewPageDestination('info')}>
      Info
      </button>
  )
}

export default InfoBtn