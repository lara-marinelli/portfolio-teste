import Intro from './components/Intro';
import About from './components/About';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <Clock/>
      <Intro nome="Lara"/>
      <About/>

    </div>
  );
}

export default App;