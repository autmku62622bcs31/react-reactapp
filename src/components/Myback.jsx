import { useState,useEffect } from "react";
import axios from "axios";

function Myback(){
    const [mybackdata,setbackdata] = useState([]);

    const getbackdata = async () =>{
        const Response = await axios.get("http://localhost:1000/api/view");
        console.log(Response.data.data);
        setbackdata(Response.data.data);
    }
    useEffect(()=>{
        getbackdata();
    },[]);
    return(
        <div>
            {mybackdata.map((results,index)=>{
                return(
                    <div key={index}>
                        <h1>{results.name}</h1>
                        <h1>{results.age}</h1>
                        <h1>{results.gender}</h1>
                    </div>
                )
            })}
        </div>
    )

}

export default Myback;