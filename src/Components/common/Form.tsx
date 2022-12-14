import React from "react";
import Button from "./Button";
import { Box, TextField, Stack } from "@mui/material";
import { Link } from "react-router-dom";

interface BasicTextFieldsProps {
  title: string;
  setEmail: Function;
  setPassword: Function;
  handleAction: any;
  link?: boolean;
}

const BasicTextFields: React.FC<BasicTextFieldsProps> = ({
  title,
  setEmail,
  setPassword,
  handleAction,
  link,
}) => {
  return (
    <div className="layout">
      <div className="heading-container">
        <div>
          <h3>{title} Form</h3>
        </div>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off">
          <Stack spacing={2}>
            <TextField
              id="email"
              label="Enter Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Enter Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Stack>
        </Box>
        <Button title={title} handleClick={handleAction} />
        {link && <Link to={"/register"}>Sign UP</Link>}
      </div>
    </div>
  );
};

export default BasicTextFields;
