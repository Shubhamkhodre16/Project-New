import React from 'react';
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Navbar from '../../navbar/Navbar';
import ClientAchivement from "../clientAchivement/ClientAchivement";
import Solutions from "../clientAchivement/Solutions";
import ProductGoals from "../clientAchivement/ProductGoals";
import Portal from "../clientAchivement/Portals";
import Features from "../clientAchivement/Features";
import Contact from "../clientAchivement/Contact";
import Footer from '../../footer/page';


const Schlorship = () => {
  return (
    <>
      <Box>
           {/* Header and image  */}
           <Grid  id="carousel" className={styles.background}>
          <Navbar />
          <Typography
            fontSize={{
              xs: "20px",
              sm: "22px",
              md: "22px",
              lg: "22px",
              xl: "35px",
            }}
            className={styles.case}
          >
            Case Studies
          </Typography>
        </Grid> 
        <ProductGoals/> 
           <Solutions/>
           <Portal/>
        {/* Client Achivement  */}
        <ClientAchivement/> 
        <Features/>
        <Contact/>
        <Footer/>
        
      </Box>
    </>
  )
}

export default Schlorship;