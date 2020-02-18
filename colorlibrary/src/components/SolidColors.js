import React from 'react';

const SolidColor = (props)=>{

    let bgcolor = props.color;
    return(
      <div className="color-box-container">
         <div title={bgcolor} className="color-box solid-colors" style={{background:bgcolor}}></div>
      </div>
    );
  };

  export default SolidColor;