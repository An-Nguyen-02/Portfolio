import react from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation.js'
import Header from '../components/Header/Header';
class App extends react.Component{
  render(){
    return (
    <div className="App">
      <Navigation className="Navigation" />
      <Header />
    </div>
  );}
}

export default App;
