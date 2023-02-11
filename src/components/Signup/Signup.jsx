import React from "react";
import { useState, useRef, useEffect } from "react";
import style from "./Signup.module.css";
import { Link, Navigate } from "react-router-dom";
import ApiRoute from "../../ApiRoute";

export const Signup = () => {
  const pwmatch = document.querySelector("#warn");
  const pwlength = document.querySelector("#warn2");

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");


  const checkPwMatch = () => {
    try{
    if (password.length < 8) {
      pwlength.classList.add(style.block);
    } else {
      pwlength.classList.remove(style.block);
    }

    if (repassword?.length > 0 && repassword !== password) {
      pwmatch.classList.add(style.block);
    } else {
      pwmatch.classList.remove(style.block);
    }
  }
  catch{
  }
  };
  
  let finalUploadData = {
    username: username,
    fullname: fullname,
    phone: phone,
    password: password,
  };
  const submitData = async () => {
    fetch(`${ApiRoute}Client/Auth/Register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalUploadData),
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
  useEffect(() => {
    checkPwMatch();
  }, [repassword, password]);
  return (
    <React.Fragment>
      <section className={style.section}>
        <div className={` container`}>
          <div className={` ${style.main}`}>
            <div className="row">
              <div className="col-md-6">
                <div className={style.inppWrap}>
                  <div className={style.inpp}>
                    <div className={style.header}>Signup</div>
                    <div className={style.desc}>
                      Enter Your details to Signup
                    </div>
                    <div className={style.formInpMain}>
                      <label className={style.labell} htmlFor="name">
                        Enter your fullname
                      </label>
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
                      <label className={style.labell} htmlFor="username">
                        Enter your username
                      </label>
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
                      <label className={style.labell} htmlFor="phone">
                        Enter your phone no.
                      </label>
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
                      <label className={style.labell} htmlFor="email">
                        Enter your email address (optional)
                      </label>
                      <input
                        className={style.formInp}
                        name="email"
                        type="email"
                        required
                        autoComplete="on"
                      ></input>
                    </div>

                    <div className={style.formInpMain}>
                      <label className={style.labell} htmlFor="password">
                        Enter your password
                      </label>
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
                      <label className={style.labell} htmlFor="password">
                        Confirm your password
                      </label>
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
                      <div id="warn" className={style.formWarn}>
                        password donot match
                      </div>
                    </div>

                    <div className={style.formSub1}>
                      <button
                        className={style.signupBtn}
                        onClick={(email) => {
                          email.preventDefault();
                          submitData();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                    <div className={style.or}>OR</div>
                    <button className={style.loginBtn} onClick={()=>{
                      window.location.href="/login";
                    }}>Login</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={style.imgwrap}>
                  <img
                    className={style.img}
                    src="https://i.ibb.co/dr7k9rn/mstg9e.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
