import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = props => {
  const { user } = props;
  const history = useHistory();
  const [currentVal, setCurrentVal] = useState({
    username: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setCurrentVal({ ...currentVal, [e.target.name]: e.target.value });
    // console.log(currentVal);
  };

  const onSubmit = e => {
    e.preventDefault();
    //search through user array
    //if credentials match, return a welcome message
    //if not, say user not found
    if (user){
        user.map(person => {
        if (person.username === currentVal.username) {
            if (person.password === currentVal.password) {
            //   history.push("/dashboard");
            return setMessage("Hello " + person.username);
            }
        } else {
            return setMessage("not found");
        }
        });
    }
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
      <div style={{color: 'white'}}>Message: {message}</div>
    </div>
  );
};

export default Login;
