import React, { Component } from 'react';
import SolidColors from './SolidColors';
import {solidColors} from '../store/store'

class ColorPalettesContainer extends Component{
   
    constructor(props){
        super(props);
        this.state={
          colors: solidColors
        };
      }
      
    render(){
        return(
            <div id="color-palettes-container">
                {
                    this.state.colors.map((color)=>{
                        return(
                        <SolidColors color={color}/>
                        )
                    })
                }
          </div>
        );
    }
};

  export default ColorPalettesContainer;