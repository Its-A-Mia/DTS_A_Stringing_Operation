import React from 'react';
import Info from './components/Info';
import Home from './components/Home';
import MenuBanner from './components/MenuBanner';
import MakeAppointment from './components/MakeAppointment';
import { useState, useEffect } from 'react';

function App() {

  const [newPageDestination, setNewPageDestination] = useState(null)

  useEffect(() => {
    const home = document.getElementById('home')
    const makeAppointment = document.getElementById('makeAppointment')
    const info = document.getElementById('infoWrapper')
      if (newPageDestination === 'home') {
        home.style.zIndex = 2;
        makeAppointment.style.zIndex = 1;
        info.style.zIndex = 1;
      } if (newPageDestination === 'makeAppointment') {
        home.style.zIndex = 1;
        makeAppointment.style.zIndex = 2;
        info.style.zIndex = 1;
      } if (newPageDestination === 'info') {
        home.style.zIndex = 1;
        makeAppointment.style.zIndex = 1;
        info.style.zIndex = 2;
      } 
    })

  return (
    <div className="App">
      <MenuBanner setNewPageDestination={setNewPageDestination}/>
      <Home setNewPageDestination={setNewPageDestination}/>
      <div className='homePageLoadingBackground'></div>
      <MakeAppointment />
      <Info />
    </div>
  );
}

export default App;
