import react from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation.js'
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio'
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';
class App extends react.Component{
  render(){
    return (
      <div className="App">
        <Navigation className="Navigation" />
        <Home />
        <About />
        <Portfolio />
        <Education />
        <Contact />        
      </div>
  );}
}

export default App;
