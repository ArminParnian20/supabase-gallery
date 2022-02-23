import React, { useState } from 'react';
import './App.css';
import './fontawesome/css/all.css'
import Header from './Components/Header';
import simpleContext from './context';

const App = () => {
    const[getactive,setactive]=useState(false);
    
    return ( 
        <simpleContext.Provider
        value={{getactive:getactive,setactive:setactive}}>
            <Header/>

        </simpleContext.Provider>

     );
}
export default App;