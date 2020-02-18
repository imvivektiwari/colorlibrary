import React from 'react';

const ColorPalettes = (props)=>{
    let bgcolor = props.color;
  
    return(
      <div className="color-box-container">
         {
           bgcolor.map((color,index)=>{
            return(
              <div key={`palettes-color-${index}`} title={color} className={`color-box color-box-${index+1}`} style={{background:color}}></div>
            )
           })
         }
      </div>
    );
  };

  export default ColorPalettes;