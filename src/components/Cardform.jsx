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
import { useNavigate } from "react-router-dom";

function Form() {
  const [formdatas, setFormdatas] = useState({
    name: "",
    password: "",
    phone: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormdatas((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/add", formdatas);
      setMessage("Registration Successful ✅");
      console.log(res.data);

      // clear form
      setFormdatas({
        name: "",
        phone: "",
        email: "",
      });

      // navigate after 1 second
      setTimeout(() => {
        navigate("/themealsdb");
      }, 1000);
    } catch (error) {
      setMessage("Registration Failed ❌");
      console.log(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}
    >
      <form
        onSubmit={handelSubmit}
        className="p-4 rounded-4"
        style={{
          background: "#fff",
          width: "400px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h3 className="text-center mb-3">Add User</h3>

        {/* ✅ Message inside the box */}
        {message && (
          <div
            className={`alert ${
              message.includes("Successful") ? "alert-success" : "alert-danger"
            } text-center py-2`}
          >
            {message}
          </div>
        )}

        <label>Name</label>
        <input
          name="name"
          placeholder="Enter name"
          className="form-control mb-3"
          onChange={handelChange}
          value={formdatas.name}
        />

        <label>Phone</label>
        <input
          name="phone"
          maxLength={10}
          placeholder="Enter phone"
          className="form-control mb-3"
          onChange={handelChange}
          value={formdatas.phone}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          className="form-control mb-3"
          onChange={handelChange}
          value={formdatas.email}
        />

        <button className="btn btn-success w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;