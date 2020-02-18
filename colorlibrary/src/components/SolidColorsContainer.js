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
                    this.state.colors.map((color, index)=>{
                        return(
                        <SolidColors copyToClipboard={this.props.copyToClipboard} color={color}  key={`color-solid-box-${index}`}/>
                        )
                    })
                }
          </div>
        );
    }
};

  export default ColorPalettesContainer;