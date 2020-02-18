import React, { Component } from 'react';
import ColorPalettes from './ColorPalettes';

class ColorPalettesContainer extends Component{
   
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
        return(
            <div id="color-palettes-container">
                {
                    this.state.colors.map((color)=>{
                        return(
                        <ColorPalettes color={color}/>
                        )
                    })
                }
          </div>
        );
    }
    
};

  export default ColorPalettesContainer;