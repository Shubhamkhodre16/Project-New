import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";

const Contact = ({ title = "", subTitle = "", isFreelance = false }) => {
  return (
    <>
      <Box className={styles.contactMain}>
        <Grid
          sx={{ display: "flex" }}
          container
          spacing={10}
          className={styles.gridContainerContact}
        >
          <Grid>
            <Typography
              sx={{ fontFamily: "NovemberPro" }}
              fontSize={{
                lg: isFreelance ? "25px" : "35px",
                md: isFreelance ? "22px" : "26px ",
                sm: "30px",
                xs: "22px",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{ fontFamily: "NovemberPro-Reg" }}
              fontSize={{ lg: "20px", md: "16px ", sm: "18px", xs: "16px" }}
            >
              {subTitle}
            </Typography>
          </Grid>
          <Grid>
            <Button
              sx={{
                backgroundColor: "#fff !important",
                marginTop: "20px",
                color: "#333 !important",
                justifyContent: isFreelance ? "center" : "",
              }}
              className={styles.productButton}
              variant="contained"
            >
              Contact Now
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
