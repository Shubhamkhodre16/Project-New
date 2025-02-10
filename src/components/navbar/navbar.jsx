"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import logo from "../../../public/assets/img/logo-color.png";
import logo1 from "../../../public/assets/img/logo.png";


const pages = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Case Studies", path: "/caseStudies" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Start Up", path: "/startup" },
  // { name: "Careers", path: "/career" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      const carousel = document.getElementById("carousel");
      if (carousel) {
        const carouselBottom = carousel.getBoundingClientRect().bottom;
        setIsFixed(carouselBottom <= window.innerHeight * 0.1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);

  return (
    <AppBar
      sx={{
        backgroundColor: isFixed ? "white" : "transparent",
        boxShadow: isFixed ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        position: isFixed ? "fixed" : "absolute",
        top: 0,
        width: "100%",
        transition: "all 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      <Container sx={{ padding: "10px", height: "90px" }} maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <Image src={ isFixed ? logo : logo1} alt="logo" className={styles.logo} />
          </Link>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton  size="large" aria-label="menu" onClick={handleOpenDrawer}  color="white">
              <MenuIcon  />
            </IconButton>

            {/* Drawer Sidebar */}
            <Drawer PaperProps={{ sx: { width: "300px" } }} anchor="left" open={drawerOpen} onClose={handleCloseDrawer}>
              <Box sx={{ display: "flex" }}>
                <Link onClick={handleCloseDrawer} href="/" passHref>
                  <Image src={logo} alt="logo" width={150} height={20}  style={{ margin: "20px"  }} />
                </Link>
                <span onClick={handleCloseDrawer}>
                  <CloseIcon sx={{ margin: "12px", marginLeft: "60px" }} />
                </span>
              </Box>

              <List sx={{ margin: "20px", fontSize: "16px", fontWeight: "bold" }}>
                {pages.map(({ name, path }) => (
                  <ListItem key={name} onClick={handleCloseDrawer}>
                    <Link href={path} passHref style={{ textDecoration: "none", color: "inherit" }}>
                      <ListItemText
                        sx={{
                          // "&:hover": { color: "#650909" },
                          backgroundColor: pathname === path ? "#181836" : "transparent",
                          color: pathname === path ? "#fff" : "black",
                          padding: pathname === path ? "10px 20px" : "5px 15px",
                          borderRadius: pathname === path ? "5%" : "",
                        }}
                        primary={name}
                        className={styles.navText}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              marginRight: "50px",
            }}
          >
            {pages.map(({ name, path }) => (
              <Link key={name} href={path} passHref>
                <Typography
                  sx={{
                    my: 2,
                    mx: 1.2,
                    fontSize: "16px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "color 0.3s",
                    // "&:hover": { color: "#650909" },
                    backgroundColor: pathname === path ? "#3333" : "transparent",
                    color: pathname === path ? "#fff" : isFixed ? "black" : "white",
                    padding: pathname === path ? "10px 20px" : "5px 15px",
                    borderRadius: pathname === path ? "10px" : "",
                  }}
                  className={styles.navText}
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
