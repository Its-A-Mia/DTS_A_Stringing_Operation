import React from 'react'

const Tension = (props) => {

  const handleMainsTensionInput = e => {
    props.setMainsTensionInput(e.target.value)
  }

  const handleMainsUnitInput = e => {
    props.setMainsUnit(e.target.value)
  }

  const handleCrossesTensionInput = e => {
    props.setCrossesTensionInput(e.target.value)
  }

  const handleCrossesUnitInput = e => {
    props.setCrossesUnit(e.target.value)
  }

  return (
    <div className='tension' id='aptOptionsInner'>
      <div id='optionHeader'>
        <h3>Tension</h3>
        <span style={{color: 'darkgray'}}>2/6</span>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-around', flexGrow:'1', alignItems: 'center'}}>
        <div>
          <label>Mains</label>
          <br></br>
          <input 
            type='number' 
            id='mainsTension' 
            name='mainsTension' 
            size='3'
            placeholder='10-70' 
            min='10' max='70'
            onChange={handleMainsTensionInput} 
            required>
          </input>
          <select name='lbsOrKilos' id='lbsOrKilos' onChange={handleMainsUnitInput}>
            <option value='lbs'>lbs</option>
            <option value='kgs'>kgs</option>
          </select>          
        </div>

        <div>
          <label>Crosses</label>
          <br></br>
          <input 
            type='number' 
            id='crossesTension' 
            name='crossesTension' 
            size='3' 
            maxLength='2' 
            placeholder='10-70' 
            min='10' 
            max='70'
            onChange={handleCrossesTensionInput} 
            required>
          </input>
          <select name='lbsOrKilos' id='lbsOrKilos' onChange={handleCrossesUnitInput}>
            <option value='lbs'>lbs</option>
            <option value='kgs'>kgs</option>
          </select> 
        </div>
      </div>
      <div style={{alignSelf: 'center', opacity: '65%', fontSize: '0.7vw', flexGrow:'1'}}>Our machines operate between 10 and 70 lbs/kgs</div>
    </div>
  )
}

export default Tension