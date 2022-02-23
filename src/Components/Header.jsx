import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Main from './Main';
import Managemant from './Managemant';
const Header = () => {
    const[getactive,setactive]=useState(false);
    return (<Fragment>
    <div className="container">
        <div className={`navigation ${getactive? 'active':''}`} >
            <ul>
                <li>
                    <a href="#">
                        <span className="icon"><i className=" fab fa-apple"></i></span>
                        <span className="title">Brand Name</span>
                    </a>
                </li>
                <li>
                    <Link to="/">
                        <span className="icon"><i className="fas fa-home"></i></span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className=" fas fa-user"></i></span>
                        <span className="title">Customer</span>
                    </a>
                </li>
                <li>
                    <Link to="/Managemant">
                        <span className="icon"><i className=" fas fa-comments"></i></span>
                        <span className="title">Message</span>
                    </Link>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className=" fas fa-question"></i></span>
                        <span className="title">Help</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className=" fas fa-cog"></i></span>
                        <span className="title">Setting</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className=" fas fa-lock"></i></span>
                        <span className="title">Password</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className=" fas fa-sign-out-alt"></i></span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className={`header ${getactive? 'active':''}`}>
            <div className="toggle-box">
                 <div className="toggle" onClick={()=>setactive(!getactive)}>
                <i className="fas fa-align-justify"></i>
            </div>
            </div>
            <div>
                <Routes>
                  <Route path='/' element={<Main/>}/>
                  <Route path='/Managemant' element={<Managemant/>}  />
                </Routes>

           
            </div>
           
        </div>
    </div>
    </Fragment>);
}
 
export default Header;