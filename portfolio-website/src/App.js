import logo from "./logo.svg";
import Box from "@mui/material/Box";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import { Route, Routes } from "react-router-dom";
import Experience from "./components/Experience";
import Project from "./components/project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        {/* <Home /> */}
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skill" element={<Skills />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
