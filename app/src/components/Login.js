import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import styled from 'styled-components'

const Login = props => {
  // const { user } = props;
  const history = useHistory();
  const [currentVal, setCurrentVal] = useState({
    username: "",
    password: ""
  });
  const [message, setMessage] = useState("");



  const handleChange = e => {
    setCurrentVal({ ...currentVal, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(currentVal);
    // axiosWithAuth().post('https://auth-friends-backend.herokuapp.com/api/login', currentVal)
    axiosWithAuth().post('https://song-suggester-a.herokuapp.com/api/auth/login', currentVal)

      .then(res=>{
        localStorage.setItem('token', res.data.payload);
        history.push('/dashboard');
      })
      .catch(err=>console.log(err))
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input name="username" placeholder="username" onChange={handleChange} autoComplete="off"/>
        <Input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          autoComplete="off"
        />
        <Button>Login</Button>
      </Form>
      {/* <div style={{color: 'white'}}>Message: {message}</div> */}
    </div>
  );
};

export default Login;

const Input = styled.input`
    background: none;
    color: white;
    border: 3px solid white;
    padding: 1%;
    border-radius: 35px;
    width: 20%;
    margin: .5% 0;
    font-size: 1.2rem;
    outline: none;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
    border: 1px solid white;
    width: 5%;
    background: none;
    margin: 2% auto;
    padding: .75% 0;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    &:hover{
        background: white;
        color: #0E0B20;
        border: 1px solid #0E0B20;
    }
`;
