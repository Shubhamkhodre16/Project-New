"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
// import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import logo from "../../../public/assets/img/logo-color.png";

const pages = [
  // { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Case Studies", path: "/caseStudies" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Start Up", path: "/startup" },
  { name: "Careers", path: "/career" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar sx={{ backgroundColor: "#ffffff" }} position="fixed">
      <Container
        sx={{
          paddingLeft: "0px !important",
          marginLeft: "15px !important",
          marginRight: "0px !important",
        }}
        maxWidth="xl"
      >
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <Image src={logo} alt="logo" className={styles.logo} />
          </Link>

          {/* Mobile Options Menu Bar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              "@media (min-width:750px)": { display: "none" },
            }}
          >
            {/* Menu Icon */}
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenDrawer}
              color="black"
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer (Sidebar) */}
            <Drawer
              PaperProps={{ sx: { width: "300px" } }}
              anchor="left"
              open={drawerOpen}
              onClose={handleCloseDrawer}
            >
              <Box sx={{ display: "flex" }}>
                <Link onClick={handleCloseDrawer} href="/" passHref>
                  <Image
                    src={logo}
                    alt="logo"
                    width={150}
                    height={20}
                    style={{ margin: "20px" }}
                  />
                </Link>
                <span onClick={handleCloseDrawer}>
                  <CloseIcon sx={{ margin: "12px", marginLeft: "60px" }} />
                </span>
              </Box>

              <List
                sx={{
                  margin: "20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "circular",
                }}
              >
                {pages.map(({ name, path }) => (
                  <ListItem key={name} onClick={handleCloseDrawer}>
                    <Link
                      href={path}
                      passHref
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItemText
                        sx={{
                          "&:hover": {
                            color: "#650909", // Change color on hover
                          },
                        }}
                        primary={name}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* Desktop Options */}

          
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              marginRight: "50px",
              "@media (min-width:750px)": { display: "flex" },
              "@media (max-width:900px)": { marginRight: "0px" },
            }}
          >
            {pages.map(({ name, path }) => (
              <Link key={name} href={path} passHref>
                <Typography
                  sx={{
                    my: 2,
                    mx: 1.2,
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "circular",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#650909", // Change color on hover
                    },
                    "@media (max-width:900px)": { fontSize: "12px" },
                  }}
                >
                  {name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
