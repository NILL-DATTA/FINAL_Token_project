import React, { FormEvent, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";

import Link from "next/link";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { useRouter } from "next/router";
import { logout } from "@/Toolkit/authSlice";
import { profile_pic } from "@/Api/Axios/Axios";
const pages = ["list", "Create"];

const settings = ["login", "Registration"];

export default function Header() {
  const [token, setToken] = useState(null);
  const [image, setImage] = useState<File|null>(null);
  const [firstName, setFirstName] = useState(null);
  const cookie = new Cookies();
  useEffect(() => {
   
    setToken(cookie.get("token"));
    setImage(cookie.get("profile_pic"));
    setFirstName(cookie.get("first_name"));
  }, [cookie]);
  
  const dispatch = useDispatch();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    dispatch(logout());
    // router.push("/auth/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#3E2F5B",marginBottom:"0px" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { lg: "flex", md: "flex", xs: "none" },
            }}
          >
            <Typography
              variant="h4"
              noWrap
              style={{
                // mr: 2,
                // display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 300,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                // marginTop:"30px"
              }}
            >
              Foodiz
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
               <MenuItem key={"123"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={`/`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Home
                    </Link>
                  </Typography>
                </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={`/cms/${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { lg: "none", md: "none", xs: "block" },
            }}
          ></Box>
          <Typography
            variant="h5"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Unitech
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <MenuItem key={"123"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={`/`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Home
                    </Link>
                  </Typography>
                </MenuItem>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  href={`/cms/${page.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
          <>
          {
            token?   <> <span style={{ marginRight: "20px",color:"#90e0ef",fontFamily:"Sofadi One",textTransform:"capitalize",fontSize:"20px"}}>
            <b> Hello {firstName}</b> 
          </span> </>: "" 
          }
          
          </>
         
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {token ? (
                  <>
                  <div>
                   
                   <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "100%",
                    }}
                    src={image? profile_pic(image):""}
                  />
                 </div>
                 
                  </>
                   
                ) : (
                  <>
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "100%",
                    }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                  />
                </>)}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings?.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    {" "}
                    <Link
                      href={`/auth/${setting.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {setting === "login" ? (
                        token ? (
                          <button onClick={handleLogout}>Logout</button>
                        ) : (
                          <button>Login</button>
                        )
                      ) : (
                        <button>{setting}</button>
                      )}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
