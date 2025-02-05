import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import styles from "./ourprocess.module.css";

const processSteps = [
  "Requirement Gathering",
  "Planning",
  "Designing",
  "Development",
  "Testing",
  "Deployment",
  "Maintenance"
];

const OurProcess = () => {
  return (
    <div className={styles.carouselContainer}>
      <Typography className={styles.title}>OUR PROCESS</Typography>

      {/* Grid Layout for Desktop and Smaller Screens */}
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {/* Step 1 to 7: Bullets and Text */}
        <Grid item xs={12} sm={12} md={12}>
          <div className={styles.bulletsContainer}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.stepContainer}>
                <div className={styles.bullets}>{index + 1}</div>
                <div className={styles.header}>{step}</div>
                <p className={styles.description}>
                  The first imperative step in our product development process is gathering requirements and analyzing it.
                </p>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurProcess;
