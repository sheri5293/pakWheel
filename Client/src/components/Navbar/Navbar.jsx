/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const isMatch = useMediaQuery("(max-width: 600px)");
  const location = useLocation();

  useEffect(() => {
    const authToken = Cookies.get("authToken");
    setIsLoggedIn(!!authToken);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAuthClick = () => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      return;
    }
    navigate("/login");
  };

  const handleLogout = () => {
    Cookies.remove("authToken");
    Cookies.remove("authTokenExpiry");
    navigate("/login");
    window.location.reload();
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { id: 1, name: "Home", path: "/" },
          { id: 2, name: "About", path: "/about" },
          { id: 3, name: "Services", path: "/services" },
        ].map((item) => (
          <ListItem button component={NavLink} to={item.path} key={item.id}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          height: "60px",
          background: isScrolled ? "rgba(0, 0, 0, 0.7)" : "transparent",
          boxShadow: isScrolled ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none",
          padding: 0,
          margin: 0,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1300,
          transition: "background-color 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "transparent",
            padding: 0,
            transition: "opacity 0.3s ease",
            opacity: isScrolled ? 0 : 1,
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                color: isAuthPage ? "black" : "white",
              }}
            >
              St Cars
            </Typography>
          </NavLink>
          {!isMatch ? (
            !isAuthPage && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  {[
                    { id: 1, name: "Home", path: "/" },
                    { id: 2, name: "About", path: "/about" },
                    { id: 3, name: "Services", path: "/services" },
                  ].map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography sx={{ color: "white", paddingX: 2 }}>
                        {item.name}
                      </Typography>
                    </NavLink>
                  ))}
                </Box>
              </Box>
            )
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ marginLeft: "auto", display: "flex", gap: 1 }}>
            <IconButton
              onClick={handleAuthClick}
              sx={{ color: "white" }}
              disabled={isAuthPage}
            >
              <PersonIcon />
            </IconButton>
            {isLoggedIn && !isAuthPage && (
              <IconButton onClick={handleLogout} sx={{ color: "white" }}>
                <LogoutIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </ThemeProvider>
  );
}

export default Navbar;
