import React from "react";
import style from "./Loading.module.css";

function Loading() {
  return (
    <div className={style.loadingWrap}>
      <div className={`h1 , ${style.loading}`}>
        Loading{" "}
        {/* <div className="spinner-main">
        <div className="spinner-dot"></div>
        <div className="spinner-space"></div>

        <div className="spinner-dot"></div>
      </div> */}
        <div className={style.loaderContainer}>
          <span className={style.loader}></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
