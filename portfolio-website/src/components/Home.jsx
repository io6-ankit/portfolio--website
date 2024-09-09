import React from "react";
import Box from "@mui/material/Box";
import "./Home.css";
import Man from "./assets/image/man.jpg.jpg";
const Home = () => {
  return (
    <Box className="container">
      <Box className="left-section">
        <h1 className="tytle">Hello! My Name is Ankit Maurya.</h1>
        <h1 className="tytle">I am a Frontend Developer</h1>
      </Box>
      <Box className="right-section">
        <img className="image" src={Man} alt="man" />
      </Box>
    </Box>
  );
};
export default Home;
