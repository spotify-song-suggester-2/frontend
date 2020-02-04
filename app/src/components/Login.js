import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Login = props => {
  // const { user } = props;
  const history = useHistory();
  const [currentVal, setCurrentVal] = useState({
    username: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  // useEffect(()=>{
  //   axios.get()
  // }, [])

  const handleChange = e => {
    setCurrentVal({ ...currentVal, [e.target.name]: e.target.value });
    // console.log(currentVal);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(currentVal);
    axios.post('http://localhost:5000/api/login', currentVal)
      .then(res=>{
        localStorage.setItem('token', res.data.payload);
        history.push('/dashboard');
      })
      .catch(err=>console.log(err))
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="username" onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
      {/* <div style={{color: 'white'}}>Message: {message}</div> */}
    </div>
  );
};

export default Login;
