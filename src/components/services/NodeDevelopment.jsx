import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";

const NodeDevelopment = () => {
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundNode}>
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
          Node Js Development
        </Typography>
      </Grid>
    </Box>
  );
};

export default NodeDevelopment;
