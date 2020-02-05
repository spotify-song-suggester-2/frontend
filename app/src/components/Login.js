import React, {useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'
import styled from 'styled-components'
import FadeIn from 'react-fade-in';



const Login = props => {
  // const { user } = props;
  const history = useHistory();
  const [currentVal, setCurrentVal] = useState({
    username: "",
    password: ""
  });
  const [genre, setGenre] = useState("");
  const [isNew, setIsNew] = useState(false);




  const getAGenre = ()=>{
    axios.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
      .then(res=>{
        setGenre(res.data)
        setIsNew(true)
      })
      .catch(err=>console.log(err))
  }


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
      <div>
        <h3 style={{marginTop: '4%'}}>Need a music suggestion?</h3>
        <Button onClick={()=>{
          getAGenre();
          setIsNew(false)
        }} style={{width: '8%'}}>get genre</Button>
        {isNew === true && <FadeIn>
          <p style={{color: 'rgba(239,1,159,1)'}}>{genre}</p>
        </FadeIn>}
      </div>
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
    width: 8%;
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
