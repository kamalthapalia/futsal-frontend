import React from "react";
import { BiMap } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import style from "./Contact.module.css";

function Contact() {
  return (
    <section className={style.contactSection}>
      <div className={`container `}>
        <div className={style.main}>
          <h3 className={style.header}>Contact us</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="row h-100">
                <div className="col text-center d-flex flex-column justify-content-center align-items-center">
                  <BiMap size={`2em`} style={{ height: "40px" }} />
                  Arjundhara-10 Jhapa <br />
                  Near chhata chowk, Jhapa Nepal
                </div>
                <div className="col text-center d-flex flex-column justify-content-center align-items-center">
                  <BiPhoneCall size={`2em`} />
                  9817070845 <br />
                  Gamastafutsal@gmail.com
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={style.desc}>
                We appreciate your suggestions, as they help us to constantly
                improve and provide the best possible experience for our
                players.{" "}
              </div>
              <textarea
                className={style.textarea}
                name="suggestion"
                cols="30"
                rows="4"
                placeholder="enter your queries/suggestion here..."
              ></textarea>
              <button className={style.btn}>submit</button>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d57035.42349589739!2d88.00934962075287!3d26.6896289539902!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1675591660047!5m2!1sen!2snp"
            className={style.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
