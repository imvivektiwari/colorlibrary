import React from 'react';

const SolidColor = (props)=>{

    let bgcolor = props.color;
    const copyToClipboard = (e)=>{
      let color = e.target.getAttribute("data-color");
      props.copyToClipboard(color);
  };
    return(
      <div className="color-box-container">
         <div data-color={bgcolor} title={bgcolor} className="color-box solid-colors" 
         style={{background:bgcolor}} onClick={copyToClipboard}></div>
      </div>
    );
  };

  export default SolidColor;