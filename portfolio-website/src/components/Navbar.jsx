import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import "./Navbar.css";
// import Home from "./Home";
const Navbar = () => {
  return (
    <>
      <Box className="container nav_bar">
        <Box className="left">Portfolio</Box>
        <Box className="right">
          <Link
            sx={{
              marginRight: "50px",
              fontSize: "25px",
              color: "white",
            }}
            href="#"
            // src={<Home />}
            underline="none"
          >
            Home
          </Link>
          <Link
            sx={{ marginRight: "50px", fontSize: "25px", color: "white" }}
            href="#"
            underline="none"
          >
            Experience
          </Link>
          <Link
            sx={{ marginRight: "50px", fontSize: "25px", color: "white" }}
            href="#"
            underline="none"
          >
            Skills
          </Link>
          <Link
            sx={{ marginRight: "50px", fontSize: "25px", color: "white" }}
            href="#"
            underline="none"
          >
            Projects
          </Link>
          <Link
            sx={{ marginRight: "50px", fontSize: "25px", color: "white" }}
            href="#"
            underline="none"
          >
            Contact
          </Link>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
