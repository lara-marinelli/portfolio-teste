import Intro from './components/Intro';
import About from './components/About';
import Clock from './components/Clock';
import Toggle from './components/Toggle';


function App() {
  return (
    <div className="App">
      <Clock/>
      <Intro nome="Lara"/>
      <About/>
      <Toggle/>

    </div>
  );
}

export default App;