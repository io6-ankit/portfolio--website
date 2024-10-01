import logo from "./logo.svg";
import Box from "@mui/material/Box";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import { Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" element={<Navbar />} />

        {/* <Home /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/skill" element={<Skills />} />
      </Router>
    </>
  );
}

export default App;
