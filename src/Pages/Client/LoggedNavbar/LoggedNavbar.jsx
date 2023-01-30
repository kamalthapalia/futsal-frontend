import React from "react";
import style from "./LoggedNavbar.module.css";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { NavLink } from "react-router-dom";

function LoggedNavbar() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.main}>
          <div className={style.menu}>
            <NavLink to="/Home">
              <div className={style.menuitem}>
                <AiFillHome size={`2em`} />
              </div>
            </NavLink>

            <NavLink to="/Stats">
              <div className={style.menuitem}>
                <ImStatsBars size="2em" />
              </div>
            </NavLink>
            <NavLink to="/Team">
              <div className={style.menuitem}>
                <MdGroups size="2em" />
              </div>
            </NavLink>
            <NavLink to="/Home">
              <div className={style.menuitem}>
                <AiFillSetting size="2em" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoggedNavbar;
