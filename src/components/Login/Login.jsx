import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import login from "./Login.module.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async () => {
    let submitLoginData = {
      username: username,
      password: password,
    };

    await fetch("http://localhost:8000/Client/Auth/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitLoginData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        if (data.token) {
          window.location.href = "/";
        }
        localStorage.setItem("token", data.token);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {}, [password?.length > 8]);
  return (
    <React.Fragment>
      <div className="container">
        <div className={`row , ${login.main} `}>
          <p className="h3" style={{ textAlign: "center" }}>
            Login to your account.
          </p>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className={login.inputMain}>
              <label
                htmlFor="username"
                style={{ textAlign: "left", width: "75%" }}
              >
                Enter your username
              </label>
              <input
                className={login.input}
                name="nusername"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                autoComplete="off"
                required
              ></input>
            </div>
            <div className={login.inputMain}>
              <label
                htmlFor="password"
                style={{ textAlign: "left", width: "75%" }}
              >
                Enter your password
              </label>
              <input
                className={login.input}
                name="password"
                type="password"
                required
                autoComplete="off"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <div className={login.btnwrap}>
              <button
                className={login.btn}
                onClick={() => {
                  loginSubmit();
                }}
              >
                Submit
              </button>
            </div>
            <div className="d-flex justify-content-center">
              Don't have a account?&nbsp;&nbsp;

                <Link to="/signup">
              <span className="link-black" style={{ cursor: "pointer", fontWeight: "bold" }}>
                sign-up
              </span>
                </Link>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <img
        src="https://images.pexels.com/photos/797900/pexels-photo-797900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className={`img-fluid ${login.bgimg}`}
      />
    </React.Fragment>
  );
};
