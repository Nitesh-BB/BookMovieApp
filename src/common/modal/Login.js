import React from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {updateAuthLogin} from "../Redux"
const Login = ({ baseUrl, closeModal }) => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(baseUrl)
    const token = window.btoa(user.username + ":" + user.password)
    try {
      const response = await fetch(`${baseUrl}auth/login`, {
        method: "POST",
        headers: {
          Authorization:
            "Basic " + token
        },
      });
      const data = await response.json();
      closeModal();
      console.log(data);
      if (data.status === "ACTIVE") {
        dispatch(updateAuthLogin(token));
        closeModal();
      
       } 
       else alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 20 }}>
        <TextField
          required
          label="Username"
          variant="standard"
          size="small"
          fullWidth
          onChange={handleChange}
          name="username"
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <TextField
          size="small"
          required
          type="password"
          label="Password"
          variant="standard"
          fullWidth
          name="password"
          onChange={handleChange}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
