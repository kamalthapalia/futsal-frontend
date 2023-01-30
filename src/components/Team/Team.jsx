import React from "react";
import style from "./Team.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";

function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const [teamDesc, setTeamDesc] = useState("");
  const [teamContact, setTeamContact] = useState("");

  async function createTeam() {
    const token = localStorage.getItem("token");

    let res = await fetch(
      `http://192.168.1.74:8000/Client/Dashboard/createTeam`,
      {
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
      }
    );
    let data = await res.json();
    console.log(data);
  }

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

function AddMember() {
  const [playerName, setPlayerName] = useState("");
  const [playerContact, setPlayerContact] = useState("");

  async function AddPlayer() {
    const token = localStorage.getItem("token");

    let res = await fetch(
      `http://192.168.1.74:8000/Client/Dashboard/AddPlayer`,
      {
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
      }
    );
    let data = await res.json();

    function alertt() {
      window.location.reload();
      alert(data.msg);
    }

    data.code === 200 ? alertt() : alert(data.msg);
  }

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
  const [teamName, setTeamName] = useState("");
  const [teamDesc, setTeamDesc] = useState("");
  const [teamContact, setTeamContact] = useState("");

  async function updateTeam() {
    const token = localStorage.getItem("token");

    let res = await fetch(
      `http://192.168.1.74:8000/Client/Dashboard/UpdateTeam`,
      {
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
      }
    );
    let data = await res.json();
    console.log(data);
  }

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
                Create team
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
  const token = localStorage.getItem("token");

  async function getTeam() {
    let response = await fetch(
      `http://192.168.1.74:8000/Client/Dashboard/getMyTeams`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();
    setTeamInfo(data);
  }

  async function deleteTeamMember(userid) {
    const response = await fetch(
      `http://192.168.1.74:8000/Client/Dashboard/DeletePlayer`,
      {
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
      }
    );
    const resData = await response.json();
    resData?.code == 200
      ? alert("Player Deleted Successfully")
      : alert("Failed to delete the player.");
    getTeam();
  }

  useEffect(() => {
    getTeam();
    console.log(teamInfo);
  }, []);
  return (
    <React.Fragment>
      <section className={style.section}>
        <div className="container">
          <div className={style.main}>
            <div className={style.contentt}>
              <div className={style.TeamTitle}>{teamInfo?.TeamName}</div>
              <div className={style.TeamContact}>{teamInfo?.TeamContact}</div>
              <div className={style.TeamDesc}>{teamInfo?.TeamDescription}</div>
              <div className={style.playerDetails}>
                <div className={`${style.playerRow} ${style.playerRowHeader}`}>
                  <div className={style.sn}>SN</div>
                  <div className={style.name}>Name</div>
                  <div className={style.phoneno}>Contact</div>
                  <div className={`${style.more} ${style.moreHeader}`}>
                    more
                  </div>
                </div>
                {teamInfo?.TeamMembers?.map((mem, index) => (
                  <div className={style.playerRow}>
                    <div className={style.sn}>{parseInt(index) + 1}</div>
                    <div className={style.name}>{mem.MemberName}</div>
                    <div className={style.phoneno}>{mem.MemberPhone}</div>
                    <div className={style.more}>
                      <MdDelete
                        onClick={() => {
                          deleteTeamMember(mem._id);
                        }}
                        size="2em"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
function Team() {
  return (
    <React.Fragment>
      <CreateTeam />
      <AddMember />
      <EditTeam />
      <
    </React.Fragment>
  );
}

export default Team;
