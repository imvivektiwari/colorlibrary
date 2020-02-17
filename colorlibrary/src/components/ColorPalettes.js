import React from 'react';

const ColorPalettes = (props)=>{
    let bgcolor = props.color;
  
    return(
      <div className="color-box-container">
         {
           bgcolor.map((color,index)=>{
            return(
              <div className={`color-box color-box-${index+1}`} style={{background:color}}></div>
            )
           })
         }
      </div>
    );
  };

  export default ColorPalettes;