import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBarComponent from "../../components/nav/NavBarComponent";
import DrawerComponent from "../../components/nav/DrawerComponent";
import DrawerHeader from "../../components/nav/DrawerHeader";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import About from "./components/About";
import Skills from "./components/Skills";
import Connect from "./components/connect/Connect";
import Projects from "./components/Projects";
import OnlineCertifications from "./components/OnlineCertifications";
import Testimonials from "./components/Testimonials";
import ScrollProgressBar from "../../components/common/ScrollProgressBar";
import PageTransition from "../../components/common/PageTransition";
import {
  connect,
  experiences,
  skills,
  projects,
  about,
  onlineCertifications,
  testimonials,
} from "../../data/config";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectTheme } from "../../features/profile/profileSlice";
import { useEffect } from "react";
import "./styles/profile.css";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default function Profile() {
  const theme = useAppSelector(selectTheme);

  return (
    <Box sx={{ display: "flex" }} id="main" className={theme}>
      <CssBaseline />
      <ScrollProgressBar />
      <NavBarComponent />
      <DrawerComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} id="container">
        <DrawerHeader />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/experiences"
            element={
              <PageTransition>
                <Experiences details={experiences} />
              </PageTransition>
            }
          />
          <Route
            path="/skills"
            element={
              <PageTransition>
                <Skills details={skills} />
              </PageTransition>
            }
          />
          <Route
            path="/onlineCert"
            element={
              <PageTransition>
                <OnlineCertifications details={onlineCertifications} />
              </PageTransition>
            }
          />
          <Route
            path="/connect"
            element={
              <PageTransition>
                <Connect details={connect} />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About details={about} />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects details={projects} />
              </PageTransition>
            }
          />
          <Route
            path="/testimonials"
            element={
              <PageTransition>
                <Testimonials details={testimonials} />
              </PageTransition>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
}
