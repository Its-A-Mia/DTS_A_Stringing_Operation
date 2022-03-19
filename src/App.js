import './App.css';
import AboutAndContact from './components/AboutAndContact';
import Home from './components/Home';
import LogoAndMenu from './components/LogoAndMenu';
import MakeAppointment from './components/MakeAppointment';

function App() {
  return (
    <div className="App">
      <LogoAndMenu />
      <Home />
      <MakeAppointment />
      <AboutAndContact />
    </div>
  );
}

export default App;
