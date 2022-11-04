import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("password-change-form").reset();
        setError({
          status: true,
          msg: "password changed successful",
          type: "success",
        });
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "All Fields are Required",
        type: "error",
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          maxWidth: 600,
          mx: 4,
        }}
      >
        <h1>Change Password</h1>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          id="password-change-form"
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password_confirmation"
            label="Confirm New Password"
            type="password"
            id="password_confirmation"
          />
          <Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}
            >
              Update
            </Button>
          </Box>
          {error.status ? <alert severity={error.type}>{error.msg}</alert> : ""}
        </Box>
      </Box>
    </>
  );
};

export default ChangePassword;
