import { useState , useEffect } from "react";

function Counter(){
    const [Count,setCount] = useState(0);
    const [Timer,setTimer] = useState(2.5);

useEffect (()=>{
    console.log("this is no dependency array")
    setTimeout(()=>{
        console.log("hello world")
    },1000);
},[Timer]);

return(
    <div>
        <p>{Count}</p>
        <p>{Timer}</p>
        <button onClick={()=>setCount((prev)=>prev+1)}>+</button>
        <button onClick={()=>setTimer((prev)=>prev-1)}>-</button>
    </div>
)
}
export default Counter;