import React from 'react';

const Header = (props)=>{
    let bgcolor = props.color;
  
    return(
      <nav id="header-nav">
         <h3 id="logo-text">ColorLibrery</h3>
         <div id="menu-container">
            <ul>
              <li>Color Palettes</li>
              <li>Solid Colors</li>
            </ul>
         </div>
      </nav>
    );
  };

  export default Header;