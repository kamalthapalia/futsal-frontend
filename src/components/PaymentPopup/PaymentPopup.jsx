import React from "react";
import style from "./PaymentPopup.module.css";
import { AiFillDollarCircle, AiOutlineCalendar } from "react-icons/ai";
import { useState } from "react";
import ApiRoute from "../../ApiRoute";

function PaymentPopup({ setShowPopup, bookDate, price }) {
  const [havecoupon, setHavecoupon] = useState(false);
  const [coupon, setcoupon] = useState("");

  async function checkcoupon() {
    if (coupon.length < 1) {
      alert("please 🙏");
    } else {
      BookMatchWithCoupon();
    }
  }
  const token = localStorage.getItem("token");

  async function BookMatch() {
    let res = await fetch(`${ApiRoute}client/Bookings/newBooking/`, {
      method: "POST",

      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BookingDateTime: bookDate.Date,
        BookingTime: bookDate.BookingTime,
      }),
    });
    let resData = await res.json();
    alert(resData.msg);
    window.location.reload();
  }

  async function BookMatchWithCoupon() {
    let res = await fetch(`${ApiRoute}client/Bookings/newBooking/`, {
      method: "POST",

      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BookingDateTime: bookDate.Date,
        BookingTime: bookDate.BookingTime,
        CouponCode: coupon,
      }),
    });
    let resData = await res.json();
    alert(resData.msg);
    window.location.reload();
  }

  return (
    <section className={style.section}>
      <div className={style.pay}>
        <div className={style.textwrap}>
          <div className={style.text}>
            Are you sure you want to book a match?
          </div>
          <div className={style.dateAndTimeWrap}>
            <div className={style.calender}>
              <AiOutlineCalendar size="1.5em" />
            </div>

            <div className={style.dateAndtime}>
              &nbsp;&nbsp;&nbsp;&nbsp;{bookDate?.Date} {bookDate?.FormattedTime}{" "}
            </div>
          </div>
        </div>
        <div className={style.amount}>Amount: RS.{price}</div>
        {!havecoupon && (
          <React.Fragment>
            <div className={style.icon}>
              <AiFillDollarCircle size="8em" />
            </div>
          </React.Fragment>
        )}
        {havecoupon && (
          <React.Fragment>
            <div className={style.coupon}>
              <div className={style.info}>Enter your coupon.</div>
              <input
                onChange={(e) => {
                  setcoupon(e.target.value);
                }}
                className={style.couponInput}
                type="text"
              />
            </div>
          </React.Fragment>
        )}

        {!havecoupon && (
          <div
            onClick={() => {
              BookMatch();
            }}
            className={style.continue}
          >
            continue payment
          </div>
        )}

        <div
          onClick={() => {
            if (havecoupon) {
              checkcoupon();
            } else {
              setHavecoupon(true);
            }
          }}
          className={style.applycoupon}
        >
          Apply coupon
        </div>
        <div
          onClick={() => {
            setShowPopup(false);
          }}
          className={style.cancel}
        >
          Cancel
        </div>
      </div>
    </section>
  );
}

export default PaymentPopup;
