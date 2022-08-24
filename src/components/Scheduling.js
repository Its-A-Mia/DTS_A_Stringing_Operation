import React from 'react'

const Scheduling = (props) => {

  const handleDropOffInput = e => {
    props.setDropOffInput(e.target.value)
  }

  const handlePickUpInput = e => {
    props.setPickUpInput(e.target.value)
  }

  //Creates minDate for Drop-off
  let minDate = new Date()
  let day = minDate.getDate()
  let minMonth = minDate.getMonth() + 1
  let maxMonth = minDate.getMonth() + 2
  let year = minDate.getFullYear()
  if (day < 10) {
    day = '0' + day
  } 
  if (minMonth || maxMonth < 10) {
    minMonth = '0' + minMonth
    maxMonth = '0' + maxMonth
  }
  minDate = year + '-' + minMonth + '-' + day
  let maxDate = `${year} - ${maxMonth} - 28`

  return (
    <div className='scheduling' id='aptOptionsInner'>
      <div id='optionHeader'>
        <h3>Scheduling</h3>
        <span style={{color: 'darkgray'}}>5/6</span>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', flexGrow: '1'}}>
        <div>
          <label>Date of Drop-off: </label>
          <input 
            type='date' 
            min={`${minDate}`} 
            max={`${maxDate}`} 
            onChange={handleDropOffInput}
            required>
          </input>
        </div>

        <div>
          <label>Date of Pick-up: </label>
          <input 
            type='date' 
            min={`${minDate}`} 
            onChange={handlePickUpInput}
            required>           
          </input>
        </div>
      </div>
    </div>
  )
}

export default Scheduling