import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const [user,setUser] = useState({
    email : "",
    password: ""
  });

  const dataChange = (e)=>{
    const {name,value} = e.target;
    setUser({
      ...user,
      [name]  :value
    })
  };
  const dataSubmit = async(e)=>{
    const {email , password} = user;
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method:"POST",
      headers:{
        "Content-Type"  :"application/json"
      },
      body: JSON.stringify({
          email,password
      })
    });
    const data = await res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Login Details")
    console.log("Invalid Login Details");
    }else{
      window.alert("successfull Login")
    console.log("successfull Login");

    navigate("/")
    }
  }

  return (
    <div className="paraent">
    <div className="container width">
      <h1 className="text-center my-3">Login Form</h1>
      <form className="form" method="POST" onSubmit={dataSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={user.email} onChange={dataChange} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={user.password} onChange={dataChange} name="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </div>
    </div>
  );
};

export default Login;
