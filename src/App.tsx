import { useState, useEffect } from "react";
import Parent from "./Components/Parent";
import Form from "./Components/common/Form";
import { Routes, Route, useNavigate } from "react-router-dom";
import { app } from "./firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/notes");
    }
  }, []);

  const handleAction = (id: number) => {
    const authentication = getAuth(app);
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response: any) => {
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken,
          );
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
        });
    }
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response: any) => {
          navigate("/notes");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken,
          );
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    }
  };
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <Form
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
              link
            />
          }
        />
        <Route
          path="/register"
          element={
            <Form
              title="Sign up"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => {
                handleAction(2);
                navigate("/notes");
              }}
              login
            />
          }
        />
        <Route path="/notes" element={<Parent />} />
      </Routes>
    </div>
  );
}

export default App;
