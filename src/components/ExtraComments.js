import React from 'react'

const ExtraComments = () => {
  return (
    <div className='comments' id='aptOptionsInner'>
       <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <h3 style={{flexGrow: '0.2'}}>Special Request</h3>
        <span style={{color: 'darkgray'}}>6/6</span>
      </div>

        <textarea
          cols='19.5'
          rows='4'
          maxLength='200'
          style={{resize: 'none'}}
        >
        </textarea>
    </div>
  )
}

export default ExtraComments