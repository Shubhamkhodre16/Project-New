"use client";
import React from "react";
import styles from "../../../styles/RoRBlog.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Navbar from "../../navbar/Navbar";
import brightness from "../../../../public/assets/img/arrow-right.svg";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import Footer from "../../footer/Footer";

const ReactNativeBlog = () => {
  return (
    <>
      <Box className={styles.rorContainer}>
        <Grid id="carousel" className={styles.backgroundReact}>
          <Grid>
            <Navbar />
            <Typography
              className={styles.imageSubTitle}
              fontSize={{
                xs: "28px",
                sm: "30px",
                md: "35px",
                lg: "45px",
                xl: "45px",
              }}
              textAlign="center"
            >
              React Native
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "NovemberPro-Reg",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Author&nbsp;&nbsp;admin{"\u00A0\u00A0"} Posted on&nbsp;&nbsp; June
              24, 2020{"\u00A0\u00A0"} In&nbsp;&nbsp;Design{"\u00A0\u00A0"} No
              Comments
            </Typography>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  );
};

export default ReactNativeBlog;
