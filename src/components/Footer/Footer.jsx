import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`w-100 m-0 flex-shrink-0 , ${style.main}`}>
      <div className={`row `}>
        <div className="col-md-6">
          <div className={style.left}>
            <div className={style.menu}>Home</div>
            <div className={style.menu}>About</div>
            <div className={style.menu}>contact</div>
            <div className={style.menu}>Book-now</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={style.right}>
            <div className={style.menu}>Privacy policy</div>
            <div className={style.menu}>Terms of use</div>
            <div className={style.menu}>copyright</div>
            <div className={style.menu}>more</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={`col ${style.end}`}>copyright	&#169; Bramhastra Futsal 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
