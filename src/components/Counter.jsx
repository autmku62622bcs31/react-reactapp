import React from 'react';
import { useState } from 'react';

function Counter(){
    var[Count,setcount]= useState(0);
    return(
        <div>
            <h1>Use State</h1>
            <p>Count.{Count}</p>
            <button onclick={()=> setcount((prev)=> prev + 1)}>+</button>
            <button onClick={()=> setcount((prev)=> prev - 1)}>-</button>
            <button onClick={()=> setcount(0)}>Reset</button>
        </div>
    )
}

export default Counter;