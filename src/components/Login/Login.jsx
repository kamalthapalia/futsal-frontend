import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiRoute from "../../ApiRoute";
import login from "./Login.module.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async () => {
    let submitLoginData = {
      username: username,
      password: password,
    };

    await fetch(`${ApiRoute}Client/Auth/Login`, {
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
      <section className={login.section}>
      <div className="container">
          <div className={login.externalWrap}>
        <div style={{alignItems: "center"}} className={`row`}>
          <div className="col-md-6">
            <div className={login.main}>
          <p className={login.title}>
            Welcome Back
          </p>
          <p className={login.desc}>Please enter your deteils.</p>
            <div className={login.inputMain}>
              <div
                htmlFor="username"
                className={login.inputTitle}
              >
                Enter your username
              </div>
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
              <div
                htmlFor="password"
                className={login.inputTitle}
              >
                Enter your password
              </div>
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
                className={login.loginBtn}
                onClick={() => {
                  loginSubmit();
                }}
              >
                Login
              </button>
              <div className={login.or}><span className={login.orr}>OR</span></div>
              <button
                className={login.signupBtn}
                onClick={() => {
                  window.location.href="/signup"
                }}
              >
                SignUp
              </button>
            </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={login.imgwrap}>

            <img className={login.img} src="https://i.ibb.co/dr7k9rn/mstg9e.png" />
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
    </React.Fragment>
  );
};
