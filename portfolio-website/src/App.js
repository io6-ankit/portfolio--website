import logo from "./logo.svg";
import Box from "@mui/material/Box";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
    </>
  );
}

export default App;
