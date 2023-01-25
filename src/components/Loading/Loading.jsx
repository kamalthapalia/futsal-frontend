import React from "react";
import style from './Loading.module.css'

function Loading() {
  return (
    <div className={`h1 , ${style.loading}`}>
      Loading{" "}
      {/* <div className="spinner-main">
        <div className="spinner-dot"></div>
        <div className="spinner-space"></div>

        <div className="spinner-dot"></div>
      </div> */}

    <div class={style.loaderContainer}>
<span class={style.loader}></span>
</div>
    </div>
  );
}

export default Loading;
