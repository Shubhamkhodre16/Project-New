import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

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
            lg: "45px",
            xl: "45px",
          }}
        >
          Angular Development
        </Typography>
      </Grid>
      <Grid container spacing={3} className={styles.angularContainer}>
        <Grid size={{xs:12,sm:12,md:6,lg:6}}>
        <Typography className={styles.angularintro}  sx={{fontSize:{lg:"25px",md:"22px",sm:"25px",xs:"22px"},fontFamily:"NovemberPro"}}>Introduction</Typography>
          <Typography className={styles.angularTitle} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg"}}><b>The innovations in the digital space today are making lives easier and faster and leaving customers with more choices than ever before.</b></Typography>
          <Typography className={styles.angularTitle} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg"}}>As the business environment continues to grow competitive with each passing day, you need to materialize your business concepts into successful web endeavors that efficiently utilizes various customization options. AngularJS lets you do exactly that. With our diverse AngularJS development services, InfoKoders Technilogies will help you build scalable, flexible and interactive web designs and applications that efficiently cater to your business needs.</Typography>
        </Grid>
        <Grid size={{xs:12,sm:12,md:6,lg:6}}>
         <Typography className={styles.angularTitleRight} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg"}}> AngularJS is a structured, client-side Javascript MVC framework. As a powerful and flexible JavaScript framework, it helps in building fast real-time solutions for enterprises. Widely used for browser-based application development and responsive website development, it is maintained by Google. AngularJS augments web-based applications and helps in building single-page applications with MVC (model view controller) capability. If you need responsive websites or web or mobile applications, AngularJS development can offer you flexible apps with high-end user experience.</Typography>
        </Grid>

      </Grid>
      <Footer/>
    </Box>
  );
};

export default AngularDevelopment;
