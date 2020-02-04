import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 4% auto;
`;

const SignUp = props => {
  const { user, setUser, setCurrentUser } = props;
  const [unError, setUnError] = useState("");
  const [passError, setPassError] = useState("");
  const [emError, setEmError] = useState("");
  const [currentVal, setCurrentVal] = useState({
    username: "",
    email: "",
    password: ""
  });
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const history = useHistory();

  const handleChange = e => {
    setCurrentVal({ ...currentVal, [e.target.name]: e.target.value });
    console.log(currentVal);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (currentVal.username.length < 5) {
      setUnError("username must be longer than 5 characters");
    } else {
      setUnError("");
    }
    if (currentVal.password.length < 5) {
      setPassError("password must be longer than 5 characters");
    } else {
      setPassError("");
    }
    if (regex.test(currentVal.email) === false) {
      setEmError("please enter a valid email");
    } else {
      setEmError("");
    }
    // if (currentVal.password.length < 5 && currentVal.username.length < 5) {
    //   setErrorMessage(
    //     "both username and password must be longer than 5 characters"
    //   );
    // }
    if (
      currentVal.username.length >= 5 &&
      currentVal.password.length >= 5 &&
      regex.test(currentVal.email)
    ) {
      setCurrentUser(currentVal.username);
      console.log("from submit", currentVal.username);
      setUser([...user, currentVal]);

      setCurrentVal({
        username: "",
        email: "",
        password: ""
      });

      history.push("/dashboard");
    }
  };

  //   import { useHistory } from "react-router-dom";

  // function HomeButton() {
  //   const history = useHistory();

  //   function handleClick() {
  //     history.push("/home");
  //   }

  //   return (
  //     <button type="button" onClick={handleClick}>
  //       Go home
  //     </button>
  //   );
  // }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={currentVal.username}
        />

        <input
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={currentVal.email}
        />

        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={currentVal.password}
        />
        <button>Sign Up</button>
      </Form>
      <div>
        <p>{unError}</p>
        <p>{emError}</p>
        <p>{passError}</p>
      </div>
    </div>
  );
};

export default SignUp;

