import React from "react";
import style from "./Team.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import ApiRoute from "../../ApiRoute";
import Swal from "sweetalert2";

function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const [teamDesc, setTeamDesc] = useState("");
  const [teamContact, setTeamContact] = useState("");
  const [loading, setLoading] = useState();

  function CreateSuccess() {
    Swal.fire("Team Successfully Created").then((e) => {
      if (e.isConfirmed) {
        window.location.reload();
      }
    });
  }

  async function createTeam() {
    const token = localStorage.getItem("token");
    setLoading(true);
    let res = await fetch(`${ApiRoute}Client/Dashboard/createTeam`, {
      method: "POST",

      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TeamName: teamName,
        TeamContact: teamContact,
        TeamDescription: teamDesc,
      }),
    });
    setLoading(false);
    let data = await res.json();
    CreateSuccess();
    setTeamName();
    setTeamContact();
    setTeamDesc();

    if (data.code === 200) {
    }
  }
  if (loading) return <Loading />;
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.main}>
          <div className={style.content}>
            <div className={style.text1}>
              You dont have any team registered.
            </div>
            <div className={style.title}>Create your own team </div>
            <div className={style.text2}>
              You can Create team, add members and start challanging other
              teams.
            </div>
            <br />

            <div className={style.form}>
              <div className={style.inputwrap}>
                <div className={style.inputtitle}>Enter your team name</div>
                <input
                  required
                  onChange={(e) => {
                    setTeamName(e.target.value);
                  }}
                  className={style.input}
                  type="text"
                />
              </div>
              <div className={style.inputwrap}>
                <div className={style.inputtitle}>
                  Enter your team contact no.
                </div>
                <input
                  required
                  onChange={(e) => {
                    setTeamContact(e.target.value);
                  }}
                  className={style.input}
                  type="text"
                />
              </div>
              <div className={style.inputwrap}>
                <div className={style.inputtitle}>
                  Enter your team Description
                </div>
                <input
                  required
                  onChange={(e) => {
                    setTeamDesc(e.target.value);
                  }}
                  className={style.input}
                  type="text"
                />
              </div>
              <button
                onClick={() => {
                  createTeam();
                }}
                className={style.submit}
              >
                Create team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowActiveTeams() {
  const [activeTeam, setActiveTeam] = useState();
  const token = localStorage.getItem("token");

  async function getActiveTeams() {
    const response = await fetch(`${ApiRoute}Client/Dashboard/getActiveTeams`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const resData = await response.json();
    console.log(resData);
    setActiveTeam(resData);
  }
  useEffect(() => {
    getActiveTeams();
  }, []);

  return (
    <div className={style.mainWrap}>
      <div className={style.Title}>Teams Active For Challenges</div>
      <div className={style.ActiveTeamsWrp}>
        <div className={style.activeTeamsCard}>
          <div className={style.activeTeamTitle}>Niga team</div>
          <div className={style.activeTeamContact}>9817070845</div>
          <div className={style.activeTeamDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae
            sit explicabo iure perferendis neque in voluptatem sed iste
            repellendus unde modi, officiis hic fugiat, tempore obcaecati
            laudantium minus quod!
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

function AddMember() {
  const [playerName, setPlayerName] = useState("");
  const [playerContact, setPlayerContact] = useState("");
  const [loading, setLoading] = useState();
  function success(inp) {
    Swal.fire({
      icon: "success",
      title: inp.msg,
    });
  }
  function failed(inp) {
    Swal.fire({
      icon: "error",
      title: inp.msg,
    });
  }
  async function AddPlayer() {
    const token = localStorage.getItem("token");
    setLoading(true);
    let res = await fetch(`${ApiRoute}Client/Dashboard/AddPlayer`, {
      method: "POST",

      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TeamMembers: {
          MemberName: playerName,
          MemberPhone: playerContact,
        },
      }),
    });
    setLoading(false);
    let resData = await res.json();
    resData?.code === 200 ? success(resData) : failed(resData);

    setPlayerName();
    setPlayerContact();
  }
  if (loading) return <Loading />;
  return (
    <section className={style.section}>
      <div className={`container`}>
        <div className={style.main}>
          <div className={style.content}>
            <div className={style.title}>Add a new player</div>
            <div className={style.form}>
              <div className={style.inputwrap}>
                <div className={style.inputtitle}>Enter Players Name</div>
                <input
                  required
                  onChange={(e) => {
                    setPlayerName(e.target.value);
                  }}
                  className={style.input}
                  type="text"
                />
              </div>
              <div className={style.inputwrap}>
                <div className={style.inputtitle}>
                  Enter Players Contact No.
                </div>
                <input
                  required
                  onChange={(e) => {
                    setPlayerContact(e.target.value);
                  }}
                  className={style.input}
                  type="text"
                />
              </div>
              <button
                className={style.submit}
                onClick={() => {
                  AddPlayer();
                }}
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EditTeam() {
  const [teamName, setTeamName] = useState();
  const [teamDesc, setTeamDesc] = useState();
  const [teamContact, setTeamContact] = useState();
  const [loading, setLoading] = useState();

  async function updateTeam() {
    const token = localStorage.getItem("token");
    setLoading(true);
    let res = await fetch(`${ApiRoute}Client/Dashboard/UpdateTeam`, {
      method: "POST",

      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TeamName: teamName,
        TeamContact: teamContact,
        TeamDescription: teamDesc,
      }),
    });
    setLoading(false);
    let data = await res.json();
    console.log(data);
    Swal.fire({
      icon: data.code === 200 ? "success" : "error",
      title: data.msg,
    });
    setTeamContact();
    setTeamDesc();
    setTeamName();
  }
  if (loading) return <Loading />;

  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.main}>
          <div className={style.content}>
            <div className={style.title}>Update your Team information</div>
            <div className={style.form}>
              <div className={style.inputwrap}>
                <div className={style.inputtitle}>Enter your team name</div>
                <input
                  required
                  onChange={(e) => {
                    setTeamName(e.target.value);
                  }}
                  className={style.input}
                  type="text"
                />
              </div>
              <div className={style.inputwrap}>
                <div className={style.inputtitle}>
                  Enter your team contact no.
                </div>
                <input
                  required
                  onChange={(e) => {
                    setTeamContact(e.target.value);
                  }}
                  className={style.input}
                  type="text"
                />
              </div>
              <div className={style.inputwrap}>
                <div className={style.inputtitle}>
                  Enter your team Description
                </div>
                <input
                  required
                  onChange={(e) => {
                    setTeamDesc(e.target.value);
                  }}
                  className={style.input}
                  type="text"
                />
              </div>
              <button
                onClick={() => {
                  updateTeam();
                }}
                className={style.submit}
              >
                Update Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamInfo() {
  const [teamInfo, setTeamInfo] = useState();
  const [teamActiveStatus, setTeamActiveStatus] = useState();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState();

  async function getTeam() {
    setLoading(true);
    let response = await fetch(`${ApiRoute}Client/Dashboard/getMyTeams`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setLoading(false);
    const data = await response.json();
    setTeamInfo(data);
  }

  async function deleteTeamMember(userid) {
    const response = await fetch(`${ApiRoute}Client/Dashboard/DeletePlayer`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TeamMembers: {
          _id: `${userid}`,
        },
      }),
    });
    const resData = await response.json();
    Swal.fire({
      icon: "success",
      title: "inp.msg",
    });
    if (resData.code === 200) {
      Swal.fire({
        icon: "success",
        title: "Player deleted successfully.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Player not deleted!",
      });
    }
    getTeam();
  }

  async function getTeamActiveStatus(userid) {
    const response = await fetch(
      `${ApiRoute}Client/Dashboard/SetTeamActive?action=status`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const resData = await response.json();
    setTeamActiveStatus(resData?.isActive);
  }

  useEffect(() => {
    getTeam();
    getTeamActiveStatus();
  }, []);

  async function deleteTeam() {
    const response = await fetch(
      `${ApiRoute}Client/Dashboard/DeleteTeam`,

      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const resData = await response.json();
    alert(resData.msg);
    window.location.pathname = window.location.pathname;
  }

  const confirmx = () => {
    if (window.confirm("are you sure?") == true) {
      deleteTeam();
    } else {
      alert("team not deleted");
    }
  };

  async function toggleActiveStatus() {
    const response = await fetch(`${ApiRoute}Client/Dashboard/SetTeamActive`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TeamActiveForChallange: !teamActiveStatus,
      }),
    });
    let resData = await response.json();
    console.log(resData);
    Swal.fire({
      icon: "success",
      title: resData.msg,
    });
    getTeamActiveStatus();
  }

  if (loading) return <Loading />;
  return (
    <React.Fragment>
      <section className={style.section}>
        <div className="container">
          <div className={style.infowrap}>
            <ShowActiveTeams />
            <div className={style.contentt}>
              <div className="row">
                <div className="col-sm-9">
                  <div className={style.TeamTitle}>My Team:</div>
                  <div className={style.TeamTitle}>{teamInfo?.TeamName}</div>
                  <div className={style.TeamContact}>
                    {teamInfo?.TeamContact}
                  </div>
                  <div className={style.TeamDesc}>
                    {teamInfo?.TeamDescription}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className={style.activeSettings}>
                    <div className={style.act}>Open for Challanges??</div>
                    <div className={style.blah}>
                      Currently : {teamActiveStatus ? "Active" : "Not Active"}{" "}
                    </div>
                    <button onClick={toggleActiveStatus} className={style.btnn}>
                      {!teamActiveStatus ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>
              </div>

              <table className={`table , ${style.tableMain}`}>
                <thead className={`thead-dark ${style.tableHead}`}>
                  <tr>
                    <th scope="col">Sn</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">More</th>
                  </tr>
                </thead>

                <tbody>
                  {teamInfo?.TeamMembers.map((player, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td className={style.tableInfo}>{player.MemberName}</td>
                      <td className={style.tableInfo}>{player.MemberPhone}</td>
                      <td className={style.tableInfo}>
                        <MdDelete
                          size={`1.5em`}
                          onClick={() => {
                            deleteTeamMember(player._id);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {teamInfo?.TeamMembers.length < 1 && (
                <div
                  style={{ textAlign: "center", color: "red", width: "100%" }}
                >
                  No members, Add some to see their details.
                </div>
              )}
            </div>
            <div className={style.moreSection}>
              <div className={style.btnGrp}>
                <Link className={style.btnLink} to="/AddMember">
                  <button className={style.TeamSettingBtn}>Add Member</button>
                </Link>

                <Link className={style.btnLink} to="/EditTeaminfo">
                  <button className={style.TeamSettingBtn}>Edit Info</button>
                </Link>

                <button
                  onClick={confirmx}
                  className={`${style.btnLink} , ${style.TeamSettingBtn}`}
                >
                  Delete Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function Team() {
  const [hasTeam, setHasTeam] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getTeam();
  }, []);

  async function getTeam() {
    const token = localStorage.getItem("token");

    let response = await fetch(`${ApiRoute}Client/Dashboard/getMyTeams`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    setLoading(false);
    data?.TeamName ? setHasTeam(true) : setHasTeam(false);
  }

  if (loading) return <Loading />;
  return (
    <React.Fragment>{hasTeam ? <TeamInfo /> : <CreateTeam />}</React.Fragment>
  );
}

export { CreateTeam, AddMember, EditTeam, TeamInfo, Team };
