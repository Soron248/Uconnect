import React, { useState } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, signUp } from "../../actions/AuthAction.js";
import { Button } from "@mantine/core";

const Auth = () => {
  const initialState = {
    campusmail: "",
    campusid: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState(initialState);
  const loading = useSelector((state) => state.authReducer.loading);
  const [confirmPass, setConfirmPass] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className="Auth">
      {/* left Side */}
      <div className="a-left">
        <div className="webname">
          <h1>Uconnect</h1>
          <h6>Create your identity</h6>
        </div>
      </div>
      {/* Right SIde */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="Campus Mail"
                className="infoInput"
                name="campusmail"
                value={data.campusmail}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Campus ID"
                className="infoInput"
                name="campusid"
                value={data.campusid}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="username-area">
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
          </div>
          <button
            className="buttonAuth infoButton button"
            type="Submit"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

// function LogIn() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>LogIn</h3>
//         <div className="username-area">
//           <input
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />
//         </div>
//         <div>
//           <span>Don't Already have an acount. SignUp!</span>
//         </div>
//         <button className="button infoButton" type="submit">
//           Lgogin
//         </button>
//       </form>
//     </div>
//   );
// }

// function SignUp() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Sign up</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="Campus Mail"
//             className="infoInput"
//             name="campusmail"
//           />
//           <input
//             type="text"
//             placeholder="Campus ID"
//             className="infoInput"
//             name="campusid"
//           />
//         </div>
//         <div className="username-area">
//           <input
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />
//           <input
//             type="text"
//             className="infoInput"
//             name="confirmpass"
//             placeholder="Confirm Password"
//           />
//         </div>
//         <div>
//           <span>Already have an acount. LOGIN!</span>
//         </div>
//         <button className="button infoButton" type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }

export default Auth;
