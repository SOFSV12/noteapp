import Button from "@mui/material/Button";
import React from "react";

interface BasicButtonsProps {
  title: string;
  handleClick: any;
}

const BasicButtons: React.FC<BasicButtonsProps> = ({ title, handleClick }) => {
  return (
    <Button variant="contained" onClick={handleClick}>
      {title}
    </Button>
  );
};

export default BasicButtons;
