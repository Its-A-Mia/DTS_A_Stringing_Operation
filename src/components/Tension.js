import React from 'react'

const Tension = () => {
  return (
    <div className='tension' id='aptOptionsInner'>
       <fieldset>
              <label>Mains: </label>
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
                <br></br>
              <label>Crosses: </label>
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
                <br></br>
          </fieldset>
    </div>
  )
}

export default Tension