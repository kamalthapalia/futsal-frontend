import React, { useState, useEffect } from "react";
import style from "./AvailableMatches.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import { RxCross2 } from "react-icons/rx";
import { RxCheck } from "react-icons/rx";
import PaymentPopup from "../PaymentPopup/PaymentPopup";
import ApiRoute from "../../ApiRoute";

function AvailableMatches({ setShowPopup, setBookDate, setPrice }) {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [data, setData] = useState();
  const [value, onChange] = useState(new Date());

  async function getMatches() {
    try {
      let response = await fetch(
        `${ApiRoute}client/Bookings/getAllBookings?date=${date}`
      );
      const resData = await response.json();
      setData(resData);
    } catch {}
  }

  useEffect(() => {
    getMatches();
    return () => {};
    // console.log(data);
  }, [date]);

  const [time, setTime] = useState([
    "5-6 AM",
    "6-7 AM",
    "7-8 AM",
    "8-9 AM",
    "9-10 AM",
    "10-11 AM",
    "11-12 PM",
    "12-1 PM",
    "1-2 PM",
    "2-3 PM",
    "3-4 PM",
    "4-5 PM",
    "5-6 PM",
    "6-7 PM",
    "7-8 PM",
    "8-9 PM",
  ]);
  useEffect(() => {});
  // document.querySelector('#avilable').addEventListener("click" ,()=> {
  //                     setShowPopup(true) ;
  //                         setBookDate({
  //                           Date:date,
  //                           Time:time,
  //                         })
  // })

  var maxdate = new Date();
  maxdate.setDate(maxdate.getDate() + 7);

  function BookingTime(given) {
    let BTime;
    data?.Matches?.map((data) => {
      if (data?.FormattedTime === given) {
        BTime = data?.BookingTime;
      }
    });
    return BTime;
  }

  function Price(given) {
    let price;
    data?.Matches?.map((data) => {
      if (data?.FormattedTime === given) {
        price = data?.GamePrice;
      }
    });
    return price;
  }

  function checkAvailiblity(avai) {
    let available = false;

    data?.Matches?.map((data) => {
      if (data?.FormattedTime === avai) {
        available = true;
      }
    });
    return available;
  }

  return (
    <React.Fragment>
      <section className={style.AvaliableMatchesSection}>
        <div className="container">
          <div className={style.wrap}>
            <div className={style.main}>
              <h3 className={`text-center ${style.header}`}>
                Avaliable Matches
              </h3>
              <div className={`row`}>
                <div className={`col-md-6 , ${style.calender}`}>
                  {/* <input
              className={style.date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
            /> */}
                  <Calendar
                    maxDate={maxdate}
                    minDate={new Date()}
                    className={"calender"}
                    onChange={(value, event) => {
                      onChange();
                      setDate(moment(value).format("YYYY-MM-DD"));
                    }}
                    value={value}
                  />
                </div>
                <div className="col-md-6">
                  <div className={style.title}>{date}</div>

                  {/* <div className={style.content}>

                   {!data?.success?"please select valid date":" "}

    <div className={data?.availableTimes?.includes("7-8")? `${style.available}` : `unavailable`}>7-8</div>
                {data?.availableTimes?.includes(time)? setAvi(true) : setAvi(false)} 

    <div className={data?.availableTimes?.includes("5-6")? `${style.available}` : `unavailable`}>5-6</div>
                
                </div> */}

                  <div className={style["warn"]}>
                    {!data?.code === 200 ? "please select valid date" : " "}
                  </div>
                  <div className={style["content"]}>
                    {data?.code === 200 && (
                      <React.Fragment>
                        {time?.map((time) => (
                          <React.Fragment>
                            <div
                              id={
                                checkAvailiblity(time)
                                  ? "available"
                                  : "notavailable"
                              }
                              onClick={(e) => {
                                if (e.target.id == "available") {
                                  setShowPopup(true);
                                  setPrice(Price(time));
                                  setBookDate({
                                    Date: date,
                                    BookingTime: BookingTime(time),
                                    FormattedTime: time,
                                  });
                                }
                              }}
                              className={
                                checkAvailiblity(time)
                                  ? `${style.available} , ${style.time}`
                                  : `${style.time}`
                              }
                            >
                              {checkAvailiblity(time) && (
                                <React.Fragment>
                                  <RxCheck />
                                </React.Fragment>
                              )}
                              {!checkAvailiblity(time) && (
                                <React.Fragment>
                                  <RxCross2 />
                                </React.Fragment>
                              )}
                              {time}{" "}
                            </div>
                          </React.Fragment>
                        ))}
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AvailableMatches;
