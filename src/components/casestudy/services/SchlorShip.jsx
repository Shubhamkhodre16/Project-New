import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import ClientAchivement from "../clientAchivement/ClientAchivement";
import Solutions from "../clientAchivement/Solutions";
import ProductGoals from "../clientAchivement/ProductGoals";
import Portal from "../clientAchivement/Portals";
import Features from "../clientAchivement/Features";
import Contact from "../clientAchivement/Contact";
import Footer from "../../footer/Footer";

const Schlorship = () => {
  return (
    <>
      <Box>
        {/* Header and image  */}
        <Grid id="carousel" className={styles.backgroundSchlorship}>
          <Navbar />
          <Typography
            className={styles.imageTitle}
            fontSize={{
              xs: "23px",
              sm: "22px",
              md: "25px",
              lg: "30px",
              xl: "30px",
            }}
          >
            Case Study
          </Typography>
          <Typography
            className={styles.imageSubTitle}
            fontSize={{
              xs: "23px",
              sm: "25px",
              md: "30px",
              lg: "35px",
              xl: "35px",
            }}
          >
            A Online Scholarship Management Platform - fulfilling Educational
            Aspirations of Million Students
          </Typography>
        </Grid>
        <ProductGoals />
        <Solutions />
        <Portal />
        {/* Client Achivement  */}
        <ClientAchivement />
        <Features />
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default Schlorship;
