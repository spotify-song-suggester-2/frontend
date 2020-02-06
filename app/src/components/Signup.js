// import React, { useState } from "react";
// import styled from "styled-components";
// import { useHistory } from "react-router-dom";
// import axios from 'axios'


// const SignUp = props => {
//   const { user, setUser, setCurrentUser } = props;
//   const [unError, setUnError] = useState("");
//   const [passError, setPassError] = useState("");
//   const [emError, setEmError] = useState("");
//   const [currentVal, setCurrentVal] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const history = useHistory();

//   const handleChange = e => {
//     setCurrentVal({ ...currentVal, [e.target.name]: e.target.value });
//     console.log(currentVal);
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     if (currentVal.username.length < 5) {
//       setUnError("username must be longer than 5 characters");
//     } else {
//       setUnError("");
//     }
//     if (currentVal.password.length < 5) {
//       setPassError("password must be longer than 5 characters");
//     } else {
//       setPassError("");
//     }
//     if (regex.test(currentVal.email) === false) {
//       setEmError("please enter a valid email");
//     } else {
//       setEmError("");
//     }
//     // if (currentVal.password.length < 5 && currentVal.username.length < 5) {
//     //   setErrorMessage(
//     //     "both username and password must be longer than 5 characters"
//     //   );
//     // }
//     if (
//       currentVal.username.length >= 5 &&
//       currentVal.password.length >= 5 &&
//       regex.test(currentVal.email)
//     ) {
//       // setCurrentUser(currentVal.username);
//       // console.log("from submit", currentVal.username);
//       // setUser([...user, currentVal]);
//       console.log(currentVal);
//       // axios.post('http://localhost:5000/api/friends', currentVal)
//       //   .then(res=>console.log(res))
//       //   .catch(err=>console.log(err));

//       axios.post('https://auth-friends-backend.herokuapp.com/api/friends', currentVal)
//         .then(res=>console.log(res))
//         .catch(err=>console.log(err));

//       setCurrentVal({
//         username: "",
//         email: "",
//         password: ""
//       });

//       history.push("/");
//     }
//   };


//   return (
//     <div>
//       <Form onSubmit={onSubmit}>
//         <Input
//           name="username"
//           placeholder="username"
//           onChange={handleChange}
//           value={currentVal.username}
//           autoComplete="off"
//         />

//         <Input
//           name="email"
//           placeholder="email"
//           onChange={handleChange}
//           value={currentVal.email}
//           autoComplete="off"
//         />

//         <Input
//           name="password"
//           type="password"
//           placeholder="password"
//           onChange={handleChange}
//           value={currentVal.password}
//           autoComplete="off"
//         />
//         <Button>Sign Up</Button>
//       </Form>
//       <div>
//         <p>{unError}</p>
//         <p>{emError}</p>
//         <p>{passError}</p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// const Input = styled.input`
//     background: none;
//     color: white;
//     border: 3px solid white;
//     padding: 1%;
//     border-radius: 35px;
//     width: 20%;
//     margin: .5% 0;
//     font-size: 1.2rem;
//     outline: none;

// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   justify-content: center;
//   align-items: center;
// `;

// const Button = styled.button`
//     border: 1px solid white;
//     width: 5%;
//     background: none;
//     margin: 2% auto;
//     padding: .75% 0;
//     color: white;
//     font-size: 1rem;
//     cursor: pointer;
//     &:hover{
//         background: white;
//         color: #0E0B20;
//         border: 1px solid #0E0B20;
//     }
// `;

import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from 'axios'


const SignUp = props => {
  const { user, setUser, setCurrentUser } = props;
  const [unError, setUnError] = useState("");
  const [passError, setPassError] = useState("");
  const [emError, setEmError] = useState("");
  const [currentVal, setCurrentVal] = useState({
    username: "",
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
    // if (currentVal.password.length < 5 && currentVal.username.length < 5) {
    //   setErrorMessage(
    //     "both username and password must be longer than 5 characters"
    //   );
    // }
    if (
      currentVal.username.length >= 5 &&
      currentVal.password.length >= 5

    ) {

      console.log(currentVal);
      // axios.post('http://localhost:5000/api/friends', currentVal)
      //   .then(res=>console.log(res))
      //   .catch(err=>console.log(err));

      axios.post('https://song-suggester-a.herokuapp.com/api/auth/register', currentVal)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));

      setCurrentVal({
        username: "",
        password: ""
      });

      history.push("/");
    }
  };


  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={currentVal.username}
          autoComplete="off"
        />


        <Input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={currentVal.password}
          autoComplete="off"
        />
        <Button>Sign Up</Button>
      </Form>
      <div>
        <p>{unError}</p>
        <p>{emError}</p>
        <p>{passError}</p>
      </div>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
`;

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
    @media(max-width: 1100px){
      width: 40%;
    }
    @media(max-width: 570px){
      width: 60%;
    }
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
    @media(max-width: 900px){
      width: 15%;
    }
    @media(max-width: 490px){
      width: 25%;
    }
`;