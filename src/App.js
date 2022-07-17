import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import MenuBanner from './components/MenuBanner';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Denver Tennis Stringing</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content='width=device-width, intial-scale=1.0'></meta>
      </Helmet>
      <Home/>
      <MenuBanner/>
    </div>
  );
}

export default App;
