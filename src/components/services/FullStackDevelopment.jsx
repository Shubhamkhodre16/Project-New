import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";

const FullStackDevelopment = () => {
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundFullStack}>
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
        >
          End to End Full Stack Development
        </Typography>
      </Grid>
    </Box>
  );
};

export default FullStackDevelopment;
