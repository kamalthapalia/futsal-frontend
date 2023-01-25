import React from "react";
import style from "./About.module.css";

function About() {
  return (
    <section className={style.AboutUsSection}>
    <div className={` container`} id='about'>
      <div className={style.main}>
          <div className={`h3 , ${style.head}`}>Who are we???</div>
      <div className="row">
        <div className="col-lg-8">
          <div className={style.p}>
            State-of-the-art facilities are designed to meet the needs of
            serious athletes and casual players. We strive to make our futsal
            ground a welcoming and inclusive environment for all players,
            regardless of age, gender, or skill level. Our mission is to offer
            the best futsal ground in the area. High-quality artificial turf,
            top-of-the-line lighting, and spacious changing rooms.
            <br />
            <br /> We offer a
            range of rental options, including hourly, daily and even weekly. We
            also provide tournament hosting option. Our experienced staff are
            always on hand to assist with any questions or concerns.
          </div>
        </div>
        <div className="col-lg-4 justify-content-center">
          <div className={`${style.info}`}>
            <div className={style.title}>Score big at our futsal ground</div>
            <div className={style.desc}>
              "Join the winning team and book our Bramhastra futsal ground for
              your next game or tournament. With top-notch facilities and
              friendly staff, we'll help you score big every time."
            </div>
          </div>
          {/* <img
            className={style.img}
            src="https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_960_720.jpg"
            alt=""
          /> */}
        </div>
      </div>
      </div>
    </div>
    </section>
  );
}

export default About;
