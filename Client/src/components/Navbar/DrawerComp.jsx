/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function DrawerComp({ openDrawe, setOpenDrawer }) {
  const PAGES = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Signup", path: "/signup" },
    { id: 5, name: "Login", path: "/login" },
  ];

  return (
    <Drawer
      open={openDrawe}
      onClose={() => setOpenDrawer(false)}
      sx={{ ".MuiDrawer-paper": { padding: "20px 10px", border: "none" } }}
    >
      <List>
        {PAGES.map((item) => (
          <ListItemButton
            key={item.id}
            component={NavLink}
            to={item.path}
            onClick={() => setOpenDrawer(false)}
            exact
            activeClassName="active"
          >
            <ListItemIcon>
              <ListItemText>
                <Typography
                  variant="body1"
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.name}
                </Typography>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default DrawerComp;
