import React, { Component } from 'react';

const Person = ({firstname,lastname,age}) => {
    return (  
        <div>
            <h3>{`${firstname}`}</h3>
            <h3>{`${lastname}`}</h3>
            <h3>{`${age}`}</h3>
        </div>
    );
}
 
export default Person;
  