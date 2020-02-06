import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'
import styled from 'styled-components'
import FadeIn from 'react-fade-in';
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";

const StyledField = styled(Field)`
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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: 1px solid white;
  background: none;
  margin: 5px auto;
  padding: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover{
    background: white;
    color: #0E0B20;
    border: 1px solid #0E0B20;
  }
`;


function Login({status}) {
  const [genre, setGenre] = useState("");
  const [isNew, setIsNew] = useState(false);

  function getAGenre() {
    axios.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
      .then(res=>{
        setGenre(res.data);
        setIsNew(true);
      })
      .catch(err=>console.log(err))
  }

  return (
    <div>
      <StyledForm>
        <StyledField type="text" name="username" placeholder="username" />
        <StyledField type="password" name="password" placeholder="password" />
        <Button>Login</Button>
      </StyledForm>
      {status === 400 && <p>Invalid username or password</p>}
      <div>
        <h3 style={{marginTop: '4%'}}>Need a music suggestion?</h3>
        <Button onClick={() => {getAGenre(); setIsNew(false);}}>get genre</Button>
        {isNew === true && <FadeIn><p style={{color: 'rgba(239,1,159,1)'}}>{genre}</p></FadeIn>}
      </div>
    </div>
  );
}

const FormikLogin = withFormik({
  mapPropsToValues({username, password}) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(5, "Username must be 5 characters or longer")
      .required("Username is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, {resetForm, setSubmitting, setStatus, props: {history}}) {
    axiosWithAuth().post('https://song-suggester-a.herokuapp.com/api/auth/login', values)
      .then(res => {
        console.log(res);
        resetForm();
        setSubmitting(false);
        localStorage.setItem('token', res.data.payload);
        history.push('/dashboard');
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
        console.log(err.response.status);
        setStatus(err.response.status);
      });
  }
})(Login);

export default FormikLogin;
