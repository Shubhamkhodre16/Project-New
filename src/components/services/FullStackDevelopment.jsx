import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box,Button } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import fullstack from '../../../public/assets/img/fullstack.png' 
const FullStackDevelopment = () => {
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundFullStack}>
        <Navbar />
        <Typography
          className={styles.imageTitle}
          sx={{
            fontSize:{
            xs: "30px",
            sm: "30px",
            md: "45px",
            lg: "45px",
            xl: "45px",},fontFamily:"NovemberPro"
          }}
        >
          End to End Full Stack Development
        </Typography>
      </Grid>
      {/* Scaling up the bussiness */}
      <Grid container spacing={2} className={styles.rubycontainer}>
      <Grid size={{xs:12,sm:12,md:6,lg:6}} sx={{ display:"flex",justifyContent:"center",alignItems:"center"}} >
        <Image
                  src={fullstack}
                  alt="fullstack"
                  width={500}
                  height={300}/>
        </Grid>
        <Grid size={{xs:12,sm:12,md:6,lg:6}}>
          <Typography className={styles.rubyTitle} sx={{fontSize:{lg:"25px",md:"22px",sm:"25px",xs:"22px"},fontFamily:"NovemberPro"}}> Scaling up the businesses with our full Stack Development Services</Typography>
          <Typography className={styles.rubySubtitle} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily: "NovemberPro-Reg"}}>Harness the end-end possibilities of our full-stack development services and achieve quality rich, unbeatable mobile or web apps that meet and greets your business goals. InfoKoders technologies is been esteemed as a <b> top full stack development company</b> for delivering a comprehensive gamut of cutting edge front-end and back-end development solutions.</Typography>
          <Button  sx={{fontSize:{lg:"16px",md:"14px",sm:"16px",xs:"14px"},fontFamily: "NovemberPro-Reg",cursor:"pointer",padding: "8px 18px",border: "1px solid transparent",color:"#ffffff",backgroundColor: "#333",marginBottom: "1rem",marginTop:"1rem",textTransform: "none"}}>Get in touch</Button>
        </Grid>
       
      </Grid>
      {/* visionary Full stack development */}
      <Grid container className={styles.visionaryContainer}>
        <Grid size={{xs:12,sm:12,md:12,lg:12}}>
        <Typography>Your visionary Full stack development Service Company that meets your development needs</Typography>
        </Grid>
        <Grid size={{xs:12,sm:12,md:6,lg:6}}>
          <Typography> Every company wants to accelerate its growth, and with our full-stack development services, you can accomplish that. Our full-stack developers have the extensive knowledge and experience essential to create full-fledged applications for your business.</Typography></Grid>
          <Typography>Being a <b>best full-stack development service provider</b> we specialises in a wide range of technologies, from front end prototyping to a full set of back end services</Typography>
         <Grid size={{xs:12,sm:12,md:6,lg:6}}></Grid>
      </Grid>
    </Box>
  );
};

export default FullStackDevelopment;
