import React from "react";

interface IProps {
  handleToggleDarkMode: Function;
}

const Header: React.FC<IProps> = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={() => handleToggleDarkMode()} className="save">
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
