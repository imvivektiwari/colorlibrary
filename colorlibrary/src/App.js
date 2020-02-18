import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import ColorPalettesContainer from './components/ColorPalettesContainer';
import SolidColorsContainer from './components/SolidColorsContainer';
import './App.css';

class App extends Component{

 
  render(){
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={ColorPalettesContainer}/>
            <Route path="/colorpalettes" exact component={ColorPalettesContainer}/>
            <Route path="/solidcolors" exact component={SolidColorsContainer}/>
          </Switch>
        </Router>
      </div>
    );
  };
}

export default App;
