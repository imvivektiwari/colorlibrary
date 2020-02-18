import React from 'react';

const ColorPalettes = (props)=>{
    let bgcolor = props.color;
    
    const copyToClipboard = (e)=>{
        let color = e.target.getAttribute("data-color");
        props.copyToClipboard(color);
    };

    return(
      <div className="color-box-container">
         {
           bgcolor.map((color,index)=>{
            return(
              <div key={`palettes-color-${index}`} title={color} 
              className={`color-box color-box-${index+1}`} 
              style={{background:color}} data-color={color} onClick={copyToClipboard}></div>
            )
           })
         }
      </div>
    );
  };

  export default ColorPalettes;