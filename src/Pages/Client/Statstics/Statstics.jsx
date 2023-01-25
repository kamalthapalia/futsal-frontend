import React, { useEffect, useState } from "react";
import style from "./Statstics.module.css";
import { BiFootball } from "react-icons/bi";
import { GiGoalKeeper } from "react-icons/gi";

function Statstics() {
  const [userdata, setUserdata] = useState([
    { sn: 1, date: "2022/7/7", time: "5-6 pm", money: 1200 },
    { sn: 2, date: "2022/7/7", time: "5-6 pm", money: 1200 },
    { sn: 3, date: "2022/7/7", time: "5-6 pm", money: 1200 },
    { sn: 4, date: "2022/7/7", time: "5-6 pm", money: 1200 },
    { sn: 5, date: "2022/7/7", time: "5-6 pm", money: 1200 },
    { sn: 6, date: "2022/7/7", time: "5-6 pm", money: 1200 },
  ]);
  return (
    <section className={style.sectionMain}>
      <div className="container">
        <div className={style.main}>
          <div className="row">
            <div className="col-md-4">
              <div className={style.card}>
                <div className={style.icon}>
                  <BiFootball size={`3em`} />
                </div>
                <div>
                  <div className={style.cardTitle}>All Time</div>
                  <div className={style.carddesc}>7 matches played</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.card}>
                <div className={style.icon}>
                  <BiFootball size={`3em`} />
                </div>
                <div>
                  <div className={style.cardTitle}>This Month</div>
                  <div className={style.carddesc}>7</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.card}>
                <div className={style.icon}>
                  <BiFootball size={`3em`} />
                </div>
                <div>
                  <div className={style.cardTitle}>Some More</div>
                  <div className={style.carddesc}>7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={style.main}>
          <div className="row">
            <div className="col-md-6">
            <div className={style.tableHeader}>
                  Matches played all time
                  <span className={style.count}> ({userdata.length})</span>

                </div>
              <div className={style.table}>
                
                <div className={style.tableRow}>
                  <div className={style.id} style={{ fontWeight: "bold" }}>
                    Sn
                  </div>
                  <div className={style.date} style={{ fontWeight: "bold" }}>
                    Date
                  </div>
                  <div className={style.time} style={{ fontWeight: "bold" }}>
                    Time
                  </div>
                </div>
                {userdata?.map((ud) => (
                  <div className={style.tableRow}>
                    <div className={style.id}>{ud.sn}</div>
                    <div className={style.date}>{ud.date}</div>
                    <div className={style.time}>{ud.time}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
                <div className={style.tableHeader}>
                  Matches played this month
                  <span className={style.count}> ({userdata.length})</span>
                </div>
              <div className={style.table}>

                <div className={style.tableRow}>
                  <div className={style.id} style={{ fontWeight: "bold" }}>
                    Sn
                  </div>
                  <div className={style.date} style={{ fontWeight: "bold" }}>
                    Date
                  </div>
                  <div className={style.time} style={{ fontWeight: "bold" }}>
                    Time
                  </div>
                </div>
                {userdata?.map((ud) => (
                  <div className={style.tableRow}>
                    <div className={style.id}>{ud.sn}</div>
                    <div className={style.date}>{ud.date}</div>
                    <div className={style.time}>{ud.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statstics;
