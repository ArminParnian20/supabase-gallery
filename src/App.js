import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
const App = () => {
    return ( 
        <Fragment>
            <div className='cont'>
            <Header/>
            <About/>
            </div>
        </Fragment>
     );
}
export default App;