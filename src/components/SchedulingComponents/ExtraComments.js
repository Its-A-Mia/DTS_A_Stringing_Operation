import React from 'react'

const ExtraComments = (props) => {

  const handleCommentsInput = e => {
    props.setCommentsInput(e.target.value)
  }

  return (
    <div className='comments' id='aptOptionsInner'>
       <div id='optionHeader'>
        <h3>Special Request</h3>
        <span style={{color: 'darkgray'}}>6/6</span>
      </div>

        <textarea
          cols='19.5'
          rows='5'
          maxLength='200'
          onChange={handleCommentsInput}
          style={{resize: 'none', fontSize: '0.83vw'}}
        >
        </textarea>
    </div>
  )
}

export default ExtraComments