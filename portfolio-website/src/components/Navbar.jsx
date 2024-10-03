import React from "react";
import Box from "@mui/material/Box";

import "./Navbar.css";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClickedHomePage = () => {
    navigate("/home");
  };
  const handleClickedExperiencePage = () => {
    navigate("/experience");
  };
  const handleClickedContactPage = () => {
    navigate("/contact");
  };
  const handleClickedProjectsPage = () => {
    navigate("/project");
  };
  const handleClickedSkillsPage = () => {
    navigate("/skill");
  };

  return (
    <>
      <Box className="container nav_bar">
        <Box className="left">Portfolio</Box>
        <Box className="right">
          <ul className="main-list">
            <li onClick={() => handleClickedHomePage()} className="list">
              Home
            </li>

            <li onClick={() => handleClickedExperiencePage()} className="list">
              Experience
            </li>
            <li onClick={() => handleClickedSkillsPage()} className="list">
              Skills
            </li>
            <li onClick={() => handleClickedProjectsPage()} className="list">
              Projects
            </li>
            <li onClick={() => handleClickedContactPage()} className="list">
              Contact
            </li>
          </ul>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
