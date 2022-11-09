import React from 'react'

const StartBtn = (props) => {   
  return (
    <div className='startBtnWrapper' onClick={e => props.handleStartBtnClick()}>
        <button className='startBtn'>START</button>
    </div>
  )
}

export default StartBtn