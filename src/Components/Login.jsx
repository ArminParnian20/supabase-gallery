import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { toast, Toaster } from 'react-hot-toast';
 const Login = () => {
     const [password,setpassword]=useState("");
     const handelLock=()=>{
        if(password==12345){
            toast.success('The password is correct');
            setTimeout(()=>{
                window.location.href='/Managemant';

            },1000)}
            else{
                toast.error("Wrong password")
            }
          
        
     }
     return ( 
         <Fragment>
        <div className='manage-form'>
        <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
           <div>
               <i className='fas fa-lock t'></i>
               <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
           </div>
           <div>
               <i  className='fas fa-unlock t'></i>
               <button onClick={handelLock} >send</button>
           </div>
          </div>
         </Fragment>
      );
 }
  
 export default Login;