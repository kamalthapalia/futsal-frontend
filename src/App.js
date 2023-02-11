import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Fragment, useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
// import BlogList from "./components/BlogList/BlogList";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Client/HomePage/HomePage";
import Home from "./Pages/Client/Home/Home";
import AvailableMatches from "./components/AvailableMatches/AvailableMatches";
import Loading from "./components/Loading/Loading";
import Dashboard from "./Pages/Client/Dashboard/Dashboard";
import Statstics from "./Pages/Client/Statstics/Statstics";
import LoggedNavbar from "./Pages/Client/LoggedNavbar/LoggedNavbar";
import Dash from "./Pages/Client/Dash/Dash";
import BlogPage from "./components/BlogPage/BlogPage";
import {
  CreateTeam,
  AddMember,
  EditTeam,
  TeamInfo,
  Team,
} from "./components/Team/Team";
import PaymentPopup from "./components/PaymentPopup/PaymentPopup";
import ApiRoute from "./ApiRoute";
import AllBlogs from "./components/AllBlogs/AllBlogs";

function App() {
  const [userloginstatus, setUserloginstatus] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [bookDate, setBookDate] = useState({});
  const [price, setPrice] = useState();
  const token = localStorage.getItem("token");

  async function getActiveTeams() {
    const response = await fetch(`${ApiRoute}Client/Dashboard/getActiveTeams`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const resData = await response.json();
    resData.code === 900 ? setUserloginstatus(false) : setUserloginstatus(true);
    setFetching(false);
  }

  useEffect(() => {
    getActiveTeams();
  }, [userloginstatus]);

  if (fetching) return <Loading />;

  const test = false;
  if (test)
    return (
      <Fragment>
        {/* <Navbar />

      <Hero />
      <About />
       <Testimonials /> 
       <BlogList />
       <Statstics />
       <LoggedNavbar />
       <Team />
       <BlogPage />
<AllBlogs />
      <Footer /> */}
        {/* <AvailableMatches /> */}

        {showPopup && (
          <PaymentPopup
            setShowPopup={setShowPopup}
            bookDate={bookDate}
            price={price}
          />
        )}
        <AvailableMatches
          setPrice={setPrice}
          setBookDate={setBookDate}
          setShowPopup={setShowPopup}
        />
      </Fragment>
    );

  if (userloginstatus) {
    return (
      <Fragment>
        {showPopup && (
          <PaymentPopup
            setShowPopup={setShowPopup}
            bookDate={bookDate}
            price={price}
          />
        )}
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route
              path="/"
              element={
                <Dash
                  setShowPopup={setShowPopup}
                  setBookDate={setBookDate}
                  setPrice={setPrice}
                />
              }
            />
            <Route path="/Team" element={<Team />}></Route>
            <Route path="/AddMember" element={<AddMember />}></Route>
            <Route path="/EditTeaminfo" element={<EditTeam />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Fragment>
    );
  }

  if (!userloginstatus)
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/Login"
              element={userloginstatus ? <Navigate to="/" /> : <Login />}
            ></Route>
            <Route
              path="/Signup"
              element={userloginstatus ? <Navigate to="/" /> : <Signup />}
            ></Route>
            <Route path="/Blogs" element={<AllBlogs />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </Fragment>
    );
}

export default App;
