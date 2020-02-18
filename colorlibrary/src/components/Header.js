import React from 'react';
import {Link} from 'react-router-dom';
const Header = (props)=>{
    let bgcolor = props.color;
  
    return(
      <nav id="header-nav">
         <h3 id="logo-text">ColorLibrery</h3>
         <div id="menu-container">
            <ul>
              <Link to="/colorpalettes"><li>Color Palettes</li></Link>
              <Link to="/solidcolors"><li>Solid Colors</li></Link>
            </ul>
         </div>
      </nav>
    );
  };

  export default Header;