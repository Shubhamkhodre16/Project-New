import React from 'react';
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box className={styles.contactMain} >
        <Grid justifyContent="center" container spacing={10} className={styles.gridContainer} >
            <Grid>
                <Typography>Have a similar project idea?</Typography>
                <Typography>Share your requirements and get a free consultation.</Typography>
            </Grid>
            <Grid>
                <Button variant="contained" >Contact Now</Button>
            </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Contact
