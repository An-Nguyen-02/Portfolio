import react from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation.js'
import Home from '../components/Home/Home';
import About from '../components/About/About';
class App extends react.Component{
  render(){
    return (
    <div className="App">
      <Navigation className="Navigation" />
      <Home />
      <About />
    </div>
  );}
}

export default App;
