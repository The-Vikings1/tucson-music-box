import Link from "next/link";
import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { fetchUserInfo } from "../slices/userSlice";
import AdbIcon from "@mui/icons-material/Adb";
import DiamondIcon from "@mui/icons-material/Diamond";

let pages;
const pagesLoggedOut = ["Products"];
const pagesLoggedIn = ["Products", "My Orders"];

export default function ButtonAppBar() {
  const userInfo = useSelector(fetchUserInfo);
  console.log(userInfo);
  if (userInfo) {
    pages = pagesLoggedIn;
  } else {
    pages = pagesLoggedOut;
  }
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <DiamondIcon />
              </Button>
            </Link>
            <Link href="../pages/contact/contact.js">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <h2>Contact</h2>
              </Button>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Link href="/profile">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
