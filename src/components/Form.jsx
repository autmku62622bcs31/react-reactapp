import React, { useState } from "react";

const Form=()=>{
    const [formdata,setformdata]=useState({
        username:"",
        password:"",
        email:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;

        setformdata((prev)=>({
            ...prev,
            [name]:value
        }));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Data",formdata)
    }
}
function Data(){
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="username" 
                placeholder="Username" 
                onChange={handleChange}
                value={formdata.username}
                /> <br />
                <input name="email"
                placeholder="Email"
        onChange={handleChange}
        value={formData.email} 
        /> <br />
        <input name="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password} 
        /> <br />
        <button type="Submit">Submit</button>
            </form>
        </div>
    )
}
export default Data;