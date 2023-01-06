import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email:"",
    phone:"",
    password: "",
  })

  const inputChangeDtata =(e)=>{
    
    const {name , value} = e.target;
    setUser({
      ...user,
      [name] : value,
      
    })
    // console.log(`${user.name}, ${user.email}, ${user.password}`);
  }

const dataSubmit = async (e)=>{
  e.preventDefault();
  const {name,email,phone,password} = user;

  // const res = await fetch("http://localhost:5000/adduser",{
  //   method: "POST",
  //   headers : {
  //     "Content-Type"  : "application/json"
  //   },
  //   body:JSON.stringify({
  //     name,email,phone,password
  //   })
  // });
  // const data = await res.json();
  // if(data.status === 422 || !data){
  //   window.alert("Invalid registration")
  //   console.log("Invalid registration");
  // }else{
  //   window.alert("Successfull registration")
  //   console.log("Successfull registration");

  //   navigate("/login")
  // }

  const res = await fetch("http://localhost:5000/adduser",{
    method: "POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      name,email,phone,password
    })
  });
  const data = await res.json();
  if(data.status === 422 || !data){
    window.alert("Invalid registration")
    console.log("Invalid registration");
  }else{
    window.alert("Successfull registration")
      console.log("Successfull registration");
  
      navigate("/login")
  }
}


  return (
    <div className="paraent">
      <div className="container width">
        <h1 className="text-center my-3">Registration Form</h1>
        <form method="POST" onSubmit={dataSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User-Name
            </label>
            <input
              type="Text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              name="name"
              value={user.name}
              onChange={inputChangeDtata}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={user.email}
              onChange={inputChangeDtata}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone-Number
            </label>
            <input type="number" className="form-control" id="phone" name="phone"
             value={user.phone}
             onChange={inputChangeDtata}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputwqa1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={user.password}
              onChange={inputChangeDtata}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
