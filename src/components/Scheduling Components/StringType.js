import React from 'react'
import { useState } from 'react'

const StringType = (props) => {

  const handleMainsStringType = e => {
    props.setMainsStringType(e.target.value)
  }

  const handleCrossesStringType = e => {
    props.setCrossesStringType(e.target.value)
  }

  return (
    <div className='stringType' id='aptOptionsInner'>
      <div id='optionHeader'>
        <h3 style={{flexGrow: '0.2'}}>String Type</h3>
        <span style={{color: 'darkgray'}}>1/6</span>
      </div>
      
      <div style={{display: 'flex', justifyContent: 'space-around', flexGrow:'1', alignItems: 'center', marginBottom:'3%'}}>
        <div>
          <label>Mains</label>
          <br></br>
          <select name='mainsStringType' id='mainsStringType' onChange={handleMainsStringType}>
            <option value='RPMBlast, 17 ga.'>RPM Blast, 17 ga.</option>
            <option value='HyperG, 16 ga.'>Hyper G, 16 ga.</option>
            <option value='Provide String'>Provide Your Own</option>
          </select>
        </div>

        <div>
          <label>Crosses</label>
          <br></br>
          <select name='crossesStringType' id='crossesStringType' onChange={handleCrossesStringType}>
            <option value='RPMBlast, 17 ga.'>RPM Blast, 17 ga.</option>
            <option value='HyperG, 16 ga.'>Hyper G, 16 ga.</option>
            <option value='Provide String'>Provide Your Own</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default StringType