import React, { useEffect, useState } from "react";
import style from "./Statstics.module.css";
import { BiFootball } from "react-icons/bi";
import { GiGoalKeeper } from "react-icons/gi";
import { TeamInfo } from "../../../components/Team/Team";
import moment from "moment";
import ApiRoute from "../../../ApiRoute";

function Statstics() {
  let token = localStorage.getItem("token");
  const [stats, setStats] = useState();
  const [hasCoupon, setHascoupon] = useState();
  async function getStats() {
    let res = await fetch(`${ApiRoute}Client/Dashboard/getStats`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    let resData = await res.json();
    setStats(resData);
  }

  async function checkcoupon() {
    let res = await fetch(`${ApiRoute}client/Bookings/checkActiveCoupons`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    let resData = await res.json();
    setHascoupon(resData);
  }

  useEffect(() => {
    getStats();
    checkcoupon();
  }, []);

  return (
    <div className="container">
      <div className={style.main}>
        <div className={style.welMain}>
          <span className={style.welcome}>WELCOME!</span>
          <br />
          <span className={style.name}>@{stats?.userName}</span>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className={style.card}>
              <div className={style.icon}>
                <BiFootball size={`3em`} />
              </div>
              <div>
                <div className={style.cardTitle}>Played So Far</div>
                <div className={style.carddesc}>
                  {stats?.playedSoFar} Matches
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.card}>
              <div className={style.icon}>
                <BiFootball size={`3em`} />
              </div>
              <div>
                <div className={style.cardTitle}>Joined On</div>
                <div className={style.carddesc}>
                  {" "}
                  {stats?.joinedOn?.split("T")[0]}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.card}>
              <div className={style.icon}>
                <BiFootball size={`3em`} />
              </div>
              <div>
                <div className={style.cardTitle}>Total Amount Spent</div>
                <div className={style.carddesc}>Rs.{stats?.TotalAmount}</div>
              </div>
            </div>
          </div>
        </div>
        {hasCoupon?.couponCode && (
          <div className={style.desc}>
            <div className={style.congrats}>
              <img
                className={style.congratulations}
                src="https://i.ibb.co/fDH4mfv/pngwing-com.png"
              />
            </div>{" "}
            <div className={style.couponHead}>You got a free coupon,</div>
            <div className={style.rev}>
              <div className={style.cupcard}>
                <div className={style.couponText}>Hover To Reveal</div>
                <div className={style.cardInternal}>
                  <div className={style.couponCode}>{hasCoupon.couponCode}</div>
                </div>
              </div>
              <span className={style.data}></span>
            </div>
            <div className={style.couponExpiry}>
              Expires in:{" "}
              <span className={style.data}>
                {moment(hasCoupon.ExpiryDate).format("YYYY-MM-DD, dddd")}
              </span>
            </div>
          </div>
        )}
        {hasCoupon?.code === 200 && (
          <div className={style.desc1}>
            You should play{" "}
            <span className={style.no}>{hasCoupon?.matchesLeft}</span> more
            matches to get a free bonus booking.
          </div>
        )}
      </div>
    </div>
  );
}

function MatchesPlayed() {
  const token = localStorage.getItem("token");
  const [matchesPlayed, setMatchPlayed] = useState();
  const [pendingMatches, setPendingMatches] = useState();

  async function getPastMatches() {
    let res = await fetch(`${ApiRoute}Client/Dashboard/getPastBookings`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    let resData = await res.json();
    setMatchPlayed(resData);
  }

  async function getPendingMatches() {
    let res = await fetch(`${ApiRoute}Client/Dashboard/getPendingBookings`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    let resData = await res.json();
    setPendingMatches(resData);
  }

  useEffect(() => {
    getPastMatches();
    getPendingMatches();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className={style.main}>
          <div className={style.tableTitle}>Pending Matches</div>
          <div className="table-responsive">
            <table className={`table ${style.tableMain}`}>
              <thead className={style.tableHead}>
                <tr>
                  <th scope="col">Sn</th>
                  <th scope="col">Booked Date</th>
                  <th scope="col">Match Date</th>
                  <th scope="col">Match Time</th>
                  <th scope="col">Price</th>
                  <th scope="col">Check-In Code</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingMatches?.Paid?.map((matches, index) => (
                  <tr>
                    <td scope="row">{index + 1}</td>
                    <td scope="row">
                      {moment(matches?.createdAt).format("YYYY-MM-DD, dddd")}
                    </td>
                    <td>
                      {moment(matches?.BookingDateTime).format(
                        "YYYY-MM-DD, dddd"
                      )}
                    </td>
                    <td>
                      {moment(parseInt(matches?.BookingTime)).format("MM A")} -{" "}
                      {moment(parseInt(matches?.BookingTime))
                        .add(1, "M")
                        .format("MM A")}
                    </td>
                    <td>{matches?.GamePrice}</td>
                    <td>{matches?.VerificationCode}</td>
                    <td>Paid</td>
                  </tr>
                ))}
                {pendingMatches?.Pending?.map((matches, index) => (
                  <tr>
                    <td scope="row">{index + 1}</td>
                    <td scope="row">
                      {moment(matches?.createdAt).format("YYYY-MM-DD, dddd")}
                    </td>

                    <td>
                      {moment(matches?.BookingDateTime).format(
                        "YYYY-MM-DD, dddd"
                      )}
                    </td>
                    <td>
                      {moment(
                        parseInt(matches?.BookingTime?.split("-")[0]),
                        "HH"
                      ).format("hh A")}{" "}
                      -{" "}
                      {moment(
                        parseInt(matches?.BookingTime?.split("-")[1]),
                        "HH"
                      ).format("hh A")}
                    </td>
                    <td>{matches?.GamePrice}</td>
                    <td>--</td>
                    <td>Not Paid</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pendingMatches?.code === 400 && (
            <div className={style.matchInfo}>{pendingMatches?.msg}</div>
          )}
        </div>
      </div>
      <div className="container">
        <div className={style.main}>
          <div className={style.tableTitle}>Past Matches</div>
          <div className="table-responsive">
            <table className={`table ${style.tableMain}`}>
              <thead className={style.tableHead}>
                <tr>
                  <th scope="col">Sn</th>
                  <th scope="col">Booked Date</th>
                  <th scope="col">Match Date</th>
                  <th scope="col">Match Time</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {matchesPlayed?.data?.map((matches, index) => (
                  <tr>
                    <td scope="row">{index + 1}</td>
                    <td>
                      {moment(matches?.BookingCreatedDate).format(
                        "YYYY-MM-DD, dddd"
                      )}
                    </td>
                    <td>
                      {moment(matches?.bookedTime).format("YYYY-MM-DD, dddd")}
                    </td>
                    <td>
                      {moment(matches?.bookedDate).format("hh A")} -{" "}
                      {moment(matches?.bookedDate).add(1, "H").format("hh A")}
                    </td>
                    <td>{matches.Price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {matchesPlayed?.count === 0 && (
            <div className={style.matchInfo}>{matchesPlayed.msg}</div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export { Statstics, MatchesPlayed };
