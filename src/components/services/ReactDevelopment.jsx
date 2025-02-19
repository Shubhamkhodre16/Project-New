import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";

const ReactDevelopment = () => {
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundReact}>
        <Navbar />
        <Typography
          className={styles.imageTitle}
          fontSize={{
            xs: "30px",
            sm: "30px",
            md: "45px",
            lg: "60px",
            xl: "60px",
          }}
          sx={{ paddingTop: "200px !important" }}
        >
          React Js
        </Typography>
        <Typography
          className={styles.imageSubTitle}
          fontSize={{
            xs: "18px",
            sm: "18px",
            md: "20px",
            lg: "25px",
            xl: "25px",
          }}
        >
          InfoKoders Technologies delivers interactive designs for multiple web
          and mobile development projects. We are a renowned and leading Custom
          Application Development company building innovative applications such
          as UI/UX design, development, deployment, maintenance, and support.
          With our expertise and professional values, we adhere to providing
          exclusive and customized React.js Apps for all businesses and
          enterprises.
        </Typography>
      </Grid>
    </Box>
  );
};

export default ReactDevelopment;
