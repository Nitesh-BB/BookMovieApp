import React from "react";
import { Button, TextField } from "@mui/material";
const Register = ({ baseUrl, closeModal }) => {
  const [user, setUser] = React.useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`${baseUrl}signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
     
      if (data.status === "ACTIVE") setSuccess(true);
      else alert(data.message);
      close;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 20 }}>
        <TextField
          required
          label="FirstName"
          variant="standard"
          size="small"
          fullWidth
          name="first_name"
          onChange={handleChange}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <TextField
          size="small"
          required
          label="LastName"
          variant="standard"
          fullWidth
          name="last_name"
          onChange={handleChange}
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
          name="email_address"
          onChange={handleChange}
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
          name="password"
          onChange={handleChange}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <TextField
          size="small"
          required
          label="ContactNo"
          variant="standard"
          fullWidth
          name="mobile_number"
          onChange={handleChange}
        />
      </div>

      {success && (
        <div style={{ marginBottom: 15 }}>
          <p>Registration Successful. Please Login!</p>
        </div>
      )}

      <div style={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </div>
    </form>
  );
};

export default Register;
