import React from 'react';
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box className={styles.contactMain} >
        <Grid sx={{display:"flex"}} container spacing={10} className={styles.gridContainerContact} >
            <Grid>
                <Typography
                sx={{fontFamily:"NovemberPro"}}
              fontSize={{ lg: "35px", md: "26px ", sm: "30px", xs: "22px" }}
                
                >Have a similar project idea?</Typography>
                <Typography
                sx={{fontFamily:"NovemberPro-Reg"}}
              fontSize={{ lg: "20px", md: "16px ", sm: "18px", xs: "16px" }}
                
                >Share your requirements and get a free consultation.</Typography>
            </Grid>
            <Grid>
                <Button
                sx={{backgroundColor:"#fff !important",marginTop:"20px", color:"#333 !important"}}
              className={styles.productButton}
                variant="contained" >Contact Now</Button>
            </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Contact