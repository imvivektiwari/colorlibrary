import React, { Component } from 'react';
import ColorPalettes from './ColorPalettes';
import {colorPalettets} from '../store/store';

class ColorPalettesContainer extends Component{
   
    constructor(props){
        super(props);
        this.state={
          colors: colorPalettets
        };
      }
      
    render(){
      
        return(
            <div id="color-palettes-container">
                {
                    this.state.colors.map((color,index)=>{
                        return(
                        <ColorPalettes copyToClipboard={this.props.copyToClipboard} color={color} key={`color-palettes-box-${index}`}/>
                        )
                    })
                }
          </div>
        );
    }
    
};

  export default ColorPalettesContainer;