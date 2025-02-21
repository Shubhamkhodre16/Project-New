import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";

const AngularDevelopment = () => {
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundAngular}>
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
          Angular Development
        </Typography>
      </Grid>
    </Box>
  );
};

export default AngularDevelopment;
