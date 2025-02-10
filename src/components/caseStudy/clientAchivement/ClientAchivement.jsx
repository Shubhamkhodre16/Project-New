import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import brightness from "../../../../public/assets/img/arrow-right.svg";

const ClientAchivement = () => {
  return (
    <>
      <Box sx={{ marginTop: 10 }}>
        <Grid className={styles.mainAchivement}>
          <Grid className={styles.achivementContainer}>
            <Grid className={styles.achivetitle}>
              <Typography>Client Achievement</Typography>
            </Grid>
            {/* Data  */}
            <Grid container={true} spacing={8} className={styles.achiveData}>
              <Grid size={{ xs: 12,  sm:12, md:4, lg: 4 }}>
                <span className={styles.brightness}>
                  {/* <Image
                    src={brightness}
                    alt="sd"
                    /> */}
                  17
                </span>
                <Typography>
                  A great number of freelancers and clients have registered into
                  this platform and shared their success stories
                </Typography>
              </Grid>
              <Grid size={{ xs: 12,  sm:12, md:4, lg: 4 }}>
                <span className={styles.brightness}>
                  {/* <Image
                    src={brightness}
                    alt="sd"
                    /> */}
                  17
                </span>
                <Typography>
                  A great number of freelancers and clients have registered into
                  this platform and shared their success stories
                </Typography>
              </Grid>
              <Grid size={{ xs: 12,  sm:12, md:4, lg: 4 }}>
                <span className={styles.brightness}>
                  {/* <Image
                    src={brightness}
                    alt="sd"
                    /> */}
                  17
                </span>
                <Typography>
                  A great number of freelancers and clients have registered into
                  this platform and shared their success stories
                </Typography>
              </Grid>
            </Grid>
            {/* Integrated tech Stack */}

            <Grid className={styles.techMain}>
              <Grid className={styles.techHeading}>
                <Typography className={styles.techHeading}>
                  Integrated tech Stack
                </Typography>
              </Grid>
              <Grid container spacing={4} className={styles.techContainer}>
                <Grid size={{ xs: 12,  sm:12, md:4, lg: 4 }} className={styles.techBox}>
                  <Typography>Frontend</Typography>
                  <Typography>React Js/Next js</Typography>
                </Grid>
                <Grid size={{ xs: 12,  sm:12, md:4, lg: 4 }} className={styles.techBox}>
                  <Typography>Frontend</Typography>
                  <Typography>React Js/Next js</Typography>
                </Grid>
                <Grid size={{ xs: 12,  sm:12, md:4, lg: 4 }} className={styles.techBox}>
                  <Typography>Frontend</Typography>
                  <Typography>React Js/Next js</Typography>
                </Grid>
              </Grid>
            </Grid>
         
            {/* Project Insights  */}

            <Grid className={styles.techMain}>
              <Grid className={styles.techHeading}>
                <Typography className={styles.techHeading}>
                Project Insights
                </Typography>
              </Grid>
              <Grid container spacing={4} className={styles.techContainer}>
                <Grid size={{ xs: 12,  sm:12, md:4, lg: 4 }} className={styles.techBox}>
                  <Typography>Frontend</Typography>
                  <Typography>React Js/Next js</Typography>
                </Grid>
                <Grid size={{ xs: 12,  sm:12, md:4, lg: 4 }} className={styles.techBox}>
                  <Typography>Frontend</Typography>
                  <Typography>React Js/Next js</Typography>
                </Grid>
                <Grid size={{ xs: 12,  sm:12, md:4, lg: 4 }} className={styles.techBox}>
                  <Typography>Frontend</Typography>
                  <Typography>React Js/Next js</Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ClientAchivement;
