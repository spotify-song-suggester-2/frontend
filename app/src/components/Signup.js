import React from "react";
import axios from 'axios';
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import styled from "styled-components";

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

function SignUp({errors, touched, isSubmitting, status}) {
  return (
    <div>
      <StyledForm>
        <StyledField type="text" name="username" placeholder="username" />
        <StyledField type="password" name="password" placeholder="password" />
        <Button disabled={isSubmitting}>Sign Up</Button>
      </StyledForm>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        {touched.password && errors.password && <p>{errors.password}</p>}
        {status === 500 && <p>Username already taken</p>}
      </div>
    </div>
  );
}

const FormikSignUp = withFormik({
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
    axios
      .post("https://song-suggester-a.herokuapp.com/api/auth/register", values)
      .then(res => {
        console.log(res);
        resetForm();
        setSubmitting(false);
        history.push("/");
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
        setStatus(err.response.status);
      });
  }
})(SignUp);

export default FormikSignUp;
