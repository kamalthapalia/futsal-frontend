import React, { useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar(userloginstatus) {
  useEffect(() => {
    const navbar = document.querySelector("#nav");
    const mob = document.querySelector("#mob");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
        mob.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
        mob.classList.remove("scrolled");
      }
    });
    console.log(userloginstatus)
  }, []);
  return (
    <div className={style.wrap}>
      <div className={style.mobileMenu} id="mobile">
        <NavLink to="/">
          <div className={style.item}>Home</div>
        </NavLink>
        <NavLink to="/blog">
          <div className={style.item}>Blog</div>
        </NavLink>
        <div className={style.item}>About us</div>
        <NavLink to="/gallery">
          <div className={style.item}>Gallery</div>
        </NavLink>

        <div
          className={style.btn}
          onClick={() => {
            const mobile = document.querySelector("#mobile");
            function remClass() {
              mobile.classList.remove("shownav");
            }
            remClass();
          }}
        >
          close
        </div>
      </div>
      <div className={style.mobile} id="mob">
        <div className={style.logo}>LoGO</div>
        <div
          className={style.ham}
          onClick={() => {
            const mobile = document.querySelector("#mobile");
            function addClass() {
              mobile.classList.add("shownav");
            }
            addClass();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>

      <div className={`${style.nav}`} id="nav">
        <div className={style.logo}>LoGO</div>
        <div className={style.menuGroup}>
          <NavLink to="/">
            <div className={style.menu}>home</div>
          </NavLink>
          <NavLink to="/blog">
            <div className={style.menu}>blog</div>
          </NavLink>
          <a href="#about">
            <div className={style.menu}>about us</div>
            </a>
        </div>

        {userloginstatus? (
          <NavLink to="/profile">
            <div className={style.right}>profile</div>
          </NavLink>
        ) : (
          <NavLink to="/signup">
            <div className={style.right}>signup</div>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navbar;
