import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import CardMedia from "@mui/material/CardMedia";

const Features = () => {
  const featuresData = [
    {
      des: "The platform provides advisory services to member priorities for digital payments",
    },
    {
      des: "Share action-oriented research and foster peer learning",
    },
    {
      des: "Conduct advocacy at a national, regional, and global level",
    },
    {
      des: "Provide awareness of digital payments through content sharing",
    },
  ];

  return (
    <>
      <Box className={styles.featuresMain}>
        <Grid className={styles.featureContainer}>
          <Grid textAlign="center" >
            <Typography className={styles.featureHeader} >Features</Typography>
          </Grid>

          <Grid container spacing={3}>
            {featuresData?.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 12, md:6, lg: 6 }}
                key={index}
                className={styles.featureBox}
              >
                <CardMedia
                  sx={{ width: "80px", height: "80px", marginBottom: "10px" }}
                  component="img"
                  image="../../../../public/assets/img/DataBackup.gif"
                />

                {/* <Typography>{item?.title}</Typography> */}
                <Typography>{item?.des}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Features;
