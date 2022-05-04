import AboutAndContact from './components/AboutAndContact';
import Home from './components/Home';
import Logo from './components/Logo';
import MakeAppointment from './components/MakeAppointment';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Logo />
      <Menu />
      <Home />
      <MakeAppointment />
      <AboutAndContact />
    </div>
  );
}

export default App;
