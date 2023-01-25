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

function App() {
  const [userloginstatus, setUserloginstatus] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    async function checkUserToken() {
      const token = localStorage.getItem("token");
      setFetching(true);
      let response = await fetch(
        `http://localhost:8000/Client/Dashboard/getPastBookings`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const data = await response.json();
      data?.code == 400 ? setUserloginstatus(false) : setUserloginstatus(true);

      data?.code == 400
        ? localStorage.setItem("token", "")
        : setUserloginstatus(true);
      setFetching(false);
    }

    checkUserToken();
  }, [userloginstatus]);

  // if (fetching) return <Loading />;

  const test = false;
  if (test)
    return (
      <Fragment>
        {/* <Navbar />

      <Hero />
      <About />
       <Testimonials /> 
      <Login />
      <Signup />
      <BlogList />
    <Statstics />
<LoggedNavbar />
    <Footer /> */}

<BlogPage />

        {/* <AvailableMatches /> */}
      </Fragment>
    );

  if (userloginstatus) {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<Dash />} />
            <Route path="/stats" element={<Statstics />} />
            <Route path="*" element={<Dash />} />
          </Route>
        </Routes>
      </Fragment>
    );
  }

  if (!userloginstatus)
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage loginstatus={userloginstatus} />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </Fragment>
    );
}

export default App;
