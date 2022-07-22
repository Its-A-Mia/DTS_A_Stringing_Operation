import React from 'react'

const Tension = () => {
  return (
    <div className='tension' id='aptOptionsInner'>
      <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <h3 style={{flexGrow: '0.2'}}>Tension</h3>
        <span style={{color: 'darkgray'}}>2/6</span>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-around', flexGrow:'1'}}>
        <div>
          <label>Mains</label>
          <br></br>
          <input 
            type='number' 
            id='mainsTension' 
            name='mainsTension' 
            size='3'
            placeholder='55' 
            min='10' max='70' 
            required>
          </input>
          <select name='lbsOrKilos' id='lbsOrKilos'>
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
            placeholder='55' 
            min='10' 
            max='70'
            required></input>
          <select name='lbsOrKilos' id='lbsOrKilos'>
            <option value='lbs'>lbs</option>
            <option value='kgs'>kgs</option>
          </select> 
        </div>
      </div>
    </div>
  )
}

export default Tension