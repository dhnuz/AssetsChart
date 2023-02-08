import React from "react";
import { Typography } from "@mui/material";
const Navbar = () => {
  return (
    <div className="nav_container">
      <Typography sx={{ textAlign: "center" }} fontWeight={1000}>
        {" "}
        Welcome Back ,John Doe !
      </Typography>
    </div>
  );
};

export default Navbar;
