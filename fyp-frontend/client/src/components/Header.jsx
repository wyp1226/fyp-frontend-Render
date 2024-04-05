import React from "react";
import Typography from "@mui/material/Typography";
import Navigation from "./Navigation.jsx";
const Header = () => {
  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{ backgroundColor: "#E3F2FD", padding: "1rem" }}
      >
        RNA viruses secondary structures database
      </Typography>
      <Navigation />
    </>
  );
};

export default Header;
