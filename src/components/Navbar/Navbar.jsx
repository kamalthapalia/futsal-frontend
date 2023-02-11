import React, { useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"

function Navbar() {
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
  }, []);
  return (
    <div className={style.wrap}>
      <div className={style.mobileMenu} id="mobile">
        <NavLink className={style.item} to="/">
          <div>Home</div>
        </NavLink>
        <NavLink  className={style.item} to="/Blogs">
          <div>Blogs</div>
        </NavLink>
        <div className={style.item}>About us</div>
        <NavLink  className={style.item} to="/gallery">
          <div>Gallery</div>
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
        <div className={style.logo}>LOGO</div>
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
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg> */}
          <GiHamburgerMenu size={`1.5em`}/>
        </div>
      </div>

      <div className={`${style.nav}`} id="nav">
        <div className={style.logo}>LOGO</div>
        <div className={style.menuGroup}>
          <NavLink to="/">
            <div className={style.menu}>Home</div>
          </NavLink>
          <NavLink to="/Blogs">
            <div className={style.menu}>Blogs</div>
          </NavLink>
          <a href="/#about">
            <div className={style.menu}>About Us</div>
            </a>
        </div>

        <NavLink to="/login">
            <div className={style.right}>Login</div>
          </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
