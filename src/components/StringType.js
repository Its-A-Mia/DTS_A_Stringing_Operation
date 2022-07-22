import React from 'react'

const StringType = () => {
  return (
    <div className='stringType' id='aptOptionsInner'>
      <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <h3 style={{flexGrow: '0.2'}}>String Type</h3>
        <span style={{color: 'darkgray'}}>1/6</span>
      </div>
      
      <div style={{display: 'flex', justifyContent: 'space-around', flexGrow:'1'}}>
        <div>
          <label>Mains</label>
          <br></br>
          <select name='mainsStringType' id='mainsStringType'>
            <option value='RPMBlast'>RPM Blast, 17 ga.</option>
            <option value='HyperG'>Hyper G, 16 ga.</option>
            <option value='Provide String'>Provide Your Own</option>
          </select>
        </div>

        <div>
          <label>Crosses</label>
          <br></br>
          <select name='crossesStringType' id='crossesStringType'>
            <option value='RPMBlast'>RPM Blast, 17 ga.</option>
            <option value='HyperG'>Hyper G, 16 ga.</option>
            <option value='Provide String'>Provide Your Own</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default StringType