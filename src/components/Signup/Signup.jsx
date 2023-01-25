import React from "react";
import { useState, useRef, useEffect } from "react";
import style from "./Signup.module.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  const pwmatch = document.querySelector("#warn");
  const pwlength = document.querySelector("#warn2");

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const checkPwMatch = () => {
    if (password?.length > 0 && repassword?.length > 0) {
      password?.length < 1
        ? pwmatch.classList.add(style.dum)
        : pwmatch.classList.add('formBlock');
      password === repassword
        ? pwmatch.classList.remove('formBlock')
        : pwmatch.classList.add('formBlock');
    }
  };
  if (password?.length > 0) {
    password.length < 8
      ? pwlength.classList.add("form-block")
      : pwmatch.classList.remove("form-block");
    password.length >= 8
      ? pwlength.classList.remove("form-block")
      : pwmatch.classList.remove("form-block");
  }
  let finalUploadData = {
    username: username,
    fullname: fullname,
    phone: phone,
    password: password,
  };
  const submitData = async () => {
    fetch("http://localhost:8000/Client/Auth/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalUploadData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
        if (data.token) {
          window.location.href = "/";
        }
        localStorage.setItem("token", data.token);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    checkPwMatch();
  }, [repassword, password]);
  return (
    <React.Fragment>
      <div className={` container ${style.main}`}>
        <h3 style={{ textAlign: "center" }}>signup to book the match</h3>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className={style.formInpMain}>
              <label htmlFor="name">Enter your fullname</label>
              <input
                className={style.formInp}
                name="name"
                type="text"
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                autoComplete="off"
                required
              ></input>
            </div>
            <div className={style.formInpMain}>
              <label htmlFor="username">Enter your username</label>
              <input
                className={style.formInp}
                name="nusername"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                autoComplete="off"
                required
              ></input>
            </div>
            <div className={style.formInpMain}>
              <label htmlFor="phone">Enter your phone no.</label>
              <input
                className={style.formInp}
                name="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="tel"
                required
                autoComplete="off"
              ></input>
            </div>
            <div className={style.formInpMain}>
              <label htmlFor="email">Enter your email address (optional)</label>
              <input
                className={style.formInp}
                name="email"
                type="email"
                required
                autoComplete="on"
              ></input>
            </div>

            <div className={style.formInpMain}>
              <label htmlFor="password">Enter your password</label>
              <input
                className={style.formInp}
                name="password"
                type="password"
                required
                autoComplete="off"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <div id="warn2" className={style.formWarn2}>
                password must be more than 8 characters
              </div>
            </div>
            <div className={style.formInpMain}>
              <label htmlFor="password">Confirm your password</label>
              <input
                className={style.formInp}
                name="password"
                required
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
                type="password"
                autoComplete="off"
              ></input>
              <div id="warn" className={style.formWarn}>password donot match</div>
            </div>

            <div className={style.formSub1}>
              <button
                className={style.formSubmit}
                onClick={(email) => {
                  email.preventDefault();
                  submitData();
                }}
              >
                Submit
              </button>
            </div>
            <div className="d-flex justify-content-center">
              Already have a account?&nbsp;&nbsp;{" "}
              <Link to="/login">
                <span
                  className="link-black"
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                >
                  login
                </span>
              </Link>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <img
        src="https://images.pexels.com/photos/797900/pexels-photo-797900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className={`img-fluid ${style.bgimg}`}
      />
    </React.Fragment>
  );
};
