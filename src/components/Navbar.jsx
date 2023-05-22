import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../Utilities/mainIcon.png";
import SearchBar from "./SearchBar";
import BoxModal from "./Login/Modal";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      p={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        position: "sticky",
        backgroundColor: "rgb(34,35,39)",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Video_App" height={45} />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "28px",
            color: "rgb(200,200,200)",
          }}
        >
          &#160; InPlay
        </Typography>
      </Link>
      <SearchBar />
      <BoxModal />
    </Stack>
  );
};

export default Navbar;
