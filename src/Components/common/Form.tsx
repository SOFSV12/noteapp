import React from "react";
import Button from "./Button";
import { Box, TextField, Stack } from "@mui/material";

const BasicTextFields = () => {
  return (
    <div className="heading-container">
      <div>
        <h3>Login Form</h3>
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <Stack spacing={2}>
          <TextField id="email" label="Enter the Email" variant="outlined" />
          <TextField
            id="password"
            label="Enter the Password"
            variant="outlined"
          />
        </Stack>
      </Box>
      <Button />
    </div>
  );
};

export default BasicTextFields;
