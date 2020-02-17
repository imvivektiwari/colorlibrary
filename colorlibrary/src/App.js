import React,{Component} from 'react';
import Header from './components/Header';
import ColorPalettes from './components/ColorPalettes';

import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      colors:[
        [
          "#FC85AE","#9E579D","#574B90","#303A52"
        ],
        [
          "#FC85AE","#9E579D","#574B90","#303A52"
        ],
        [
          "#FC85AE","#9E579D","#574B90","#303A52"
        ],
        [
          "#FC85AE","#9E579D","#574B90","#303A52"
        ],
        [
          "#FC85AE","#9E579D","#574B90","#303A52"
        ],
        [
          "#FC85AE","#9E579D","#574B90","#303A52"
        ],
        [
          "#FC85AE","#9E579D","#574B90","#303A52"
        ],
      ]
    };
  }

  render(){
    return (
      <div className="App">

        <Header />

        <div id="color-palettes-container">
          {
            this.state.colors.map((color)=>{
              return(
                <ColorPalettes color={color}/>
              )
            })
          }
        </div>
      </div>
    );
  };
}

export default App;
