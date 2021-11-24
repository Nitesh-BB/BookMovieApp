import React from "react";
import { Button,TextField } from "@mui/material";
const Login = () => {
  return (
  
      <form>
        <div style={{ marginBottom: 20 }}>
          <TextField
            required
            label="Username"
            variant="standard"
          size="small"
          fullWidth
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
          />
        </div>
        <div style={{textAlign:"center"}}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
   
  );
};

export default Login;