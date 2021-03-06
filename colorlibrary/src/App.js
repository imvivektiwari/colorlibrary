import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import ColorPalettesContainer from './components/ColorPalettesContainer';
import SolidColorsContainer from './components/SolidColorsContainer';
import './App.css';
toast.configure({
  autoClose: 2000,
  draggable: false,
});

class App extends Component{

  constructor(props){
    super(props);
  };
  
 copyToClipboard = (colorCode)=>{

  let copyText = document.getElementById("color-code-text");
  copyText.value=colorCode;
  copyText.select();
  document.execCommand("copy");
  toast(`Copied: ${colorCode}`);
 };

  render(){
    return (
      <div className="App">
        <input id="color-code-text" type="text" style={{position:"absolute", top:"-50px"}}/> {/* :)) */}
      
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact render={()=> <ColorPalettesContainer  copyToClipboard={this.copyToClipboard} />} />
            <Route path="/colorpalettes" exact render={()=> <ColorPalettesContainer copyToClipboard={this.copyToClipboard} />}/>
            <Route path="/solidcolors" exact render={()=> <SolidColorsContainer copyToClipboard={this.copyToClipboard} />}/>
          </Switch>
        </Router>
      </div>
    );
  };
}

export default App;
