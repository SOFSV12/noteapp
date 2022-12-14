import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  handleToggleDarkMode: Function;
}

const Header: React.FC<IProps> = ({ handleToggleDarkMode }) => {
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/");
  };
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      navigate("/notes");
    }

    if (!authToken) {
      navigate("/register");
    }
  }, []);
  return (
    <div className="header">
      <h1>Notes</h1>
      <div className="buttons">
        <button onClick={() => handleToggleDarkMode()} className="save">
          Toggle Mode
        </button>
        <button onClick={handleLogout} className="save">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
