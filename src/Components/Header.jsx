import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
const Header = () => {
    const[getactive,setactive]=useState(false);

    return (<Fragment>
        <div className={`menu-btn ${getactive? 'active':''}`} onClick={()=>setactive(!getactive)}><span></span>
        <span></span>
       <span></span>
        </div>
        <div className={`menu ${getactive? 'active':''}`} >
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">about me</a></li>
              <li><a href="#">gallery</a></li>
              <li><a href="#">contact</a></li>
          </ul>
        </div>
    </Fragment>);
}
 
export default Header;