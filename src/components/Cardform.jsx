// import axios from "axios";
// import React, {useState} from "react";

// const Cardform=()=>{
//     const [formData,setFormData]=useState({
//         name:"",
//         phone:"",
//         email:""
//     });
// const [message, setMessage] = useState("");

//     const handleChange=(e)=>{
//         setFormData({...formData, [e.target.name]: e.target.value});
//     };
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:2000/api/add",formData);
//             setMessage("Registration successfull");
//             console.log(res.data);
//         } catch (error) {
//             setMessage("Registration failed");
//             console.log(error);
//         }
//     };
//     return (
//         <form className="container"
//         onSubmit={handleSubmit}
//         >
//         <input name="username"
//         placeholder="Username"
//         onChange={handleChange}
//         value={formData.name} 
//         /> <br />
//         <input name="email"
//         placeholder="Email"
//         onChange={handleChange}
//         value={formData.phone} 
//         /> <br />
//         <input name="password"
//         placeholder="Password"
//         onChange={handleChange}
//         value={formData.email} 
//         /> <br />
//         <input type="Submit" />
//         </form>
//     )
// }

// export default Cardform;

import { useState } from "react";
import axios from "axios";

const Cardform=()=>{
    const [form, setform]=useState({
        name:"",
        phone:"",
        email:""
    });
    const [message,setMessage]=useState("");

    const handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value});
    };
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/add",form);
            setMessage("Registration successfull");
            console.log(res.data);
        } catch (error) {
            setMessage("Registration Failed")
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input name="name" placeholder="Name" onChange={handleChange} value={form.name}/><br />
            <label htmlFor="phone">Phone:</label>
            <input name="phone" placeholder="phone" onChange={handleChange} value={form.phone}/> <br />
            <label htmlFor="email">Email:</label>
            <input name="email" placeholder="email" onChange={handleChange} value={form.email}/><br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Cardform;