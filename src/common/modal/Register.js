import React from "react"
import { Button, TextField } from "@mui/material";
const Register = () => {
    
    return (
      <form >
        <div style={{ marginBottom: 20 }}>
          <TextField
            required
            label="FirstName"
            variant="standard"
            size="small"
            fullWidth
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <TextField
            size="small"
            required
            label="LastNAme"
            variant="standard"
            fullWidth
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <TextField
            size="small"
            required
            label="Email"
            variant="standard"
            type="email"
            fullWidth
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <TextField
            fullWidth
            size="small"
            required
            label="Password"
            variant="standard"
            type="password"
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <TextField
            size="small"
            required
            label="ContactNo"
            variant="standard"
            fullWidth
          />
        </div>

        <div style={{ marginBottom: 15 }}>
          <p>Registration Successful. Please Login!</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <Button variant="contained" color="primary">
            Register
          </Button>
        </div>
      </form>
    );
}

export default Register;