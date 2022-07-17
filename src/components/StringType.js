import React from 'react'

const StringType = () => {
  return (
    <div className='stringType' id='aptOptionsInner'>
      <fieldset>
              <label>Mains: </label>
              <select name='mainsStringType' id='mainsStringType'>
                <option value='RPMBlast'>RPM Blast, 17 ga.</option>
                <option value='HyperG'>Hyper G, 16 ga.</option>
                <option value='Provide String'>Provide Your Own</option>
              </select>
                <br></br>
              <label>Crosses: </label>
              <select name='crossesStringType' id='crossesStringType'>
                <option value='RPMBlast'>RPM Blast, 17 ga.</option>
                <option value='HyperG'>Hyper G, 16 ga.</option>
                <option value='Provide String'>Provide Your Own</option>
              </select>
          </fieldset>
    </div>
  )
}

export default StringType