"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Menu,
  MenuItem,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import logo from "../../../public/assets/img/logo-color.png";
import logo1 from "../../../public/assets/img/logo.png";

const Navbar = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Case Studies", path: "/studies" },
    {
      name: "Services",
      path: "/services",
      subOptions: [
        { name: " Ruby on Rails", path: "/services/ror"},
        { name: "  React JS", path: "/services/react"},
        { name: " Node JS", path: "/services/node" },
        { name: " Angulars JS", path: "/services/angular" },
        {
          name: " End to End Full Stack Development",
          path: "/services/fullstack",
        },
        {
          name:" Ui/Ux",
          path:"/services/Ui"
        },
        { name: " AWS", path: "/services/aws" },
        { name: " Heroku", path: "/services/heroku" },
      ],
    },
    // { name: "Blog", path: "/blog" },
    { name: "Start Up", path: "/startup" },
    { name: "Careers", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [serviceAnchorEl, setServiceAnchorEl] = useState(null);
  const pathname = usePathname(); // Get the current route
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);
  // const [activeSubOptions, setActiveSubOptions] = useState(null);
  const handlePopoverOpen = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
      setServiceAnchorEl(null);

  };
  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

  const open = Boolean(serviceAnchorEl);

  return (
    <AppBar
      sx={{
        backgroundColor: isFixed ? "#fff" : "transparent",
        boxShadow: isFixed ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        position: isFixed ? "fixed" : "absolute",
        top: 0,
        width: "100%",
        transition: "all 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      <Container
        className={styles.navbarContainer}
        sx={{
          padding: "10px 10% 10px 10%",
          height: "110px",
          maxWidth: "100% !important",
        }}
        maxWidth="xl"
      >
        <Toolbar
        disableGutters>
          <Link href="/" passHref>
            <Image
              src={isFixed ? logo : logo1}
              alt="logo"
              className={styles.logo}
            />
          </Link>
          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              className={styles.iconButton}
              style={{
                backgroundColor: isFixed ? "#333" : "#fff",
                color: isFixed ? "#fff" : "#333",
                padding: "10px",
              }}
              size="medium"
              aria-label="menu"
              onClick={handleOpenDrawer}
              color="white"
            >
              <MenuIcon className={styles.iconButtonMenu} />
            </IconButton>

            {/* Drawer Sidebar */}
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
                sx={{ margin: "20px", fontSize: "16px", fontWeight: "bold" }}
              >
                {pages.map(
                  ({ name, path, subOptions }) => (
                    (
                      <Box key={name}>
                        {subOptions ? (
                          <ListItem onClick={toggleMobileDropdown}>
                            <ListItemText primary={name} />
                            <ArrowDropDownIcon />
                          </ListItem>
                        ) : (
                          <ListItem key={name} onClick={handleCloseDrawer}>
                            <Link
                              href={path}
                              passHref
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <ListItemText
                                sx={{
                                  backgroundColor:
                                    pathname === path
                                      ? "#181836"
                                      : "transparent",
                                  color: pathname === path ? "#fff" : "#333",
                                  padding:
                                    pathname === path
                                      ? "10px 20px"
                                      : "5px 15px",
                                  borderRadius: pathname === path ? "10px" : "",
                                }}
                                primary={name}
                                className={styles.navText}
                              />
                            </Link>
                          </ListItem>
                        )}
                        {mobileDropdownOpen && subOptions && (
                          <List sx={{ pl: 4 }}>
                            {subOptions.map((sub) => (
                              <ListItem
                                key={sub.name}
                                component={Link}
                                href={sub.path}
                                onClick={handleCloseDrawer}
                              >
                                <ListItemText primary={sub.name} />
                              </ListItem>
                            ))}
                          </List>
                        )}
                      </Box>
                    )
                  )
                )}
              </List>
            </Drawer>
          </Box>
          {/* Desktop Navigation */}
          <Box
            className={styles.navAlign}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              marginRight: "40px",
              marginTop: "13px",
            }}
          >
            {pages.map(({ name, path, subOptions }) => (
              <Box key={name}
              sx={{marginTop:pathname === path || subOptions ? "5px":""}}
              className={ pathname === path || subOptions ? "" : styles.navOption1}

              >
                {subOptions ? (
                  <div
                  style={{fontWeight: "bold",
                    textDecoration: "none",
                    fontFamily: "NovemberPro-Reg",
                    cursor: "pointer",
                    transition: "color 0.3s, background-color 0.3s",
                    backgroundColor:
                      pathname === path
                        ? isFixed
                          ? "#333"
                          : "#fff"
                        : "transparent",
                    color:
                      pathname === path
                        ? isFixed
                          ? "#fff"
                          : "#333"
                        : isFixed
                        ? "#333"
                        : "#fff",
                    padding: pathname === path ? "10px 20px" : "5px 15px",
                    borderRadius: pathname === path ? "5px" : "",
                    }}
                  className={styles.dropdown}
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <button className={styles.dropbtn}>
                   {name} 
                   {/* <i className="fa fa-caret-down"></i> */}
                    <ArrowDropDownIcon
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                    />
                  </button>
                  {open && (
                    <div className={styles.dropdownContent}>
                       
                       {subOptions?.map((item,index)=>(
                      <Link
                      key={item.name}
                      href={item?.path}>{item?.name}</Link>
                         
                       ))}
                    </div>
                  )}
                </div>
                ) : (
                  <Link 
                  
                  href={path} passHref>
                    <Typography
                      className={styles.navOption}
                      sx={{
                        my: 2,
                        mx: 1.2,
                        fontWeight: "bold",
                        textDecoration: "none",
                        fontFamily: "NovemberPro-Reg",
                        cursor: "pointer",
                        transition: "color 0.3s, background-color 0.3s",
                        backgroundColor:
                          pathname === path
                            ? isFixed
                              ? "#333"
                              : "#fff"
                            : "transparent",
                        color:
                          pathname === path
                            ? isFixed
                              ? "#fff"
                              : "#333"
                            : isFixed
                            ? "#333"
                            : "#fff",
                        padding: pathname === path ? "10px 20px" : "5px 15px",
                        borderRadius: pathname === path ? "5px" : "",
                        marginTop: pathname === path ? "6px" : "10px",
                      }}
                    >
                      {name}
                    </Typography>
                  </Link>
                )}

                {/* Move the Popover inside the Box to avoid syntax errors */}
   
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
