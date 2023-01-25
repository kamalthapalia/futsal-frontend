import React, { useState, useEffect } from "react";
import style from "./AvailableMatches.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import { RxCross2 } from "react-icons/rx";
import { RxCheck } from "react-icons/rx";


function AvailableMatches() {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [data, setData] = useState();
  const [value, onChange] = useState(new Date());

  async function getMatches() {
    try {
      let response = await fetch(
        `http://192.168.1.74:8000/client/Bookings/getAllBookings?date=${date}`
      );
      const fetdata = await response.json();
      setData(fetdata);
    } catch {
      console.log("failed to fetch");
    }
  }

  useEffect(() => {
    getMatches();
    return () => {};
    // console.log(data);
  }, [date]);

  const [time, setTime] = useState([
    "5-6",
    "6-7",
    "7-8",
    "8-9",
    "9-10",
    "10-11",
    "11-12",
    "12-13",
    "13-14",
    "14-15",
    "15-16",
    "16-17",
    "17-18",
    "18-19",
    "19-20",
    "20-21",
  ]);

  var maxdate = new Date();

  maxdate.setDate(maxdate.getDate() + 7);

  return (
    <section className={style.AvaliableMatchesSection}>
      <div className="container">
        <div className={style.wrap}>
          <div className={style.main}>
            <h3 className={`text-center ${style.header}`}>Avaliable Matches</h3>
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
                  {!data?.success ? "please select valid date" : " "}
                </div>
                <div className={style["content"]}>
                  {data?.success && (
                    <React.Fragment>
                      {time.map((time) => (
                        <React.Fragment>
                          <div
                            className={
                              data?.availableTimes?.includes(time)
                                ? `${style.available} , ${style.time}`
                                : `${style.time}`
                            }
                          >
                            {data?.availableTimes?.includes(time) && (
                              <React.Fragment>
                                <RxCheck />
                              </React.Fragment>
                            )}
                            {!data?.availableTimes?.includes(time) && (
                              <React.Fragment>
                                <RxCross2 />
                              </React.Fragment>
                            )}
                            {time}{" "}
                            {parseInt(time.split("-")[0]) > 11 ? "pm" : "am"}
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
  );
}

export default AvailableMatches;
