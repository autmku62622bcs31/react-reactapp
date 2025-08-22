import { useState } from "react";
function Counting(){
    var[count,setcount]=useState(0);
    return(
        <div>
            <h1>Counting</h1>
            <p>Count: {count}</p>
            <button onClick={()=>setcount((prev)=>prev +1)}>+</button>
            <button onClick={()=>setcount((prev)=>prev -1)}>-</button>
            <button onClick={()=>setcount((0))}>Reset</button>
        </div>
    )
}
export default Counting;